import React from 'react'
import Tag from './Tag'

const ProjectCard = ({ project }) => {

  const { title, desc, tags, demoLink, codeLink } = project

  return (
    <div className="project-card">
      <h2 className="project-card__title">{title}</h2>
      <div className="project-card__desc-container">
        <p className="project-card__desc">{desc}</p>
        <div className="project-card__tags">
          {
            tags.map((tag, idx) => <Tag key={idx} tag={tag} />)
          }
        </div>
      </div>
      <div className="project-card__links">
        <a target="_blank" rel="noopener noreferrer" className={`project-card__demo-link ${demoLink ? '' : 'project-card__demo-link--disabled'}  `} href={demoLink}>Demo</a>
        <a target="_blank" rel="noopener noreferrer" className={`project-card__code-link ${codeLink ? '' : 'project-card__code-link--disabled'}  `} href={codeLink}>Github</a>
      </div>
    </div>
  )
}

export default ProjectCard
