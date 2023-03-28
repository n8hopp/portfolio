import * as React from 'react'
import { Link } from 'gatsby'
import '../styles/layout.scss'
const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <nav>
        <ul class="primary-nav">
          <li class="nav-item is-active"><Link to="/">Home</Link></li>
          <li class="nav-item"><Link to="/experience">Experience</Link></li>
        </ul>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout