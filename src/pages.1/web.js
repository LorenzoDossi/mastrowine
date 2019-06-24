import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink";


import SEO from "../components/seo"

const Web = () => (
  <>
    <SEO title="Web" />
    <h1>Web e Marketing</h1>
    <AniLink
      paintDrip
      to="/"
      direction="left"
      hex="#3687BA"
      duration={.8}
    >torna alla HomePage</AniLink>
  </>
)

export default Web
