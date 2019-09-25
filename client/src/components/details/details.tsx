import React from 'react';
import { Avatar, List, ListItem, ListItemText, ListItemAvatar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { IUser } from "../../types";



interface IProps {
    user: IUser
}

const UserDetails = React.memo((props: IProps) => {
    const {login, avatar_url, company, followers,following, name, location, bio, blog, repos_url, html_url } = props.user;
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
            <ListItem>
                <Link to={'/'}>
                    back
                </Link>
            </ListItem>
        </List>
    )
});

export { UserDetails };