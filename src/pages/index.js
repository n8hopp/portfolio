import * as React from "react"
import Layout from '../components/layout'
import {graphql, Link} from 'gatsby'

export const query = graphql`
  query IndexPageQuery {
    projects: allSanityProject(
      limit: 6
      filter: { slug: { current: { ne: null } } })
      {
          nodes {
            id
            picture {
              asset{
                gatsbyImageData
              }
            }
            name
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
        <p><strong>If you're a recruiter,</strong> this... isn't done yet :) I'm currently working on this dynamic tree of documents below.</p>
      </Layout>
      <div>
        <ul className="projectlist">
          {projects.map(project => (
            <li className="book-item" key={project.name}>
              <Link to={`/project/${project.slug.current}`}>{project.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home - NH Portfolio</title>

// Step 3: Export your component
export default IndexPage

