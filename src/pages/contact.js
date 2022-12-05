import * as React from "react"
import { Link } from "gatsby"

const formStyles = {
  display: "none",
}

const ContactPage = () => {
  return (
    <main className="main container">
      <div className="content">
        <h1 >Let's talk.</h1>
        <p className="lede">
          Write a quick email and I'll get back to you as soon as I can. Thank you.
        </p>
        <form method="post" action="https://formspree.io/carlrmartens@gmail.com">
          <div className="form-row">
            <label htmlFor="name">
              Full Name
            </label>
            <input id="name" type="text" name="name" />
          </div>
          <div className="form-row">
            <label htmlFor="email">
              Email
            </label>
            <input id="email" type="email" name="_replyto" />
          </div>
          <div className="form-row">
            <label htmlFor="message">
              Message
            </label>
            <textarea id="message" type="text" name="message" />
          </div>
          <input type="text" name="_gotcha" style={formStyles} />
          <div className="form-row">
            <input type="submit" value="Send" className="button" />
          </div>
          <input type="hidden" name="_next" value="/thank-you" />
        </form>
        <p>On second thought, take me to the <Link to="/">Homepage</Link>.</p>
      </div>
    </main>
  )
}

export default ContactPage

export const Head = () => <title>Carl Martens | Designer and Front-end Developer</title>
