/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import { Content, Footer } from "../styles/components"

const Layout = ({ children }) => (

      <>
        <Header />
        <Content>
          <main>{children}</main>
          <Footer>
              <span role="img" aria-label='emoji'>
                con ❤️ por 
              </span>
            <a href="https://www.platzi.com">Platzi</a>
          </Footer>
        </Content>
      </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
