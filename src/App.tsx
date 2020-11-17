import React, { useState, useEffect, FunctionComponent } from 'react'
import { ThemeProvider, CssBaseline, Container } from '@material-ui/core'
import { responsiveTheme } from './theme'
import { Navbar } from './Navbar/Navbar'
import { Post } from './common/Post/Post'
import { getPosts, T_Post } from './fakeApi'
import { isMobile } from 'react-device-detect'
import { FirebaseContext } from './contexts/FirebaseContext'
import { LoadingContext } from './contexts/LoadingContext'
import { ProfileContext } from './contexts/ProfileContext'
import { firebase } from './firebase'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {AddPost} from './AddPostPage/AddPost'
export const App: FunctionComponent = () => {
  const [posts, setPosts] = useState<T_Post[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [profile, setProfile] = useState(false)

  useEffect(() => {
    ;(async () => {
      setIsLoading(true)
      const data = await getPosts(20, 1500)
      setPosts(data)
      setIsLoading(false)
    })()
  }, [])

  return (
    <ThemeProvider theme={responsiveTheme}>
      <CssBaseline />
      <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
        <FirebaseContext.Provider value={firebase}>
          <ProfileContext.Provider value={{ profile, setProfile }}>

            <Router>
              <Navbar />
              <Container maxWidth={isMobile ? false : 'lg'}>
                {isLoading && <p>Loading...</p>}
                <Switch>

                  <Route exact path="/">
                    {posts.map((post, index) => (
                        <Post
                            key={index}
                            title={post.title}
                            content={post.body}
                            postedOn={post.postedOn.toLocaleString()}
                            author={post.author}
                        />
                    ))}
                  </Route>

                  <Route path="/post/add">
                    <AddPost />
                  </Route>

                </Switch>

              </Container>

            </Router>

          </ProfileContext.Provider>
        </FirebaseContext.Provider>
      </LoadingContext.Provider>
    </ThemeProvider>
  )
}
