import React, { FunctionComponent } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  IconButtonProps,
  makeStyles,
  AppBarProps,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";

const MenuIcon = (props: IconButtonProps) => (
  <IconButton {...props}>
    <Menu />
  </IconButton>
);

const useStyles = makeStyles((theme) => ({
  "@keyframes gradient": {
    "0%": {
      backgroundPosition: "0% 50%",
    },
    "50%": {
      backgroundPosition: "100% 50%",
    },
    "100%": {
      backgroundPosition: "0% 50%",
    },
  },
  root: {
    background: `linear-gradient(-90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    backgroundSize: "400% 400%",
    boxShadow: theme.shadows[15],
    animation: "$gradient 15s infinite",
  },
  icon: {
    color: "white !important",
  },
  button: {
    color: "white !important",
  },
}));

export const Navbar: FunctionComponent = (props: AppBarProps) => {
  const classes = useStyles();

  return (
    <AppBar position="sticky" className={classes.root} {...props}>
      <Toolbar>
        <MenuIcon edge="start" className={classes.icon} />
        <Button className={classes.button}>Login</Button>
      </Toolbar>
    </AppBar>
  );
};
