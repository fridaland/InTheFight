import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import DateField from '../components/atoms/dateField';
import Description from '../components/atoms/description';
import Layout from '../components/templates/layout';
import Button from '../components/atoms/button';

const EventContainer = styled.div`
  display: flex;
  flex-direction: row;
  justif-content: flex-start;
  margin-top: 50px;
`;

const EventTitle = styled.h2`
  font-family: Gelo;
  font-weight: normal;
`;

const StyledImage = styled.img`
  margin-left: 50px;
`;

const EventInfoContainer = styled.div`
  margin-left: 70px;
  width: 700px
`;

const Events = ({ data }) => {
  const eventsData = data.allContentfulEvents.edges;

  return (
    <Layout>
      {eventsData.map((event) => {
        const { id, title, datetime, description, media } = event.node;

        return (
          <EventContainer key={id}>
            <StyledImage src={media.file.url} alt="event image" />
            <EventInfoContainer>
              <EventTitle>{title}</EventTitle>
              <h3>Details</h3>
              <DateField date={datetime} />
              <Description text={description.description} />
              <Button text="Sign up for this event" color="purple" />
            </EventInfoContainer>
          </EventContainer>
        );
      })}
    </Layout>
  );
};

Events.propTypes = {
  data: PropTypes.node.isRequired,
};

export default Events;

export const eventsQuery = graphql`
  query eventsQuery {
    allContentfulEvents {
      edges {
        node {
          id
          title
          datetime
          description {
            description
          }
          media {
            file {
              url
            }
          }
        }
      }  
    }
  }
`;
