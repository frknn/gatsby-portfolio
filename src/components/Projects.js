import React from 'react'
import ProjectsList from './ProjectsList'

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-content">
        <h1 className="projects-title">Projects</h1>
        <ProjectsList/>
        <a className="github-link" href="https://github.com/frknn">See more in my GitHub</a>
      </div>
    </section>
  )
}

export default Projects
