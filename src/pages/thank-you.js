import * as React from "react"
import { Link } from "gatsby"

const ThanksPage = () => {
  return (
    <main className="px-8 mt-12 md:mt-[12vw] lg:container">
      <h1 className="h1 font-bold leading-none tracking-tight mb-6 md:mb-12" >Thank you for reaching out.</h1>
      <p className="lede font-light mb-16">
      I will get back to you as soon as possible.
      </p>
      <p>Head to the <Link to="/">Homepage</Link>.</p>
    </main>
  )
}

export default ThanksPage

export const Head = () => <title>Carl Martens | Thank You</title>
