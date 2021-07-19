import * as React from "react"

import Seo from "../components/seo"
import "../styles/styles.css"
import Header from "../components/header"
import HeaderContent from "../components/header-content"

const IndexPage = () => (

<React.Fragment>
  <Seo title="Home" />
  <Header />
  <HeaderContent />
</React.Fragment>

)

export default IndexPage
