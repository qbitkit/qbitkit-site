import React from "react"

import SiteHeader from "../components/siteheader"
import SiteFooter from "../components/sitefooter"

import "./index.sass"

const HomePage = () => {
  return (
    <div className="page" id="page">
      <SiteHeader/>
      <SiteFooter/>
    </div>
  )
}

export default HomePage
