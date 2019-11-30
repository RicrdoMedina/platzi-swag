import React from "react"
import { Link } from "gatsby"
import { SEO } from "../components"
import { Button, Purchase } from "../styles/components"
export default function gracias() {
  return (
    <div>
      <SEO title="Cancelacion de Orden" />
      <Purchase>
        <h2>Lo Sentimos</h2>
        <p>Es una pena que no hayas comprado tu swag.</p>
        <p>Te esperamos de vuelta. Nunca pares de aprender.</p>
        <Link to="/">
          <Button>Volver al catalogo</Button>
        </Link>
      </Purchase>
    </div>
  )
}
