import * as React from "react"
import Layout from "../components/layout"

// if (posts.length === 0) {
//   return (
//     <Layout location={location} title={siteTitle}>
//       <p>
//         No blog posts found. Add markdown posts to "content/blog" (or the
//         directory you specified for the "gatsby-source-filesystem" plugin in
//         gatsby-config.js).
//       </p>
//     </Layout>
//   )
// }

const Home = () => {
  return (
    <Layout>
      <p className="py-5 text-center text-lg text-red-500">Nothing here yet.</p>
    </Layout>
  )
}
export function Head() {
  return (
    <title>Homepage</title>
  )
}

export default Home
