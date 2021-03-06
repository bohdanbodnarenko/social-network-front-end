import { makeStyles } from "@material-ui/core/styles";
import { fade } from "@material-ui/core";
import { DARK_BLUE } from "../../shared/constants/colors";

export const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    backgroundColor: fade("#F0F2F5", 0.9),
    "&:hover": {
      backgroundColor: fade("#F0F2F5", 0.95),
    },
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(2),
    width: "100%",
    height: "67%",
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
