import * as React from 'react'
import Header from './header'
import Footer from './footer'

const Layout = ({children}) => {  
  return (
    <main>
      <Header></Header>
      <body className='container w-full mx-auto md:max-w-3xl 2xl:max-w-4xl  '>
      {children}
      </body>
      <Footer></Footer>
    </main>  
  )
}

export default Layout

