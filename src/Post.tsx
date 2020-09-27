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
  meta: {
    marginTop: '16px',
    marginBottom: '16px',
    color: 'rgb(32, 32, 32)',
    fontSize: '0.8rem',
  },
  content: {},
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
        <div className={classes.meta}>
          <Typography variant="subtitle1">
            {props.postedOn} by {props.author}
          </Typography>
        </div>
        <div className={classes.content}>
          <Typography variant="body1">{props.content}</Typography>
        </div>
      </CardContent>
      <CardActions>
        <Button>Read More</Button>
      </CardActions>
    </Card>
  )
}
