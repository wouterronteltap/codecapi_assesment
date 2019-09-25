import { Request, Response } from "express";

import { app } from '../app'
import { loadFromClient, addToClient } from "../cache";
import { fetchUsers, fetchUser } from "../users";
import { linkHeaderParser } from "./utils";

interface IUsersQuery {
    query: string,
    page?: string,
}

interface IUsersResponseData {
    items: IUser[],
    total_count: number
}

interface ILinkHeader{
    link: string
}

interface IUserResponse {
    data: IUser
}

interface IUsersResponse {
    data: IUsersResponseData,
    headers: ILinkHeader
}

interface IUser{
    login: string,
    id: number
}

export const initRoutes: () => void = () => {
    app.get('/user', async (req: Request, res: Response ) => {
        const query: IUsersQuery = req.query;
        const key: string = 'user:'+query.query;
        const fromCache = await loadFromClient(key);
        if(fromCache) {
            const parsed = JSON.parse(fromCache);
            res.json({...parsed, source: 'cache'});
        }else{
            fetchUser(query).then((response: IUserResponse) => {
                const { data } = response;
                addToClient(key, data);
                res.json({...data, source: 'api'})
            })
        }
    });
    app.get('/users', async (req: Request, res: Response ) => {
        const query: IUsersQuery = req.query;
        const key: string = 'users:'+Object.values(query).join('');
        const fromCache = await loadFromClient(key);
        if(fromCache){
            const parsed = JSON.parse(fromCache);
            res.json({...parsed, source: 'cache'});
        }else{
            fetchUsers(query).then((response: IUsersResponse) => {
                const { total_count, items } = response.data;
                const { link } = response.headers;
                if(!items.length){
                    res.status( 204).send();
                }
                const parsedLinks = link ? {links: linkHeaderParser(link)} : {};
                const data  = { total: total_count, users: items, ...parsedLinks };
                addToClient(key, data);
                res.json({...data, source: 'api'});
            });
        }
    });
};


export {};