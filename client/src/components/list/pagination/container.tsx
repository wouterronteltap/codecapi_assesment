import React from 'react';
import queryString from "query-string";
import { History } from "history";

import { PaginationButton } from './button';
import { ILinks } from "../../../types";
import { CONSTANTS } from "../../../utils/contants";

interface IProps {
    links?: ILinks,
    history: History,
    currentpage: number
}

const updatedPageParam = (currentSearch:string, index:number):string => {
    if(!queryString.parse(currentSearch).page){
        return currentSearch+CONSTANTS.PAGE_TEMPLATE(index)
    }else{
        return currentSearch.split('&')[0]+CONSTANTS.PAGE_TEMPLATE(index)
    }
}

const createPaginationArray = (lastPage: number, history: History, search:string, currentpage:number) => {
    let buttons = [];
    for(let i = 1; i <= lastPage; i++){
        buttons.push(
            <PaginationButton
                onClick={() => history.push(updatedPageParam(search, i))}
                key={i}
                index={i}
                active={i === currentpage}
            />
        )
    }
    return buttons
}

const PaginationContainer = React.memo((props: IProps ) => {
    const { links, history, currentpage } = props;
    if(!links){
        return null
    }
    const {search} = history.location;
    const lastPage = getLastPage(links, currentpage);
    return(
        <div style={{display: 'flex', flexWrap:'wrap', justifyContent:'space-around'}}>
            {createPaginationArray(lastPage, history, search, currentpage)}
        </div>
    )
})

export { PaginationContainer };

const getLastPage = (links : ILinks, currentPage: number) => {
    if(!links.last){
        return currentPage;
    }
    const parsedLink = queryString.parse(links.last);
    const page = parsedLink.page;
    return parseInt(page as string)
}