/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import "./layout.css"
import { Content, Footer } from "../styles/components"
import Header from "./header"

const Layout = ({ children }) => (
  <>
    <Header />
    <Content>
      <main>{children}</main>
      <Footer>
        Hecho con ♥︎
        <a href="https://ricrdomedina.github.io/portafolio/">Ricardo Medina</a>
      </Footer>
    </Content>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
