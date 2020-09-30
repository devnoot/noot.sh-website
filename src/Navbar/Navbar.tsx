import React, { FunctionComponent, useContext } from 'react'
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  IconButtonProps,
  makeStyles,
  AppBarProps,
  Typography,
} from '@material-ui/core'
import { Menu } from '@material-ui/icons'
import { FirebaseContext } from '../contexts/FirebaseContext'
import { ProfileContext } from '../contexts/ProfileContext'

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
  icon: {
    color: 'white !important',
  },
  button: {
    color: 'white !important',
  },
  title: {
    flexGrow: 1,
  },
}))

export const Navbar: FunctionComponent = (props: AppBarProps) => {
  const classes = useStyles()
  const firebase = useContext(FirebaseContext)
  const { profile, setProfile } = useContext(ProfileContext)

  const handleError = (e: Error) => {
    setProfile(null)
    throw e
  }

  const handleLogin = async () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider()
      const res = await firebase.auth().signInWithPopup(provider)
      if (res.user) {
        setProfile({
          uid: res.user.uid,
          email: res.user.email,
          displayName: res.user.displayName,
          phoneNumber: res.user.phoneNumber,
          photoURL: res.user.photoURL,
          providerId: res.user.providerId,
        })
      } else {
        throw new Error(
          'Received response from auth service with no user object!',
        )
      }
    } catch (e) {
      handleError(e)
    }
  }

  const handleLogout = async () => {
    try {
      await firebase.auth().signOut()
      setProfile(null)
    } catch (e) {
      handleError(e)
    }
  }

  return (
    <AppBar position="sticky" className={classes.root} {...props}>
      <Toolbar>
        <MenuIcon edge="start" className={classes.icon} />
        <Typography variant="h6" className={classes.title}>
          noot-dot-sh
        </Typography>
        {!profile && (
          <Button className={classes.button} onClick={handleLogin}>
            Login
          </Button>
        )}
        {profile && (
          <Button className={classes.button} onClick={handleLogout}>
            Logout
          </Button>
        )}
      </Toolbar>
    </AppBar>
  )
}
