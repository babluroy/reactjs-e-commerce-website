import React from "react"
import Heading from "../Reusable/Heading"

export default function Contact() {
  return (
    <section className="py-3">
      <Heading title="Contact us" />
      <div className="col-10 col-sm-8 mx-auto">
        <form action="https://formspree.io/f/mwkwlqqn" method="POST">
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="email"
              name="email"
              id="email"
              placeholder="Your E-mail"
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="mobile"
              id="mobile"
              placeholder="Your Mobile no"
            />
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              type="text"
              name="description"
              id="description"
              placeholder="Write Message"
            />
          </div>
          <button type="submit" className="btn btn-outline-info btn-block">
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}
