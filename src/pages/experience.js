import * as React from 'react'
import { Link } from 'gatsby'

const ExperiencePage = () => {
  return (
    <main>
      <h1>Experience</h1>
	  <Link to="/">Home</Link>
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </main>
  )
}

export const Head = () => <title>Experience - NH Portfolio</title>

export default ExperiencePage