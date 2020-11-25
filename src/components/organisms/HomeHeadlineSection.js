import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Title from '../atoms/title';
import Description from '../atoms/description';

const HeadlineContainer = styled.div`
  justify-content: space-between;
  padding: 60px;
  display: flex;
  flex-direction: row;
`;
const TitleContainer = styled.div`
  flex: 5 1 0%;
  width: 100%;
  margin: 0 20px 0 60px;;
`;

const DescriptionContainer = styled.div`
  flex: 4 1 0%;
  width: 100%;
  flex-direction: column;
  padding: 20px;
`;

const HomeHeadlineSection = ({ title, description, id }) => (
  <HeadlineContainer key={id}>
    <TitleContainer>
      <Title color="blue" text={title} />
    </TitleContainer>
    <DescriptionContainer>
      <Description
        className="headline-description"
        text={description}
      />
    </DescriptionContainer>
  </HeadlineContainer>
);

HomeHeadlineSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default HomeHeadlineSection;
