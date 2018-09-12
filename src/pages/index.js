import React from 'react'
import { withPrefix } from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <img src={withPrefix('/images/gatsby.jpg')} />
  </div>
)

export default IndexPage
