import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const ExperiencePage = () => {
  return (
    <main>
      <Layout pageTitle="Experience" 
              projectsClass="Nav-item" 
              experienceClass="Nav-item is-active"
              contactClass="Nav-item">
      		<p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    	</Layout>
    </main>
  )
}

export const Head = () => <title>Experience - NH Portfolio</title>

export default ExperiencePage