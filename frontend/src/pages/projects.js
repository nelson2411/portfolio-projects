import React from "react"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import Seo from "../components/Seo"
const ProjectsPage = ({
  data: {
    allStrapiProject: { nodes: projects },
  },
}) => {
  return (
    <>
      <Seo
        title="Projects"
        description="Welcome to the projects list of my Full Stack Web Developer portfolio"
      />

      <main>
        <section className="projects-page">
          <Projects projects={projects} title="all projects" />
        </section>
      </main>
    </>
  )
}

export const query = graphql`
  {
    allStrapiProject {
      nodes {
        title
        url
        slug
        id
        github
        featured
        description
        stack {
          id
          title
        }
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
            }
          }
        }
      }
      totalCount
    }
  }
`

export default ProjectsPage
