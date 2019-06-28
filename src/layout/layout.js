import React from "react"
import { Helmet } from "react-helmet"
import Transition from "../components/transition"
import Header from "../components/header"
import Footer from "../components/footer"

import "./layout.css"


const TemplateWrapper = ({ children, location }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: `description`, content: `Sample` },
        { name: `keywords`, content: `sample, something` },
      ]}
    />
    <div className="container-fluid pr-0 pl-0">
      <Header />
        <Transition location={location}>{children}</Transition>
      <Footer />
    </div> 
  </div>
)

export default TemplateWrapper