import React from "react"
import { GatsbyImage, getImage} from "gatsby-plugin-image"
import { graphql, Link} from 'gatsby'
import {PortableText} from '@portabletext/react'

import Layout from '../components/layout';
import '../styles/test.css';

const Project = ({ data: { project } }) => (
  <article>
    <Layout pageTitle="Projects" 
              projectsClass="Nav-item is-active" 
              experienceClass="Nav-item"
              contactClass="Nav-item">
      <span className="nav-box-border subnav">
      <h1 className="navback"><Link to="/">&lt;</Link></h1>
      <h2>{project.name}</h2>
      </span>
      {project.picture && <GatsbyImage image={project.picture.asset.gatsbyImageData} />}
      <div className="paragraph-styling">
        <PortableText value={project.text}></PortableText>
      </div>
      
    </Layout>
    
  </article>
)

export default Project

export const query = graphql`
  query($slug: String!) { 
    project: sanityProject(slug: { current: { eq: $slug} }) { 
      name 
      picture: picture{asset{gatsbyImageData(placeholder: BLURRED)}}
      text: _rawDescription(resolveReferences: {maxDepth: 5})
    } 
  } 
`