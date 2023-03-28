import * as React from "react"
import { Link } from 'gatsby'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
      <h1>Welcome to my Gatsby site!</h1>
      <Link to="/experience">Experience</Link>
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </main>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home - NH Portfolio</title>

// Step 3: Export your component
export default IndexPage