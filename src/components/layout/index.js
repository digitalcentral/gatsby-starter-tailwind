import * as React from "react"

import Header from "./header"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <div className="bg-white">
      <div className="relative overflow-hidden">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
