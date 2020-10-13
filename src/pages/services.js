import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Reusable/HeroSection"
import Infoblock from "../components/Reusable/infoblock"
import Dualinfoblock from "../components/Reusable/Dualinfoblock"

const ServicesPage = ({ data }) => (
  <Layout>
    <SEO title="Services" />
    <HeroSection
      img={data.img.childImageSharp.fluid}
      title="Our Services"
      subtitle=""
      heroclass="about-background"
    />
    <Dualinfoblock heading="Why choose our services" />
    <Infoblock heading="Quality" />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "about.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default ServicesPage
