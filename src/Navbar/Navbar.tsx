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
      const {user} = await firebase.auth().signInWithPopup(provider)
      if (user) {

        // Check to see if the user already has a record in firestore
        const doc = await firebase.firestore().collection('users').doc(user.uid).get()

        if (doc.exists) {
          // If the user has a profile already

          // Set the profile
          const firestoreProfile = doc.data()
          setProfile(firestoreProfile)
          return
        } else {
          // If the user profile does not already exist
          const p = {
            email: user.email,
            displayName: user.displayName,
            phoneNumber: user.phoneNumber,
            photoURL: user.photoURL,
            permissions: [],
            roles: []
          }
          setProfile(p)
          // Set the user profile in firestore
          const db = firebase.firestore().collection('users')
          await db.doc(user.uid).set(p)
        }
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
          <React.Fragment>
            {profile?.roles.includes('Admin') && (
              <Button className={classes.button}>
                Add Post
              </Button>
            )}
            <Button className={classes.button} onClick={handleLogout}>
              Logout
            </Button>
          </React.Fragment>
        )}
      </Toolbar>
    </AppBar>
  )
}
