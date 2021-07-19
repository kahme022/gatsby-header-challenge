import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => (
  <header>
    <div className="container">
      <div className="inner-header">
        <div className="logo">
          <Link to="/">
            <StaticImage
              src="../images/gatsby-icon.png"
              width={40}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Gatsby Logo"
              style={{ marginBottom: `0.2rem` }}
            />
          </Link>
        </div>
        <div className="navigation">
          <nav>
            <Link to="/page-2/">Page 2</Link>
            <Link to="/using-typescript/">Using TypeScript</Link>
          </nav>
        </div>
      </div>
    </div>
  </header>
)

export default Header
