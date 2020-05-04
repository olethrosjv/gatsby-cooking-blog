import React from "react"
import { Link } from "gatsby"
/*import ReactDOM from 'react-dom'*/



import Layout from "../components/layout"
import SEO from "../components/seo"
import SignUpForm from "../components/signUpForm"

const AboutPage = () => (
  <Layout>
    <SEO title="About Us" />
    <h1>About Us</h1>
    <p>Sign up for our weekly newsletter!</p>
    <SignUpForm></SignUpForm>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)


export default AboutPage
