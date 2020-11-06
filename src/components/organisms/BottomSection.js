import React from 'react';
import PropTypes from 'prop-types';
import FirstFooterSection from '../molecules/FirstFooterSection';
import SecondFooterSection from '../molecules/SecondFooterSection';

const BottomSection = ({ firstContainerContent, secondContainerContent }) => (
  <div>
    <FirstFooterSection
      title={firstContainerContent.title}
      text={firstContainerContent.text}
      buttonText={firstContainerContent.buttonText}
      buttonAction={firstContainerContent.buttonAction}
    />
    <SecondFooterSection
      text={secondContainerContent.text}
      image={secondContainerContent.image}
      author={secondContainerContent.author}
    />
  </div>

);

BottomSection.propTypes = {
  firstContainerContent: PropTypes.node.isRequired,
  secondContainerContent: PropTypes.node.isRequired,
};

export default BottomSection;
