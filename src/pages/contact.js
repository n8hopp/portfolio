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
      		<p>You can contact me at: </p>
          <ul>
            <li>Email: <a href="mailto:nathaniel_hopper@outlook.com">nathaniel_hopper@outlook.com</a></li>
            <li>
              <a href="https://www.linkedin.com/in/nathaniel-hopper-436057259/">Linkedin</a>
            </li>
            
          </ul>
    	</Layout>
    </main>
  )
}

export const Head = () => <title>Contact - NH Portfolio</title>

export default ContactPage