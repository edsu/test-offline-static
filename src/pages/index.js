import React from 'react'
import { withPrefix, Link } from 'gatsby'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/book/">Another page</Link>
    <br />
    <img src={withPrefix('/images/gatsby.jpg')} />
  </div>
)

export default IndexPage
