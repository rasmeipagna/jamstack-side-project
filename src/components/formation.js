import React from "react"
import { graphql } from "gatsby"
import Layout from "./layout"

export const query = graphql`
query {
  wpgraphql {
    formations {
        edges {
          node {
            Formation {
                baseline
                competences
                destinataire
                evaluation
                fieldGroupName
                formateur
                intitule
                methodePedagogique
                objectifs
                preRequis
                preRequisMateriel
                titre
            }
          id
        }
      }
    }
  }
}
`

const Forms = ({ data }) => {
    const Formation = data.wpgraphql.formations
    return (
      <Layout>
        <h1>{Formation.baseline}</h1>
        <h2>{Formation.competences}</h2>
        <p>{Formation.destinataire}</p>
        <p>{Formation.evaluation}</p>
        <p>{Formation.fieldGroupName}</p>
        {/* <p>{Formation.formateur}</p> */}
        <p>{Formation.intitule}</p>
        <p>{Formation.methodePedagogique}</p>
        <p>{Formation.objectifs}</p>
        <p>{Formation.preRequis}</p>
        <p>{Formation.preRequisMateriel}</p>
      </Layout>
    )
   }

export default Forms