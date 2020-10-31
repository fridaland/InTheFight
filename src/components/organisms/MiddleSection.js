import React from 'react';
import MiddleSectionElement from '../molecules/MiddleSectionElement';

const MiddleSection = ({ sections }) => (
  <div>
    {sections.map((section, index) => (
      <MiddleSectionElement
        imagePosition={index % 2 ? 'right' : 'left'}
        image={section.image}
        title={section.title}
        text={section.text}
      />
    ))}
  </div>
);

MiddleSection.propTypes = {
  sections: Array,
};

MiddleSection.defaultProps = {
  sections: [],
};

export default MiddleSection;
