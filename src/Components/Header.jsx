import "../App.css";
import React from "react";
import {NavLink} from 'react-router-dom'
import { AppBar, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <>
      <AppBar>
        <Typography className="flex">
          <NavLink to="/">
            <Toolbar className="white">LOGO</Toolbar>
          </NavLink>
          <NavLink to="/">
            <Toolbar  className="white">Home</Toolbar>
          </NavLink>
          <NavLink to="/Form">
            <Toolbar  className="white">Products</Toolbar>
          </NavLink>
         
        </Typography>
      </AppBar>
      <br />
      <br />
      <br />
      <br />
      <h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta tempore
        architecto cupiditate nam optio! Ut, commodi ducimus, minus explicabo
        optio veniam labore, molestiae ratione odit cupiditate maxime magni
        officiis. Rerum. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Soluta tempore architecto cupiditate nam optio! Ut, commodi
        ducimus, minus explicabo optio veniam labore, molestiae ratione odit
        cupiditate maxime magni officiis. Rerum
      </h2>
    </>
  );
};

export default Header;
