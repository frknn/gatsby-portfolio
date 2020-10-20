import React from 'react'
import ProfilePic from '../images/gh_pic.jpg'

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <img className="home-content__image" src={ProfilePic} alt="profile pic"/>
        <div className="home-content__text-container">
          <h1 className="home-content__greet">Hey, I'm Furkan!</h1>
          <p className="home-content__job-title">Jr. Full Stack JavaScript Developer</p>
          <p className="home-content__about-me">
            I like to work with modern JavaScript technologies 
            and currently looking for a Junior Web Developer role.
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
