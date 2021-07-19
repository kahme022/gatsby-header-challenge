// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import { PageProps, graphql } from "gatsby"

import Seo from "../components/seo"
import "../styles/styles.css"
import Header from "../components/header"

type DataProps = {
  site: {
    buildTime: string
  }
}

const UsingTypescript: React.FC<PageProps<DataProps>> = ({ data, path }) => (

<React.Fragment>
  <Seo title="Using TypeScript" />
  <Header />
  <div className="container">
    <div className="typescript-page">
      <h1>Gatsby supports TypeScript by default!</h1>
      <p>
        This means that you can create and write <em>.ts/.tsx</em> files for your
        pages, components etc. Please note that the <em>gatsby-*.js</em> files
        (like gatsby-node.js) currently don't support TypeScript yet.
      </p>
      <p>
        For type checking you'll want to install <em>typescript</em> via npm and
        run <em>tsc --init</em> to create a <em>.tsconfig</em> file.
      </p>
      <p>
        You're currently on the page "{path}" which was built on{" "}
        {data.site.buildTime}.
      </p>
      <p>
        To learn more, head over to our{" "}
        <a href="https://www.gatsbyjs.com/docs/typescript/">
          documentation about TypeScript
        </a>
        .
      </p>
    </div>
  </div> 
</React.Fragment>

)

export default UsingTypescript

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
