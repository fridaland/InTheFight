import React from "react"
import styled from "styled-components"

const Container = styled.div`
  height: 436px;
  background: #2C358F;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-left: 150px;
  padding-right: 150px;
`

const Title = styled.h2`
  font-family: 'Gelo';
  font-size: 32px;
  text-align: center;
  color: #FAF5EB;
`

const Text = styled.p`
  font-family: 'Gelo';
  font-size: 18px;
  text-align: center;
  color: #FAF5EB;
`

const Button = styled.button`
  background: #FAF5EB;
  color: #2C358F;
  padding: 15px 40px 15px 40px;
  font-weight: bold;
`

const FirstFooterSection = ({
  title,
  text,
  buttonText,
  buttonAction,
}) => (
  <Container>
    <Title>{title}</Title>
    <Text>{text}</Text>
    <Button onClick={buttonAction}>
      {buttonText}
    </Button>
  </Container>
)

FirstFooterSection.propTypes = {
}

FirstFooterSection.defaultProps = {
}

export default FirstFooterSection
