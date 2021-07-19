import * as React from "react"

import Seo from "../components/seo"
import "../styles/styles.css"
import Header from "../components/header"

const SecondPage = () => (

<React.Fragment>
  <Seo title="Page two" />
  <Header />
  <div className="container">
    <div className="page2-page">
      <h1>Hi from the second page</h1>
      <br />
      <p>Welcome to page 2</p>
    </div>
  </div>
</React.Fragment>
 
)

export default SecondPage
