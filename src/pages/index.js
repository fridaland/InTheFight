import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/templates/layout';
import HomePageLogo from '../components/molecules/homePageLogo';
import BottomSection from '../components/organisms/BottomSection';
import HomeHeadlineSection from '../components/organisms/HomeHeadlineSection';

import footerImage from '../images/home-images/footer-image.png';
import MiddleSection from '../components/organisms/MiddleSection';

import homeImageA from '../images/home-images/home-image-a.png';
import homeImageB from '../images/home-images/home-image-b.png';
import homeImageC from '../images/home-images/home-image-c.png';

const IndexPage = ({ data }) => {
  const homepageData = data.allContentfulHomepageData.edges;

  return (
    <>
      <Layout>
        <HomePageLogo />
        {homepageData.map((homeData) => {
          const { title, simpleDescription, id } = homeData.node;
          return (
            <HomeHeadlineSection
              title={title}
              description={simpleDescription.simpleDescription}
              id={id}
            />
          );
        })}
        <MiddleSection
          sections={[
            {
              image: homeImageA,
              title: 'Header',
              text:
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            },
            {
              image: homeImageB,
              title: 'Header',
              text:
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            },
            {
              image: homeImageC,
              title: 'Header',
              text:
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            },
          ]}
        />
        <BottomSection
          firstContainerContent={{
            title: 'Header',
            text:
              'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            buttonText: 'ACTION',
            buttonAction: () => {},
          }}
          secondContainerContent={{
            text:
              'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            author: 'lorem Ipsum Author',
            image: footerImage,
          }}
        />
      </Layout>
    </>
  );
};

IndexPage.propTypes = {
  data: PropTypes.node.isRequired,
};

export default IndexPage;

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
  }
`;
