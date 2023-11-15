import * as React from 'react'
import { Link } from 'gatsby'
import '../styles/layout.scss'
import natelogo from '../images/natelogo.png'

const Layout = ({ pageTitle, projectsClass, experienceClass, contactClass, children }) => {
  return (
    <div>
      <nav class="nav-box-border">
        <div class="nav-logo"><img class="nav-logo-img" id="logoImg" src={natelogo} alt="logo"></img></div>
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
      <main class="sm:px-16 px-6 max-w-7xl mx-auto relative font-fira z-0">
        <h1>{pageTitle}</h1>
        {children}
      </main>
      <footer class="bg-about py-5 px-12 mx-auto relative font-fira z-0 text-center">
        © 2023 Nate Hopper. Projects card code & many CSS elements borrowed from github/shaqdeff
      </footer>
    </div>
  )
}

export default Layout