import React, { Component }  from "react"
import Layout from "../components/templates/layout"
import Description from "../components/atoms/description"
import Title from "../components/atoms/title"

class Resources extends Component {

  render() {
    const resourcesData = this.props.data.allContentfulResources.edges

    return (
      <>
      <Layout>
        {resourcesData.map(resource => {
          const { id, title, description } = resource.node

          return (
            <div key={id} >
              <Title text={title} />
              {description.json.content.map(description => {
                return <Description text={description.content[0].value}/>
              })}
            </div>
          )
        })}
      </Layout>
      </>
    )
  }
}

export default Resources

export const resourcesQuery = graphql`
  query resourcesQuery {
    allContentfulResources{
      edges {
        node {
          title
          id
          description {
            json
          }
        }
      }
    }
  }
`
