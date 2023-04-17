import * as React from 'react'
import { Link } from 'gatsby'
import '../styles/layout.scss'
const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <nav class="nav-box-border">
        <div class="nav-logo">Logo</div>
        <ul class="PrimaryNav with-indicator">
            <li class="Nav-item"><a href="#">projects</a></li>
            <li class="Nav-item is-active"><a href="#">experience</a></li>
            <li class="Nav-item"><a href="#">contact</a></li>
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