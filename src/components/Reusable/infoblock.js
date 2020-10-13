import React from "react"
import Heading from "./Heading"
import { Link } from "gatsby"

export default function InfoBlock({ heading }) {
  return (
    <section className="bg-theme my-5 py-4">
      <div className="container">
        <Heading title={heading} />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-white mb-4">
              Varius aliquet facilisi, sed. Pharetra dis. Pretium sollicitudin
              suspendisse lobortis vulputate nibh dolor curae; lobortis.
              Habitant feugiat hendrerit phasellus, quis habitant penatibus
              potenti sociis inceptos lobortis phasellus augue varius. Leo,
              inceptos auctor potenti sollicitudin nam turpis a nam montes massa
              ac ante lobortis tellus duis. uctus conubia felis per purus
              elementum nullam dis vivamus eros. Fringilla. Integer rutrum
              dapibus mollis.
            </p>
            <Link to="/about">
              <button className="btn btn-warning btn-lg">{heading}</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
