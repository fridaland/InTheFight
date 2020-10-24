import React from "react"

const SecondBootomSection = ({
  text,
  author,
  image,
}) => (
  <div
    style={{
      minHeight: 436,
      width: '100%',
      position: 'relative',
    }}
  >
    <img
      src={image}
      style={{
        width: '100%',
        position: 'absolute',
        top: -20,
        zIndex: -9999,
      }}
    />
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: 150,
        width: 800,
      }}
    >
      <p
        style={{
          fontFamily: 'URW DIN',
          fontWeight: 'bold',
          fontSize: 40,
          color: '#FAF5EB',
          textTransform: 'uppercase',
          marginBottom: 20,
        }}
      >
        {text}
      </p>
      <p
        style={{
          fontFamily: 'URW DIN',
          fontWeight: 300,
          fontSize: 20,
          color: '#FAF5EB',
        }}
      >
        - {author}
      </p>
    </div>
  </div>
)

SecondBootomSection.propTypes = {
}

SecondBootomSection.defaultProps = {
}

export default SecondBootomSection
