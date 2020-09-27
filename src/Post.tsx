import React from 'react'
import {
  makeStyles,
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
} from '@material-ui/core'
import { PostTitle } from './PostTitle'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGow: 1,
    margin: '32px',
    padding: '32px',
    borderRadius: '10px',
  },
  content: {
    paddingTop: '32px',
  },
}))

type PostProps = {
  title: string
  content: string
}

export const Post = (props: PostProps) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardContent>
        <PostTitle title={props.title} />
        <div className={classes.content}>
          <Typography variant="body1">{props.content}</Typography>
        </div>
      </CardContent>
      <CardActions>
        <Button>Click Me</Button>
      </CardActions>
    </Card>
  )
}
