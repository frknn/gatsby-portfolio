import React from "react"

import Header from '../components/Header'
import Home from "../components/Home"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import Head from "../components/Head"

const IndexPage = () => {
  return (
    <>
      <Head
        title="Home"
        description='Furkan Setbaşı Portfolio Site Home Page'
      />
      <Header />
      <Home />
      <Projects />
      <Contact />
    </>
  )
}

export default IndexPage