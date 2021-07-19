import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const HeaderContent = () => (

<div className="container">
    <div className="content">
        <div className="text">
            <h1>Hi people, <br/> Welcome to your new <span>Gatsby</span> site.</h1>
            <p>Now go build something great !</p>
        </div>
        <div className="image">
            <StaticImage
                src="../images/gatsby-astronaut.png"
                width={600}
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="A Gatsby astronaut"
                style={{ marginBottom: `1.45rem` }}
            />
        </div>
    </div>
</div>
 
)

export default HeaderContent
