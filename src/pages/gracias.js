import React from "react"
import { Link } from "gatsby"
import { SEO } from "../components"
import { Button, Purchase } from "../styles/components"
export default function gracias() {
  return (
    <div>
      <SEO title="Compra exitosa" />
      <Purchase>
        <h2>Compra Exitosa</h2>
        <p>Espero disfrutes tu swag, lucelo con orgullo.</p>
        <p>Te esperamos de vuelta. Nunca pares de aprender.</p>
        <Link to="/">
          <Button>Volver al catalogo</Button>
        </Link>
      </Purchase>
    </div>
  )
}
