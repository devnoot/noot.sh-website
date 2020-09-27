import React, { useState, useEffect, FunctionComponent } from 'react'
import { ThemeProvider, CssBaseline, Container } from '@material-ui/core'
import { theme } from './theme'
import { Navbar } from './Navbar'
import { Post } from './Post'
import { getPosts, T_Post } from './fakeApi'

export const App: FunctionComponent = () => {
  const [posts, setPosts] = useState<T_Post[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    ;(async () => {
      setIsLoading(true)
      const data = await getPosts(20, 1500)
      setPosts(data)
      setIsLoading(false)
    })()
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Container>
        {isLoading && <p>Loading...</p>}
        {posts.map((post, index) => (
          <Post
            key={index}
            title={post.title}
            content={post.body}
            postedOn={post.postedOn}
            author={post.author}
          />
        ))}
      </Container>
    </ThemeProvider>
  )
}
