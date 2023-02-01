import React from 'react'
import { Link } from 'gatsby'
// Hooks (to-be)

const Header = () => {
  return (
    <nav id='header' className='fixed w-full z-10 top-0 border-b border-blue-400'>
      <div className='w-full md:max-w-4xl mx-auto flex flex-wrap items-center justify-between mt-0 py-3'>
        
        <div className='px-4'>
          <a className='text-gray-900 no-underline hover:no-underline hover:text-blue-600 font-extrabold text-xl'>
            First Blog
          </a>
        </div>

        <div class="block lg:hidden pr-4">
          <button id="nav-toggle" class="flex items-center px-3 py-2 border rounded text-gray-500 
          border-gray-600 hover:text-gray-900 hover:border-green-500 appearance-none focus:outline-none">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
			  </div>

        {/* WHY XML? */}

        <div className='w-full flex-grow hidden lg:flex 
        lg:items-center lg:w-auto mt-2 lg:mt-0 
        bg-gray-100 md:bg-transparent z-20' id='nav-content'>
          <ul className='list-reset lg:flex justify-end flex-1 items-center'>
            <li className='mr-4'>
              <p>{new Date().toLocaleTimeString()}</p>
            </li>
            <li className='mr-4'>
              <Link className='inline-block py-2 px-4 text-grey-600 hover:text-grey-900 hover:text-underline 
              font-bold no-underline' href='#'>Active</Link>
            </li>
            <li className='mr-4'>
              <Link className='inline-block py-2 px-4 text-grey-600 hover:text-grey-900 hover:text-underline 
              font-bold no-underline' href='#'>Active</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header