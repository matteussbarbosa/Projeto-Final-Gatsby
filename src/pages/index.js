
import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/Seo"

export default function IndexPage() {
  return (
    <Layout>
      <img
        src="/og-default.jpg"
        alt="Paisagem de viagem — Viagens pelo Mundo"
        className="hero-image"
      />
      <h1>Bem-vindo ao nosso site de viagens!</h1>
      <p>Explore destinos incríveis e planeje sua próxima aventura.</p>
    </Layout>
  )
}

export const Head = () => (
  <Seo
    title="Início"
    description="Explore destinos incríveis, conheça novas culturas e planeje sua próxima aventura com o Viagens pelo Mundo."
    image="/og-default.jpg"
    pathname="/"
  />
)

{/* Desenvolvido com ajuda de IA.*/}