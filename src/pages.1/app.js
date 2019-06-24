import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink";


import SEO from "../components/seo"

const App = () => (
  <>
    <SEO title="App" />
    <h1>App e Software</h1>
    <AniLink
      paintDrip
      to="/"
      direction="left"
      hex="#3687BA"
      duration={.8}
    >torna alla HomePage</AniLink>
  </>
)

export default App
