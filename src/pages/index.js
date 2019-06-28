import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Home from '../components/home'
import Bio from '../components/bio'
import ViniTopBar from '../components/viniTopBar'

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Home />
    <Bio />
    <ViniTopBar />
  </>
)

export default IndexPage
