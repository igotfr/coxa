import { useState, MouseEvent } from "react";

import { Button, AppBar, Toolbar, IconButton, Typography, InputBase, Badge, /*Menu, MenuItem*/ } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MoreIcon from "@material-ui/icons/MoreVert";

import { InputSearch } from "../widgets/widgets";

import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

import screenWidth from "../hooks/screenWidth";

export default function Header() {

  const screen_width = screenWidth();

  //const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  /*const [anchorEl, setAnchorEl] = useState<{ x: number, y: number }>({ x: undefined, y: undefined });

  //const isMenuOpen = Boolean(anchorEl);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleProfileMenuOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl({ x: event.currentTarget.getBoundingClientRect().x, y: event.currentTarget.getBoundingClientRect().y });
    setIsMenuOpen(true);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    //handleMobileMenuClose();
  };

  const renderMenu = (
    <Menu
      //anchorEl={<p className="dsnd"></p>}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id="primary-search-account-menu"
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={() => setIsMenuOpen(false)}
      style={{ position: "absolute", left: anchorEl.x, top: anchorEl.y }}
    >
      <MenuItem onClick={() => setIsMenuOpen(false)}>Profile</MenuItem>
      <MenuItem onClick={() => setIsMenuOpen(false)}>My account</MenuItem>
    </Menu>);*/

  //const renderMenu = (<p style={{ display: "", position: "absolute", top: anchorEl.y, left: anchorEl.x }}>sbghds</p>);

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

          <div style={{ flexGrow: 1 }} />

          <InputSearch />

          <div id="sectionDesktop" style={{ display: screen_width < 600 ? "none" : "flex" }}>
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

            <Menu>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls="primary-search-account-menu"
                aria-haspopup="true"
                //onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <MenuButton sx={{ backgroundColor: "transparent", border: "none", cursor: "pointer" }}>
                  <AccountCircle style={{ color: "white" }} />
                </MenuButton>
              </IconButton>
              <MenuList sx={{ color: "black", boxShadow: "-3px 11px 50px -7px rgba(0,0,0,0.10)" }}>
                <MenuItem sx={{ fontSize: "1rem", backgroundColor: "white", padding: 10, border: "none", borderTopLeftRadius: 3, borderTopRightRadius: 3 }}>Profile</MenuItem>
                <MenuItem sx={{ fontSize: "1rem", backgroundColor: "white", padding: 10, border: "none" }}>My account</MenuItem>
              </MenuList>
            </Menu>
          </div>

          <div id="sectionMobile" style={{ display: screen_width < 600 ? "flex" : "none" }}>
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
