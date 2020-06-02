import React from "react"
import Nav from "../components/nav"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to my cooking site.</p>
    <p>Now go make something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `3rem`,
  borderRadius: `100px`, background: `#eeeeee`, boxShadow: `20px 20px 50px #121212` }}>
      <Image />
    </div>
    <Nav />

  </Layout>
)

export default IndexPage
