import { useState } from "react";

import { Button, AppBar, Toolbar, IconButton, Typography, InputBase, Badge } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MoreIcon from "@material-ui/icons/MoreVert";

import screenWidth from "../hooks/screenWidth";

import { fade, makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    inputInput: {
      transition: theme.transitions.create('width'),
    },
  }));

export default function Header() {
  const classes = useStyles();

  const [mouseInSearch, setMouseInSearch] = useState<boolean>(false);

  const screen_width = screenWidth();

  return (
  <>
    <div style={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            style={{ marginRight: 16 }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            noWrap
            style={{ display: screen_width < 600 ? "none" : "block" }}
          >
            Material-UI
          </Typography>

          <div style={{
            position: "relative",
            borderRadius: 4,
            backgroundColor: mouseInSearch ? "rgba(255, 255, 255, 0.25)" : "rgba(255, 255, 255, 0.15)",
            width: screen_width < 600 ? "100%" : "auto",
            marginLeft: screen_width < 600 ? 0 : 24,
            marginRight: 16,
          }}
            onMouseOver={() => setMouseInSearch(true)}
            onMouseOut={() => setMouseInSearch(false)}
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
                width: screen_width < 960 ? "100%" : "30ch",
                //transition: { width: "300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms" }
              }}
            />
          </div>

          <div style={{ flexGrow: 1 }} />

          <div id="sectionDesktop" style={{ display: screen_width < 960 ? "none" : "flex" }}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>

            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>

            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              //onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>

          <div id="sectionMobile" style={{ display: screen_width < 960 ? "flex" : "none" }}>
            <IconButton
              aria-label="show more"
              aria-controls="primary-search-account-menu-mobile"
              aria-haspopup="true"
              //onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>

        </Toolbar>
      </AppBar>
    </div>

      <Button variant="contained" color="primary" style={{ backgroundColor: "red" }}>Botao</Button><br />
      <Button variant="contained" color="primary" style={{ backgroundColor: "red" }}>Botao</Button><br />
      <Button variant="contained" color="primary" style={{ backgroundColor: "red" }}>Botao</Button><br />
      <Button variant="contained" color="primary" style={{ backgroundColor: "red" }}>Botao</Button><br />
      <Button variant="contained" color="primary" style={{ backgroundColor: "red" }}>Botao</Button><br />
      <Button variant="contained" color="primary" style={{ backgroundColor: "red" }}>Botao</Button><br />
      <Button variant="contained" color="primary" style={{ backgroundColor: "red" }}>Botao</Button><br />
      <Button variant="contained" color="primary" style={{ backgroundColor: "red" }}>Botao</Button><br />
      <Button variant="contained" color="primary" style={{ backgroundColor: "red" }}>Botao</Button><br />
      <Button variant="contained" color="primary" style={{ backgroundColor: "red" }}>Botao</Button><br />
      <Button variant="contained" color="primary" style={{ backgroundColor: "red" }}>Botao</Button><br />
      <Button variant="contained" color="primary" style={{ backgroundColor: "red" }}>Botao</Button><br />
      <Button variant="contained" color="primary" style={{ backgroundColor: "red" }}>Botao</Button><br />
      <Button variant="contained" color="primary" style={{ backgroundColor: "red" }}>Botao</Button><br />
      <Button variant="contained" color="primary" style={{ backgroundColor: "red" }}>Botao</Button><br />
      <Button variant="contained" color="primary" style={{ backgroundColor: "red" }}>Botao</Button><br />
      <Button variant="contained" color="primary" style={{ backgroundColor: "red" }}>Botao</Button><br />
      <Button variant="contained" color="primary" style={{ backgroundColor: "red" }}>Botao</Button><br />
      <Button variant="contained" color="primary" style={{ backgroundColor: "red" }}>Botao</Button><br />
      <Button variant="contained" color="primary" style={{ backgroundColor: "red" }}>Botao</Button><br />
  </>);
}