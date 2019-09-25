import React from 'react';
import { List } from "@material-ui/core";
import { CustomListItem } from "./listitem";
import { Link } from 'react-router-dom';

import { IUsersResponse } from "../../types";


interface IProps {
    data: IUsersResponse
}

const UserList = React.memo((props: IProps) => {
    const {data} = props;
    return(
        <List dense={true}>
            {data && data.users && data.users.map((user) => (
                <CustomListItem key={user.id} user={ user }/>
            ))}
        </List>
    )
})

export { UserList };