import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink";


import SEO from "../components/seo"

const Design = () => (
  <>
    <SEO title="Design" />
    <h1>Grafica e Design</h1>
    <AniLink
      paintDrip
      to="/"
      direction="left"
      hex="#3687BA"
      duration={.8}
    >torna alla HomePage</AniLink>
  </>
)

export default Design
