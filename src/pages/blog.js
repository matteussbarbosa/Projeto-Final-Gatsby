import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/Seo"
import { useStaticQuery, graphql, Link } from "gatsby"

export default function Blog() {
  const data = useStaticQuery(graphql`
      query{
        allMdx (sort: {frontmatter: {date: DESC}}) {
          nodes {
            frontmatter {
              title
              date (formatString: "DD/MM/YYYY")
              slug
            }
            id
            excerpt
          }
        }
      }
    `);


  return(
    <Layout>
      <h1>Este é o nosso blog de viagens!</h1>
      <p>Aqui você encontrará dicas, histórias e experiências de viagem.</p>
      <p>Estes são os artigos do nosso blog:</p>
      {
        data.allMdx.nodes.map(item => (
          <article key={item.id}>
                            <h2>
                                <Link to={`/${item.frontmatter.slug}`}>
                                    {item.frontmatter.title}
                                </Link>
                            </h2>
                            <p>Data: {item.frontmatter.date}</p>
                        </article>
        ))
      }
    </Layout>
  )
}

export const Head = () => (
  <Seo
    title="Blog de viagens"
    description="Leia histórias, dicas e experiências de viagens pelo mundo."
    image="/og-default.jpg"
    pathname="/blog/"
  />
)
