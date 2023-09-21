import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

export const query = graphql`
  query ExperiencePageQuery {
    experiences: allSanityExperience(
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

const ExperiencePage = ({data}) => {
  const experiences = data.experiences.nodes
  return (
    <main>
      <Layout pageTitle="Experience" 
              projectsClass="Nav-item" 
              experienceClass="Nav-item is-active"
              contactClass="Nav-item">
      		<p>Here's some of my work experience:</p>
    	</Layout>
      <div>
        <ul className="experiencelist">
          {experiences.map(experience => (
            <li className="book-item" key={experience.name}>
              <Link to={`/experience/${experience.slug.current}`}>{experience.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}

export const Head = () => <title>Experience - NH Portfolio</title>

export default ExperiencePage