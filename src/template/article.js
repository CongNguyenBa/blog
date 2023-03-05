import * as React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import Layout from "../components/layout"

const shortcodes = { Link }

export default function Article({ data, children }) {
  return (
    <>
    <Layout>
      <div className='w-full px-4 pb-4 md:px-7 text-gray-900 leading-normal tracking-normal'>
        <span className="font-sans">
          <Link to="/" className="text-base md:text-sm text-blue-400 font-bold no-underline hover:underline"> &lt; &lt; BACK HOME </Link>
        
          <h1 className="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-xl md:text-3xl"> 
          {data.mdx.frontmatter.title} </h1>
          <h2 className="text-sm md:text-base font-normal text-gray-600">
          {data.mdx.frontmatter.date} </h2>
        </span>
      </div>

      <MDXProvider components={shortcodes}>
        {children}
      </MDXProvider>

      <div className="py-3 flex flex-nowrap text-sm">
        <h5 className=" text-gray-500">TAG:</h5>
        <p className="ml-1 text-cyan-700">{data.mdx.frontmatter.tag}</p>
      </div>

      

      <hr class="border-b-2 border-gray-400 mb-8 mx-4"></hr>
      
      <div class="font-sans flex justify-between content-center px-4 pb-12">
        <div class="text-left">
          <span class="text-xs md:text-sm font-normal text-gray-600">&lt; Previous Post</span><br/>
          <p><Link href="/" class="break-normal text-base md:text-sm text-blue-500 font-bold no-underline hover:underline">Blog title</Link></p>
        </div>

        <div class="text-right">
          <span class="text-xs md:text-sm font-normal text-gray-600">Next Post &gt;</span><br/>
          <p><Link href="/" class="break-normal text-base md:text-sm text-blue-500 font-bold no-underline hover:underline">Blog title</Link></p>
        </div>
      </div>
    </Layout>
    </>
  )
}

export const query = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date
        tag
      }
    }
  }
`

export function Head() {
  return (
    <title> First Blog </title>
  )
}