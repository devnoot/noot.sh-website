import React, { FunctionComponent } from 'react'
import { ThemeProvider, CssBaseline, Container } from '@material-ui/core'
import { theme } from './theme'
import { Navbar } from './Navbar'
import { PostTitle } from './PostTitle'
import { Post } from './Post'

export const App: FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Container>
        <Post
          title="My first article"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra justo nec ultrices dui sapien eget. Habitant morbi tristique senectus et netus et malesuada fames ac. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc. Orci porta non pulvinar neque. Ut venenatis tellus in metus vulputate eu scelerisque. Laoreet non curabitur gravida arcu ac tortor dignissim. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. In nulla posuere sollicitudin aliquam ultrices sagittis orci a. Viverra ipsum nunc aliquet bibendum enim. Tincidunt nunc pulvinar sapien et. At tempor commodo ullamcorper a lacus vestibulum sed arcu non. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper."
        />
        <Post
          title="Quantum Junk"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non pulvinar neque laoreet suspendisse interdum consectetur libero id. In nisl nisi scelerisque eu ultrices vitae auctor. Enim diam vulputate ut pharetra sit amet aliquam id diam. Rhoncus dolor purus non enim praesent elementum facilisis leo. Venenatis a condimentum vitae sapien pellentesque habitant morbi tristique. Vestibulum lorem sed risus ultricies tristique. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel. Odio morbi quis commodo odio aenean. Odio tempor orci dapibus ultrices in iaculis nunc. Cursus in hac habitasse platea dictumst quisque sagittis purus. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus. Elementum sagittis vitae et leo duis ut. Pulvinar sapien et ligula ullamcorper malesuada. Pellentesque habitant morbi tristique senectus. Mattis rhoncus urna neque viverra justo nec ultrices dui sapien. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper."
        />
        <Post
          title="More quantum junk"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In egestas erat imperdiet sed. Hendrerit gravida rutrum quisque non tellus orci ac auctor augue. Nibh ipsum consequat nisl vel. Amet consectetur adipiscing elit ut aliquam purus sit amet luctus. Tellus pellentesque eu tincidunt tortor. Nisl tincidunt eget nullam non nisi est sit amet facilisis. Diam maecenas sed enim ut sem viverra. Tellus mauris a diam maecenas sed enim ut. Tristique senectus et netus et malesuada. In egestas erat imperdiet sed euismod nisi. Est ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Aliquet nibh praesent tristique magna sit amet purus gravida."
        />
      </Container>
    </ThemeProvider>
  )
}
