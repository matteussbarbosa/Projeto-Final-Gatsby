const siteUrl = "https://viagens-pelo-mundo.netlify.app"

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Viagens pelo Mundo`,
    description: `Descubra destinos, experiências e dicas de viagem pelo mundo.`,
    siteUrl: siteUrl,
    image: `og-default.jpg`,
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/contents`
      }
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    // SEO: Sitemap
    "gatsby-plugin-sitemap",

    // SEO: Robots.txt
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: siteUrl,
        sitemap: `${siteUrl}/sitemap.xml`,

        policy: [
          {
            userAgent: "*",
            allow: "/",
          },
        ],

        env: {
          development: {
            policy: [
              {
                userAgent: "*",
                disallow: ["/"],
              },
            ],
            host: null,
            sitemap: null,
          },

          production: {
            policy: [
              {
                userAgent: "*",
                allow: "/",
              },
            ],
          },
        },
      },
    },
  ],
}
