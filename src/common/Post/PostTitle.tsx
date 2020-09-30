import React from 'react'
import { Typography, TypographyProps } from '@material-ui/core'

type PostTitleProps = {
  title: string
}

export const PostTitle = (props: PostTitleProps & TypographyProps) => (
  <Typography {...props} variant="h3">
    {props.title}
  </Typography>
)
