import * as React from "react"
import { Link } from "gatsby"

const formStyles = {
  display: "none",
}

const ContactPage = () => {
  return (
    <main className="px-8 my-12 lg:container lg:mt-[12vw]">
      <h1 className="h1 font-bold leading-none tracking-tight mb-6 md:mb-12">Let's talk.</h1>
      <p className="lede font-light">
        Write a quick email and I'll get back to you as soon as I can. Thank you.
      </p>
      <form className="my-12" method="post" action="https://formspree.io/carlrmartens@gmail.com">
        <div className="form-row">
          <label className="block" htmlFor="name">
            Full Name
          </label>
          <input className="mt-4 mb-8 block w-full sm:w-1/2 py-2 bg-transparent border-b-2 border-slate-900 dark:border-slate-100 text-lg placeholder-slate-400 focus:outline-none focus:border-sky-500" id="name" type="text" name="name" />
        </div>
        <div className="form-row">
          <label className="block" htmlFor="email">
            Email
          </label>
          <input className="mt-4 mb-8 block w-full sm:w-1/2 py-2 bg-transparent border-b-2 border-slate-900 dark:border-slate-100 text-lg placeholder-slate-400 focus:outline-none focus:border-sky-500" id="email" type="email" name="_replyto" />
        </div>
        <div className="form-row">
          <label className="block" htmlFor="message">
            Message
          </label>
          <textarea className="mt-4 mb-16 block w-full sm:w-3/4 py-2 bg-transparent border-b-2 border-slate-900 dark:border-slate-100 text-lg placeholder-slate-400 focus:outline-none focus:border-sky-500" id="message" type="text" name="message" />
        </div>
        <input type="text" name="_gotcha" style={formStyles} />
        <div className="form-row">
          <input className="cursor-pointer bg-slate-900 dark:bg-slate-100 border-slate-900 dark:border-slate-100 border-2 text-white dark:text-slate-900 py-4 px-8 hover:bg-transparent hover:text-slate-900 dark:hover:text-slate-100 focus:bg-transparent focus:text-slate-900" type="submit" value="Send" />
        </div>
        <input type="hidden" name="_next" value="/thank-you" />
      </form>
      <p>On second thought, take me to the <Link to="/">Homepage</Link>.</p>
    </main>
  )
}

export default ContactPage

export const Head = () => <title>Carl Martens | Contact</title>
