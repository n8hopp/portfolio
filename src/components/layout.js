import * as React from 'react'
import { Link } from 'gatsby'
import '../styles/layout.scss'
import natelogo from '../images/natelogo.png'

const Layout = ({ pageTitle, projectsClass, experienceClass, contactClass, children }) => {
  return (
    <div>
      <nav class="nav-box-border">
        <div class="nav-logo"><img width="50%" src={natelogo} alt="logo"></img></div>
        <ul class="PrimaryNav with-indicator">
            <li class={projectsClass}>
              <Link to="/">projects</Link>
            </li>
            <li class={experienceClass}>
              <Link to="/experience">experience</Link>
            </li>
            <li class={contactClass}>
              <Link to="/contact">contact</Link>
            </li>
          </ul>
      </nav><br></br>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout