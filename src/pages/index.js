import React from "react"

import Layout from "../components/layout"

import CalendarioPartidos from '../components/calendarioPartidos';

const IndexPage = () => (
  <Layout>
    <h2 className="title-league">Liga Deportiva del Sur</h2>
    <CalendarioPartidos />
  </Layout>
)

export default IndexPage
