import * as React from "react"
import Layout from '../components/layout'
import {graphql, Link} from 'gatsby'
import {GatsbyImage} from 'gatsby-plugin-image'
import Projects from "../components/projects"

export const query = graphql`
  query ProjectCardsQuery {
    projects: allSanityProject(
      limit: 6
      filter: { slug: { current: { ne: null } } })
      {
          nodes {
            id
            picture {
              ...ImageWithPreview
            }
            name
            minidescription
            slug{
              current
            }
            
          }
      }
  }

`

// Step 2: Define your component
const IndexPage = ({data}) => {
  const projects = data.projects.nodes
  return (
    <main>
      <Layout pageTitle="Projects" 
              projectsClass="Nav-item is-active" 
              experienceClass="Nav-item"
              contactClass="Nav-item">
        <p>Please note that this site is in development.</p>
        <p><b>If you're a recruiter,</b> this... isn't done yet :) I'm currently working on this directory of projects below.</p>
        <Projects projects={projects}/>
      </Layout>
      { /*<div>
        <ul className="projectlist">
          {projects.map(project => (
            <li className="proj-item" key={project.name}>
              <div>
                <Link to={`/project/${project.slug.current}`}>{project.name}</Link>
                
                {  Boolean logic for "only show image if project.picture != null }
                {project.picture && <GatsbyImage image={project.picture.asset.gatsbyImageData}></GatsbyImage>}
              </div>
            </li>
          ))}
        </ul>
          </div> */ }
      
    </main>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home - NH Portfolio</title>

// Step 3: Export your component
export default IndexPage

