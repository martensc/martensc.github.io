import * as React from "react"
import { Link } from "gatsby"

// Styles
import "normalize.css"
import "./../styles/styles.scss"

const NotFoundPage = () => {
  return (

    <main className="main container">
      <div className="content">
        <h1 >Page not found</h1>
        <p className="lede">
          Sorry 😔, we couldn’t find what you were looking for.
        </p>
        <p>Head to the <Link to="/">Homepage</Link>.</p>
      </div>
    </main>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
