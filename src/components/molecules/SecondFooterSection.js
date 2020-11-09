import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  min-height: 460px;
  overflow: hidden;
  width: 100%;
  position: relative;
`;

const ImageBackground = styled.img`
  width: 100%;
  position: absolute;
  top: -20;
  z-index: -9999;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 150px;
  width: 800px;
`;

const Text = styled.p`
  font-family: 'URW DIN';
  font-weight: bold;
  font-size: 40px;
  color: #faf5eb;
  text-transform: uppercase;
  margin-bottom: 20px;
`;

const Author = styled.p`
  font-family: 'URW DIN';
  font-weight: 300;
  font-size: 20px;
  color: #faf5eb;
`;

const SecondFooterSection = ({ text, author, image }) => (
  <Container>
    <ImageBackground src={image} />
    <Content>
      <Text>{text}</Text>
      <Author>
        -
        {author}
      </Author>
    </Content>
  </Container>
);

SecondFooterSection.propTypes = {
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  image: PropTypes.node.isRequired,
};

export default SecondFooterSection;
