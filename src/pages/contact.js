import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const ContactPage = () => {
  return (
    <main>
      <Layout pageTitle="Contact" 
              projectsClass="Nav-item" 
              experienceClass="Nav-item"
              contactClass="Nav-item is-active">
      		<p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    	</Layout>
    </main>
  )
}

export const Head = () => <title>Contact - NH Portfolio</title>

export default ContactPage