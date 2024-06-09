import React from "react";
import { useNavigate } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles(() => ({
  appBar: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  title: {
    flexGrow: 1,
  },
}));

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const onTaskCreate = () => {
    navigate("/new-task");
  };
  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.title}>
          {title}
        </Typography>
        <IconButton edge="end" color="inherit" onClick={onTaskCreate}>
          <AddIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
