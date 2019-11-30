/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

const React = require("react")
const Layout = require("./src/components/layout").default //Traer component por defecto

exports.wrapRootElement = ({ element }) => <Layout>{element}</Layout>
