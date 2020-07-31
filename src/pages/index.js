import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import ProjectList from '../components/ProjectList'

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <ProjectList />
    </Layout>
  )
}

export default IndexPage
