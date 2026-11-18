
import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default function Seo({
  title,
  description,
  image,
  pathname = "/",
}) {
  const data = useStaticQuery(graphql`
    query SeoMetadata {
      site {
        siteMetadata {
          title
          description
          siteUrl
          image
        }
      }
    }
  `)

  const metadata = data.site.siteMetadata

  // Prioriza os dados específicos da página.
  const seoTitle = title
    ? `${title} | ${metadata.title}`
    : metadata.title

  const seoDescription = description || metadata.description
  const imagePath = image || metadata.image

  // Garante que a imagem tenha uma URL absoluta.
  const seoImage = imagePath.startsWith("http")
    ? imagePath
    : `${metadata.siteUrl}${imagePath}`

  const canonicalUrl = `${metadata.siteUrl}${pathname}`

  return (
    <>
      <title>{seoTitle}</title>

      <meta name="description" content={seoDescription} />

      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={seoImage} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={seoImage} />
    </>
  )
}


{/* Desenvolvido com ajuda de IA.*/}