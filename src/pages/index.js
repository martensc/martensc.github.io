import * as React from "react"
import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <main className="px-8 mt-12 md:mt-[12vw] lg:container">
      <h1 className="h1 font-bold leading-none tracking-tight mb-6 md:mb-12">Hello, my name is Carl Martens.</h1>
      <p className="lede font-light">
        I'm a senior designer and front-end developer living in the Twin Cities. I've been working in the web industry for over 14 years and am passionate about my craft. Creating beautiful interfaces that fit seamlessly into websites and applications is what drives me each day. Feel free to write me for work inquiries.
      </p>
      <nav className="flex gap-6 mt-6 md:mt-12 lg:mt-24 lg:text-xl lg:gap-6">
        <Link className="flex gap-2" to="/contact">Let's Talk</Link>
        <Link to="https://github.com/martensc/" target="_blank" className="flex gap-2 external">GitHub</Link>
        <Link to="https://www.linkedin.com/in/carlrmartens/" target="_blank" className="flex gap-2 external">LinkedIn</Link>
      </nav>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Carl Martens | Designer and Front-end Developer</title>
