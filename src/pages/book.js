import React from 'react'
import { withPrefix } from 'gatsby'

const Book = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <img src={withPrefix('/images/book.jpg')} />
  </div>
)

export default Book
