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
  postedOn: string
  author: string
}

export const Post = (props: PostProps) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardContent>
        <PostTitle title={props.title} />
        <Typography variant="subtitle1">
          {props.postedOn} by {props.author}
        </Typography>
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
