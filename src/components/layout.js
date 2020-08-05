import React from 'react'
import Header from './header'
import Footer from './footer'
import './styles/index.css'
function Layout(props) {
  return (
    <React.Fragment>
      <Header />
      {props.children}
      <Footer />
    </React.Fragment>
  )
}

export default Layout
