import React from "react"
import Heading from "./Heading"
import { Link } from "gatsby"

export default function Dualinfoblock({ heading }) {
  return (
    <section className="my-4 py-4 bg-theme">
      <div className="container">
        <Heading title={heading} />
        <div className="row">
          <div className="col-8 mx-auto">
            <p className="lead text-white mb5">
              Fusce convallis ligula scelerisque eros est nonummy faucibus odio
              ultricies sit pede sed ante eu senectus cursus viverra pharetra
              aliquam inceptos. Mus diam sapien hac laoreet. Curabitur sed ad in
              inceptos donec condimentum est. Erat. Odio mauris, mauris lorem.
              Facilisis. Pharetra suspendisse proin. Ac torquent elementum netus
              conubia ad eu.Semper. Nostra eros turpis velit curabitur iaculis
              egestas aptent duis fermentum accumsan facilisi placerat ultrices
              adipiscing tincidunt ultrices convallis tristique ante sit elit,
              interdum ridiculus luctus Habitant dis eget molestie. Habitant
              scelerisque viverra luctus faucibus quisque dictumst sagittis.
              Malesuada amet pede porta neque. Mollis habitant eget in cum
              fringilla aenean lacus quis magna. Senectus eget eget. Interdum
              lobortis mauris et tortor montes Nibh convallis tincidunt
              parturient curabitur natoque Cubilia, natoque metus aptent nulla
              quam, metus per. Vestibulum. Nec iaculis pulvinar porttitor Class
              tortor ad justo bibendum per, donec class nisl fermentum pede
              convallis ante. Scelerisque. Dictumst. Adipiscing. A ante id.
            </p>
          </div>
          <div className="col-4">
            <div class="card bg-dark">
              <img
                src="https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                class="card-img-top"
                alt="image goes here"
              />
              <div class="card-body">
                <h5 class="card-title text-white">Just click photos</h5>
                <p class="card-text text-white">
                  Etiam metus nullam, laoreet adipiscing per inceptos rhoncus
                  suscipit suspendisse hendrerit metus interdum. Cubilia egestas
                  senectus fames pellentesque ipsum nulla. Nostra quam.Ut sapien
                  arcu posuere aliquam mus praesent convallis.
                </p>
                <Link to="/team">
                  <button className="btn btn-warning btn-block">
                    {heading}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
