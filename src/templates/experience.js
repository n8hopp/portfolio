import React from "react"
import { GatsbyImage, getImage} from "gatsby-plugin-image"
import { graphql, Link} from 'gatsby'
import {PortableText} from '@portabletext/react'

import Layout from '../components/layout'


const Experience = ({ data: { experience } }) => (
  <article>
    <Layout pageTitle="Experience" 
              projectsClass="Nav-item" 
              experienceClass="Nav-item is-active"
              contactClass="Nav-item"></Layout>
    <span className="nav-box-border subnav">
      <h1 className="navback"><Link to="/experience">&lt;</Link></h1>
      <h2>{experience.name}</h2>
    </span>
    {experience.picture && <GatsbyImage image={experience.picture.asset.gatsbyImageData}/>}
    <PortableText value={experience.text}>Hi</PortableText>
  </article>
)

export default Experience

export const query = graphql`
  query($slug: String!) { 
    experience: sanityExperience(slug: { current: { eq: $slug} }) { 
      name 
      picture: picture{asset{gatsbyImageData(placeholder: BLURRED)}}
      text: _rawDescription(resolveReferences: {maxDepth: 5})
    } 
  } 
`