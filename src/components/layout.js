import * as React from 'react'
import Header from './header'
import Footer from './footer'

const Layout = ({children}) => {  
  return (
    <main>
      <Header></Header>
      <body className='container w-full mx-auto pt-20 md:max-w-3xl'>
      {children}
      </body>
      <Footer></Footer>
    </main>  
  )
}

export default Layout

