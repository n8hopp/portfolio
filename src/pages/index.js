import * as React from "react"
import Layout from '../components/layout'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Projects" 
              projectsClass="Nav-item is-active" 
              experienceClass="Nav-item"
              contactClass="Nav-item">
        <p>Please note that this site is in development.</p>
        <p><strong>If you're a recruiter,</strong> this... isn't done yet :) But feel free to check out this cool navbar I'm working on with pure CSS animations and no JS right now above!</p>
      </Layout>
    </main>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home - NH Portfolio</title>

// Step 3: Export your component
export default IndexPage