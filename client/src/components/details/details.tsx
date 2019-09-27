import React from 'react';
import { Avatar, List, ListItem, ListItemText, ListItemAvatar, Button } from '@material-ui/core';
import { History } from "history";
import { IResponse } from "../../types";

interface IProps {
    data: IResponse,
    history: History
}

const UserDetails = React.memo((props: IProps) => {
    const { users }  = props.data;
    const {login, avatar_url, company, followers,following, name, location, bio, repos_url, html_url } = users[0];
    return(
        <List dense={true}>
            <ListItem>
                <ListItemAvatar>
                    <Avatar src={avatar_url} />
                </ListItemAvatar>
            </ListItem>
            <ListItem>
                <ListItemText primary={"Username: "} secondary={login}/>
            </ListItem>
            <ListItem>
                <ListItemText primary={"Name: "} secondary={name}/>
            </ListItem>
            {location &&
                <ListItem>
                    <ListItemText primary={"Location: "} secondary={name}/>
                </ListItem>}
            <ListItem>
                <ListItemText primary={"Profile: "} secondary={name}/>
            </ListItem>
            <ListItem>
                <a href={html_url}>
                    <ListItemText primary={"Github url: "} secondary={html_url}/>
                </a>
            </ListItem>
            <ListItem>
                <a href={repos_url}>
                    <ListItemText primary={"Repos url: "} secondary={repos_url}/>
                </a>
            </ListItem>
            {company &&
                <ListItem>
                    <ListItemText primary={"Company: "} secondary={company}/>
                </ListItem>}
            {bio &&
                <ListItem>
                    <ListItemText primary={"Bio: "} secondary={bio}/>
                </ListItem>}
            <ListItem>
                <ListItemText primary={"Followers: "} secondary={followers}/>
            </ListItem>
            <ListItem>
                <ListItemText primary={"Following: "} secondary={following}/>
            </ListItem>
            <Button variant={'outlined'} onClick={() => props.history.goBack()}>
                back
            </Button>
        </List>
    )
});

export { UserDetails };