import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const Image = props => {
  return (
    <StaticQuery
      query={preQuery}
      render={data => {
        const node = data.allFile.nodes.find(node => {
          return node.name.toLowerCase() === props.imageName.toLowerCase()
        })

        return (
          <div
            style={{
              marginBottom: '1rem',
            }}
          >
            <Img
              fluid={node.childImageSharp && node.childImageSharp.fluid}
              // style={{
              //   // width: '100vw',
              //   position: 'relative',
              //   left: '50%',
              //   right: '50%',
              //   marginLeft: '-50vw',
              //   marginRight: '-50vw',
              // }}
            />
          </div>
        )
      }}
    />
  )
}
const preQuery = graphql`
  query {
    allFile {
      nodes {
        id
        name
        ext
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`
export default Image

// file(absolutePath: { regex: "/${props.imageName}/" }) {
//   id
//   childImageSharp {
//     fluid(maxWidth: 1000) {
//       ...GatsbyImageSharpFluid_tracedSVG
//     }
//   }
// }

// {data.allFile.nodes.find(node => {
//   return node.name === props.imageName
// })}
