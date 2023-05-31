import * as React from "react"
import Layout from '../components/layout'
import ListPreview from '../components/list-preview'
// Step 2: Define your component
const IndexPage = (props) => {
  return (
    <main>
      <Layout pageTitle="Projects" 
              projectsClass="Nav-item is-active" 
              experienceClass="Nav-item"
              contactClass="Nav-item">
        <p>Please note that this site is in development.</p>
        <p><strong>If you're a recruiter,</strong> this... isn't done yet :) But feel free to check out this cool navbar I'm working on with pure CSS animations and no JS right now above!</p>
      </Layout>
      <ListPreview nodes={props.data}></ListPreview>
    </main>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home - NH Portfolio</title>

// Step 3: Export your component
export default IndexPage

export const query = graphql`
  query IndexPageQuery {
    projects: allSanityProject(
      limit: 6
      filter: { slug: { current: { ne: null } } })
      {
        edges {
          node {
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
  }

`