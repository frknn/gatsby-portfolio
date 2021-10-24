import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Home = () => {

  const data = useStaticQuery(graphql`
    query{
      image: file(relativePath: { eq: "gh_pic.jpg"}){
        id
        childImageSharp{
          fluid{
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <Img className="home-content__image" fluid={data.image.childImageSharp.fluid} />
        <div className="home-content__text-container">
          <h1 className="home-content__greet">Hey, I'm Furkan!</h1>
          <p className="home-content__job-title">Software Developer</p>
          <p className="home-content__about-me">
            I like to work with JavaScript technologies
            and currently improving my skills on .NET.
          </p>
          <div className="home-content__cta">
            <a className="home-content__btn home-content__btn--primary" href="#projects">projects</a>
            <a className="home-content__btn home-content__btn--secondary" href="#contact">contact me</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
