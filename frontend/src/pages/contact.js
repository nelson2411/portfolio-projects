import React from "react"
import Seo from "../components/Seo"
const contact = () => {
  return (
    <>
      <section className="contact-page">
        <article className="contact-form">
          <h3>Get in touch</h3>
          <form action="https://formspree.io/f/mzbwvlpg" method="POST">
            <div className="form-group">
              <label htmlFor="name" hidden>
                Your name
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="form-control"
              />
              <label htmlFor="email" hidden>
                Your email
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="form-control"
              />
              <label htmlFor="message" hidden>
                Message
              </label>
              <textarea
                name="message"
                rows="5"
                placeholder="message"
                className="form-control"
              />
            </div>
            <button type="submit" className="submit-btn btn">
              Submit
            </button>
          </form>
        </article>
      </section>
    </>
  )
}

export default contact
