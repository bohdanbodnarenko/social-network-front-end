import React from "react";
import { fade, InputBase, IconButton, Badge, Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { IoIosNotificationsOutline, IoIosSettings } from "react-icons/io";

import "./styles.scss";
import { makeStyles } from "@material-ui/core/styles";
import { DARK_BLUE, YELLOW } from "../../shared/constants/colors";

const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    backgroundColor: fade(theme.palette.common.white, 0.9),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.95),
    },
    marginRight: theme.spacing(3),
    marginLeft: theme.spacing(3),
    width: "100%",
    height: "45%",
    borderRadius: "45px",
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    right: 0,
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
    height: "100%",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(1)}px)`,
    transition: theme.transitions.create("width"),
    height: "100%",
    width: "100%",
    color: DARK_BLUE,
  },
}));

export const TopBar: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={"top-bar-container"}>
      <div className={"search-container"}>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search here…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
      </div>
      <div className={"info-block"}>
          <IconButton>
            <Badge badgeContent={4} color={"secondary"}>
              <IoIosNotificationsOutline className={"info-block_icon"} />
            </Badge>
          </IconButton>
          <IconButton>
            <IoIosSettings className={"info-block_icon"} />
          </IconButton>
        <div className={"info-block_user-block"}>
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sizes={"small"}
            className={"info-block_user-block_avatar"}
          >
            BB
          </Avatar>
          <span className={"info-block_user-block_username"}>Hi,Bohdan</span>
          <IconButton>
            <ExpandMore className={"info-block_icon"} />
          </IconButton>
        </div>
      </div>
    </div>
  );
};
