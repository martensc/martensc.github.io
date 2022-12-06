import * as React from "react"
import { Link } from "gatsby"

// Styles
import "normalize.css"
import "./../styles/styles.scss"

const ThanksPage = () => {
  return (
    <main className="main container">
      <div className="content">
        <h1 >Thank you for reaching out.</h1>
        <p className="lede">
        I will get back to you as soon as possible.
        </p>
        <p>Head to the <Link to="/">Homepage</Link>.</p>
      </div>
    </main>
  )
}

export default ThanksPage

export const Head = () => <title>Carl Martens | Thank You</title>
