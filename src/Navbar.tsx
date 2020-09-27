import React, { FunctionComponent } from 'react'
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  IconButtonProps,
  Typography,
  makeStyles,
  AppBarProps,
} from '@material-ui/core'
import { Menu } from '@material-ui/icons'

const MenuIcon = (props: IconButtonProps) => (
  <IconButton {...props}>
    <Menu />
  </IconButton>
)

const useStyles = makeStyles((theme) => ({
  '@keyframes gradient': {
    '0%': {
      backgroundPosition: '0% 50%',
    },
    '50%': {
      backgroundPosition: '100% 50%',
    },
    '100%': {
      backgroundPosition: '0% 50%',
    },
  },
  root: {
    background: `linear-gradient(-90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    backgroundSize: '400% 400%',
    boxShadow: theme.shadows[15],
    animation: '$gradient 15s infinite',
  },
  title: {
    flexGrow: 1,
    color: 'white',
  },
  button: {
    color: 'white',
  },
}))

export const Navbar: FunctionComponent = (props: AppBarProps) => {
  const classes = useStyles()

  return (
    <AppBar position="static" className={classes.root} {...props}>
      <Toolbar>
        <MenuIcon edge="start" color="inherit" />
        <Typography variant="h6" className={classes.title}>
          noot.sh
        </Typography>
        <Button color="inherit" className={classes.button}>
          Login
        </Button>
      </Toolbar>
    </AppBar>
  )
}
