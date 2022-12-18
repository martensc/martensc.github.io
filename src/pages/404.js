import * as React from "react"
import { Link } from "gatsby"

const NotFoundPage = () => {
  return (

    <main className="px-8 mt-12 md:mt-[12vw] lg:container">
      <h1 className="h1 font-bold leading-none tracking-tight mb-6 md:mb-12">Page not found</h1>
      <p className="lede font-light mb-16">
        Sorry 😔, we couldn't find what you were looking for.
      </p>
      <p>Head to the <Link to="/">Homepage</Link>.</p>
    </main>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
