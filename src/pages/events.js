import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import EventsModal from '../components/organisms/eventsModal';
import DateField from '../components/atoms/dateField';
import Location from '../components/atoms/location';
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

const StyledDescription = styled.p`
  color: #000001cc;
`;

const Events = ({ data }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const eventsData = data.allContentfulEvents.edges;
  const [selectedEvent, setSelectedEvent] = useState('');

  const openModal = (currentEvent) => {
    setModalIsOpen(true);
    setSelectedEvent(currentEvent);
  };

  const closeModal = (event) => {
    setModalIsOpen(false);
    setSelectedEvent(event.node);
  };

  return (
    <Layout>
      {eventsData.map((event) => {
        const {
          datetime,
          description,
          id,
          location,
          media,
          title,
          virtual,
        } = event.node;

        return (
          <EventContainer key={id}>
            <StyledImage src={media.file.url} alt="event image" />
            <EventInfoContainer>
              <EventTitle>{title}</EventTitle>
              <h3>About this event</h3>
              <DateField date={datetime} />
              <Location location={location} virtual={virtual} />
              <StyledDescription>{description.description}</StyledDescription>
              <Button text="Sign up for this event" color="purple" onClick={() => openModal(event.node)} />
            </EventInfoContainer>
          </EventContainer>
        );
      })}
      {selectedEvent
        ? (
          <EventsModal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            title={selectedEvent.title}
            description={selectedEvent.description.description}
            date={selectedEvent.datetime}
            virtual={selectedEvent.virtual}
            location={selectedEvent.location}
          />
        )
        : ''}
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
            location
            virtual
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
