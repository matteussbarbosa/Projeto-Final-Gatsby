
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/Seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "../components/centered-image.css"

export default function Blog({ data, children }) {
  return (
    <Layout>
      <h2>{data.mdx.frontmatter.title}</h2>

      <p>Postado em: {data.mdx.frontmatter.date}</p>

      <GatsbyImage
        image={getImage(data.mdx.frontmatter.hero_image)}
        alt={data.mdx.frontmatter.hero_image_alt}
        className="centered-image"
      />

      {children}
    </Layout>
  )
}

export const Head = ({ data, location }) => (
  <Seo
    title={data.mdx.frontmatter.title}
    description={data.mdx.frontmatter.description}
    image={data.mdx.frontmatter.hero_image.publicURL}
    pathname={location.pathname}
  />
)

export const query = graphql`
  query($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        description
        date(formatString: "DD/MM/YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text

        hero_image {
          publicURL
          childImageSharp {
            gatsbyImageData(
              width: 600
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
      excerpt
    }
  }
`
