import React, { Component } from "react"
import { graphql } from "gatsby"

import DateField from "../components/atoms/dateField"
import Description from "../components/atoms/description"
import Layout from "../components/templates/layout"
import Title from "../components/atoms/title"

class Events extends Component {

  render() {
    const eventsData = this.props.data.allContentfulEvents.edges

    return (
      <>
        <Layout />
        {eventsData.map(event => {
          return (
            <div key={event.node.id} >
              <Title text={event.node.title} />
              <DateField date={event.node.datetime} />
              <Description text={event.node.description.description} />
            </div>
          )
        })
        }
      </>
    )
  }
}

export default Events

export const eventsQuery = graphql`
  query eventsQuery {
    allContentfulEvents {
      edges {
        node {
          id
          title
          datetime
          description {
            description
          }
        }
      }
    }
  }
`
