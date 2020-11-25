import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/templates/layout';
import Title from '../components/atoms/title';

const Resources = ({ data }) => {
  const resourcesData = data.allContentfulResources.edges;

  return (
    <Layout>
      {resourcesData.map((resource) => {
        const { id, title } = resource.node;

        return (
          <div key={id}>
            <Title text={title} />
          </div>
        );
      })}
    </Layout>
  );
};

Resources.propTypes = {
  data: PropTypes.node.isRequired,
};

export default Resources;

export const resourcesQuery = graphql`
  query MyQuery {
    allContentfulResources {
      edges {
        node {
          description {
            description
          }
          title
        }
      }
    }
  }
`;
