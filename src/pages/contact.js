import React from "react"

import Layout from "../components/layout"

const ContactPage = () => {
  return (
    <Layout>
      <h1>Contact</h1>
      <p>Andreas Erlandsson</p>
      <p>Tallmossevägen 54</p>
      <p>433 50 Öjersjö</p>
      <p>
        Contact me via{" "}
        <a href="https://twitter.com/ADevIsBorn" target="_blank">
          Twitter
        </a>
      </p>
    </Layout>
  )
}

export default ContactPage
