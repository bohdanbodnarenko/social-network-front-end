import React from "react";
import {
  fade,
  InputBase,
  IconButton,
  Badge,
  Avatar,
  Button,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { IoIosNotificationsOutline } from "react-icons/io";

import "./styles.scss";
import { makeStyles } from "@material-ui/core/styles";
import SettingsIcon from "../../assets/icons/settings.svg";
import { DARK_BLUE } from "../../shared/constants/colors";
import { connect, MapStateToProps } from "react-redux";
import { AppStore } from "../../store/store";

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

interface Props {
  isAuth?: boolean;
}

const TopBarComponent: React.FC<Props> = ({ isAuth }) => {
  const classes = useStyles();
  return (
    <div
      className={"top-bar-container"}
      style={isAuth ? {} : { height: "2vh", padding: "10px 0px" }}
    >
      {isAuth ? (
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
      ) : (
        <h3 className={"top-bar-container_logo"}>PeoCon</h3>
      )}
      {isAuth ? (
        <div className={"info-block"}>
          <IconButton>
            <Badge badgeContent={4} color={"secondary"}>
              <IoIosNotificationsOutline className={"info-block_icon"} />
            </Badge>
          </IconButton>
          <IconButton>
            <img
              className={"info-block_icon"}
              src={SettingsIcon}
              alt={"Settings"}
            />
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
      ) : (
        <div className={"top-bar-container_buttons-wrapper"}>
          <Button
            variant={"outlined"}
            color={"primary"}
            className={"top-bar-container_buttons-wrapper_button"}
          >
            Sign in
          </Button>
          <Button
            variant={"contained"}
            color={"secondary"}
            className={"top-bar-container_buttons-wrapper_button__primary"}
          >
            Get started
          </Button>
        </div>
      )}
    </div>
  );
};

const mapStateToProps: MapStateToProps<any, Props, AppStore> = ({
  auth: { isAuth },
}) => ({
  isAuth,
});

export const TopBar = connect(mapStateToProps)(TopBarComponent);
