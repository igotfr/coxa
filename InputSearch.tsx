import SearchIcon from "@material-ui/icons/Search";
import { InputBase } from "@material-ui/core";
import screenWidth from "../hooks/screenWidth";

import { fade, makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    inputInput: {
      transition: theme.transitions.create('width'),
    },
  }));

export default function InputSearch() {
  const classes = useStyles();

  const screen_width = screenWidth();

  return (<div style={{
    position: "relative",
    borderRadius: 4,
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    //width: screen_width < 600 ? "100%" : "auto",
    width: "auto",
    marginLeft: screen_width < 600 ? 0 : 24,
    marginRight: 16,
  }}
    onMouseOver={(event) => Object.assign(event.currentTarget.style, { backgroundColor: "rgba(255, 255, 255, 0.25)" })}
    onMouseOut={(event) => Object.assign(event.currentTarget.style, { backgroundColor: "rgba(255, 255, 255, 0.15)" })}
  >
    <SearchIcon style={{
      padding: "0 16px",
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }} />

    <InputBase
      placeholder="Search…"
      inputProps={{ "aria-label": "search" }}
      classes={{ input: classes.inputInput, }}
      style={{
        color: "inherit",
        padding:"4px 4px 4px calc(1em + 32px)",
        width: screen_width < 960 ? "2ch" : "100%",
        //display: screen_width < 600 ? "none" : "flex",
        //transition: { width: "300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms" }
      }}
    />
  </div>);
}
