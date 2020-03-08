import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout>
      <h1>About</h1>
      <p>I'm learning Gatsby.js</p>
      <p>
        Contact <Link to="/contact">me</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
