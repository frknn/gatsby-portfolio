import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import ProjectCard from './ProjectCard'

const ProjectsList = () => {

  const data = useStaticQuery(
    graphql`
    query {
      allProjectsJson {
        nodes {
          title
          desc
          tags
          demoLink
          codeLink
        }
      }
    }
  `)

  console.log('projects arr', data.allProjectsJson.nodes)
  return (
    <div className="projects-card-list">
      {
        data.allProjectsJson.nodes.map((node, idx) => <ProjectCard key={idx} project={node} />)
      }
    </div>
  )
}

export default ProjectsList
