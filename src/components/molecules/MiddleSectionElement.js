import React from "react"
import { string } from "prop-types"

const MiddleSectionElement = ({
  imagePosition,
  image,
  title,
  text,
}) => {
  if (imagePosition === 'left') {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        marginTop: 100
      }}>
        <img
          style={{ flex: 5, width: '100%' }}
          src={image}
        />
        <div
          style={{
            flex: 4,
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            padding: 60,
          }}
        >
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
      </div>
    )
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      marginTop: 100,
    }}>
      <div
        style={{
          flex: 4,
          display: 'flex',
          alignContent: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          padding: 60,
          minWidth: 200,
        }}
      >
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <img
        style={{ flex: 5, width: '100%' }}
        src={image}
      />
    </div>
  )
}

MiddleSectionElement.propTypes = {
  imagePosition: string,
  image: string,
  title: string,
  text: string,
}

MiddleSectionElement.defaultProps = {
  imagePosition: 'left',
  image: '',
  title: '',
  text: '',
}

export default MiddleSectionElement
