import React from "react";
import {
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  ListItemSecondaryAction
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { IUser } from "../../types";

interface IProps {
  user: IUser;
}

const CustomListItem = (props: IProps) => {
  const { user } = props;
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar src={user.avatar_url} />
      </ListItemAvatar>
      <ListItemText primary={user.login} secondary={"Score: " + user.score} />
      <ListItemSecondaryAction>
        <Link className={"showmore"} to={"/user/" + user.login}>
          more
        </Link>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export { CustomListItem };
