import React from "react"

import Header from '../components/Header'
import Home from "../components/Home"
import Projects from "../components/Projects"
import Contact from "../components/Contact"

const IndexPage = () => {
  return (
    <>
      <Header />
      <Home />
      <Projects />
      <Contact/>
    </>
  )
}

export default IndexPage