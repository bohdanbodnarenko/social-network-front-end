import React, { useEffect, useState } from "react";
import {
  InputBase,
  IconButton,
  Badge,
  Avatar,
  Button,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { IoIosNotificationsOutline } from "react-icons/io";
import { RouteComponentProps, withRouter } from "react-router";
import { useSnackbar } from "notistack";
import { FormikHelpers } from "formik";
import { connect, MapDispatchToProps, MapStateToProps } from "react-redux";

import "./styles.scss";
import SettingsIcon from "../../assets/icons/settings.svg";
import { AppState } from "../../store/store";
import { CustomModal } from "../CustomModal";
import {
  FieldError,
  LoginValues,
  RegisterValues,
  User,
} from "../../shared/constants/interfaces";
import {
  setAccessToken,
  setCurrentUser,
} from "../../store/actions/auth/auth.actions";
import { LoginForm } from "../LoginForm";
import { httpService } from "../../utils/httpService";
import { RegisterForm } from "../RegisterForm";
import { fetchMe } from "../../store/actions/auth/auth.actions";
import { useStyles } from "./styles";

interface Props {
  isAuth?: boolean;
  currentUser?: User | null;
}

const TopBarComponent: React.FC<
  Props & LinkDispatchProps & RouteComponentProps
> = ({ isAuth, currentUser, setToken, setCurrentUser, history, fetchMe }) => {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  const [showSendLinkAgain, setShowSendLinkAgain] = useState<boolean>(false);
  const { enqueueSnackbar } = useSnackbar();
  const classes = useStyles();

  useEffect(() => {
    if (isAuth && !currentUser && fetchMe) {
      console.log("Should trigger");
      fetchMe();
    }
  }, [isAuth, currentUser, fetchMe]);

  const toggleLoginModal = () => {
    setLoginModalOpen(!loginModalOpen);
  };
  const toggleRegisterModal = () => {
    setRegisterModalOpen(!registerModalOpen);
  };

  const handleRegisterClick = () => {
    setLoginModalOpen(false);
    setRegisterModalOpen(true);
  };

  const handleLoginClick = () => {
    setRegisterModalOpen(false);
    setLoginModalOpen(true);
  };

  const handleRegisterSubmit = async (
    values: RegisterValues,
    { setSubmitting, setErrors }: FormikHelpers<RegisterValues>
  ) => {
    setSubmitting(true);
    try {
      const { data } = await httpService.post("/register", values);
      if (data) {
        enqueueSnackbar("Registration Success", { variant: "success" });
        handleLoginClick();
      }
    } catch ({ data }) {
      setErrors(
        data.reduce((acc: any, { path, message }: FieldError) => {
          acc[path] = message;
          return acc;
        }, {})
      );
    } finally {
      setSubmitting(false);
    }
  };

  const handleLoginSubmit = async (
    values: LoginValues,
    { setSubmitting, setErrors }: FormikHelpers<LoginValues>
  ) => {
    setSubmitting(true);
    try {
      const { data } = await httpService.post("/login", values);
      if (data) {
        console.log(data);
        const { user, token } = data;
        if (setCurrentUser && setToken) {
          setCurrentUser(user);
          setToken(token);
          enqueueSnackbar("Login Success", { variant: "success" });
          history.push("/");
        }
      }
    } catch ({ data }) {
      const errors = data.reduce((acc: any, { path, message }: FieldError) => {
        acc[path] = message;
        return acc;
      }, {});
      if (errors.email === "Please confirm your email first") {
        setShowSendLinkAgain(true);
      }
      setErrors(errors);
    } finally {
      setSubmitting(false);
    }
  };

  const loginForm = (
    <LoginForm
      showSendLinkAgain={showSendLinkAgain}
      onSubmit={handleLoginSubmit}
      onRegisterClick={handleRegisterClick}
    />
  );

  const registerForm = (
    <RegisterForm
      onLoginClick={handleLoginClick}
      onSubmit={handleRegisterSubmit}
    />
  );

  return (
    <>
      <CustomModal open={loginModalOpen} onClose={toggleLoginModal}>
        {loginForm}
      </CustomModal>
      <CustomModal open={registerModalOpen} onClose={toggleRegisterModal}>
        {registerForm}
      </CustomModal>
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
              {currentUser && (
                <Avatar
                  alt="Remy Sharp"
                  src={currentUser.imageUrl}
                  sizes={"small"}
                  className={"info-block_user-block_avatar"}
                >
                  {currentUser.imageUrl ? undefined : "BB"}
                </Avatar>
              )}
              {currentUser && (
                <span className={"info-block_user-block_username"}>
                  Hi,{currentUser?.firstName}
                </span>
              )}
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
              onClick={toggleLoginModal}
              className={"top-bar-container_buttons-wrapper_button"}
            >
              Sign in
            </Button>
            <Button
              variant={"contained"}
              color={"secondary"}
              onClick={toggleRegisterModal}
            >
              Get started
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

interface LinkStateProps {
  isAuth: boolean;
  currentUser: User | null;
}

interface LinkDispatchProps {
  setCurrentUser: (user: User) => void;
  setToken: (token: string) => void;
  fetchMe: () => void;
}

const mapStateToProps: MapStateToProps<LinkStateProps, Props, AppState> = ({
  auth: { isAuth, currentUser },
}) => ({
  isAuth,
  currentUser,
});

const mapDispatchToProps: MapDispatchToProps<LinkDispatchProps, Props> = (
  dispatch
) => ({
  setCurrentUser: (user: User) => dispatch(setCurrentUser(user)),
  setToken: (token: string) => dispatch(setAccessToken(token)),
  fetchMe: () => dispatch(fetchMe() as any),
});

export const TopBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(TopBarComponent));
