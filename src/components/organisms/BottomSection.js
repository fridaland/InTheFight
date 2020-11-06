import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import FirstFooterSection from '../molecules/FirstFooterSection';
import SecondFooterSection from '../molecules/SecondFooterSection';

const StyledBottomSetion = styled.div`
  margin: 100px 0 120px 0;
`;

const BottomSection = ({ firstContainerContent, secondContainerContent }) => (
  <StyledBottomSetion>
    <FirstFooterSection
      title={firstContainerContent.title}
    />
    <SecondFooterSection
      text={secondContainerContent.text}
      image={secondContainerContent.image}
      author={secondContainerContent.author}
    />
  </StyledBottomSetion>

);

BottomSection.propTypes = {
  firstContainerContent: PropTypes.node.isRequired,
  secondContainerContent: PropTypes.node.isRequired,
};

export default BottomSection;
