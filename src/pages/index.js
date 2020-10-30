import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../components/templates/layout"
import Title from "../components/atoms/title"
import Description from "../components/atoms/description"
import HomePageLogo from "../components/molecules/homePageLogo"
import BottomSection from "../components/organisms/BottomSection"

import footerImage from "../images/home-images/footer-image.png";
import MiddleSection from "../components/organisms/MiddleSection"

import homeImageA from "../images/home-images/home-image-a.png"
import homeImageB from "../images/home-images/home-image-b.png"
import homeImageC from "../images/home-images/home-image-c.png"

import "../styles/index.css";

class IndexPage extends Component {
  render() {
    const homepageData = this.props.data.allContentfulHomepageData.edges

    return (
      <>
        <Layout>
          <HomePageLogo />
          {homepageData.map(data => {
            const { title, simpleDescription, id } = data.node

            return (
              <div className="headline-container" key={id}>
                <Title className="headline" text={title} />
                <Description className="headline-description" text={simpleDescription.simpleDescription} />
              </div>          
            )
          })}
          <MiddleSection
            sections={[
              {
                image: homeImageA,
                title: 'Header',
                text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
              },
              {
                image: homeImageB,
                title: 'Header',
                text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
              },
              {
                image: homeImageC,
                title: 'Header',
                text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
              },
            ]}
	  />
          <BottomSection
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
        </Layout>
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
