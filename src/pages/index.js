import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../components/templates/layout"
import Title from "../components/atoms/title"
import Description from "../components/atoms/description"

class IndexPage extends Component {
  render() {
    const homepageData = this.props.data.allContentfulHomepageData.edges

    return (
      <>
        <Layout />
        {homepageData.map(data => {
          const title = data.node.title
          const description = data.node.simpleDescription.simpleDescription

          return (
            <div key={data.node.id}>
              <Title text={title} />
              <Description text={description} />
            </div>
          )
        })}
      </>
    )
  }
}

export default IndexPage

export const homePageQuery = graphql`
  query homePageQuery {
    allContentfulHomepageData {
      edges {
        node {
          id
          title
          simpleDescription {
            simpleDescription
          }
        }
      }
    }
  }`
