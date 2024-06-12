import React from "react";
import { useNavigate } from "react-router-dom";

import { withStyles } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { purple } from "@material-ui/core/colors";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";

import usePageTitle from "../../hooks/usePageTitle";

import { useStyles } from "./style";

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    "&:hover": {
      backgroundColor: purple[700],
    },
  },
}))(Button);

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
        <ColorButton
          onClick={onTaskCreate}
          color="secondary"
          variant="contained"
          size="small"
        >
          <AddIcon />
          Criar nova Tarefa
        </ColorButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
