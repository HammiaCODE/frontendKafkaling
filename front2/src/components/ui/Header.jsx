import * as React from "react";
import { Link } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddBoxIcon from "@mui/icons-material/AddBox";

import "./Header.css"

const Header = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar className="list-container">

        <IconButton color="inherit" component={Link} to="/">
          <MenuIcon />
        </IconButton>

        <Typography
          variant="h6"
          sx={{ flexGrow: 1, fontFamily: "Pirata One, system-ui" }}
        >
          Dice Catalog
        </Typography>

        <IconButton color="inherit" component={Link} to="/order">
          <AddBoxIcon />
        </IconButton>

        <IconButton color="inherit" component={Link} to="/buy">
          <ShoppingCartIcon />
        </IconButton>

      </Toolbar>
    </AppBar>
  );
};

export default Header;