import React from "react"

const FirstBootomSection = ({
  title,
  text,
  buttonText,
  buttonAction,
}) => (
  <div
    style={{
      height: 436,
      background: '#2C358F',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      paddingLeft: 150,
      paddingRight: 150,
    }}
  >
    <h2
      style={{
        fontFamily: 'Gelo',
        fontSize: 32,
        textAlign: 'center',
        color: '#FAF5EB',

      }}
    >
      {title}
    </h2>
    <p
      style={{
        fontFamily: 'Gelo',
        fontSize: 18,
        textAlign: 'center',
        color: '#FAF5EB',
      }}
    >
      {text}
    </p>
    <button
      style={{
        background: '#FAF5EB',
        color: '#2C358F',
        padding: '15px 40px 15px 40px',
        fontWeight: 'bold',
      }}
      onClick={buttonAction}
    >
      {buttonText}
    </button>
  </div>
)

FirstBootomSection.propTypes = {
}

FirstBootomSection.defaultProps = {
}

export default FirstBootomSection
