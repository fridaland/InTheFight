import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../components/templates/layout"
import Title from "../components/atoms/title"
import Description from "../components/atoms/description"
import HomePageLogo from "../components/molecules/homePageLogo"
import BootomSection from "../components/organisms/BootomSection"

import footerImage from "../images/home-images/footer-image.png";

class IndexPage extends Component {
  render() {
    const homepageData = this.props.data.allContentfulHomepageData.edges

    return (
      <>
        <Layout />
        <HomePageLogo />
        {homepageData.map(data => {
          const { title, simpleDescription } = data.node

          return (
            <div key={data.node.id}>
              <Title text={title} />
              <Description text={simpleDescription.simpleDescription} />
            </div>
          )
        })}
        <BootomSection
          firstContainerContent={{
            title: 'Header',
            text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            buttonText: 'ACTION',
            buttonAction: () => console.log('firstContainer click')
          }}
          secondContainerContent={{
            text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            author: 'lorem Ipsum Author',
            image: footerImage,
          }}
        />
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
