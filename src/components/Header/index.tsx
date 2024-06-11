import React from "react";
import { useNavigate } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";

import usePageTitle from "../../hooks/usePageTitle";

import { useStyles } from "./style";

const Header: React.FC = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const pageTitle = usePageTitle();
  const onTaskCreate = () => {
    navigate("/new-task");
  };
  const goBackHome = () => {
    navigate("/");
  };
  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.title} onClick={goBackHome}>
          {pageTitle}
        </Typography>
        <IconButton edge="end" color="inherit" onClick={onTaskCreate}>
          <AddIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
