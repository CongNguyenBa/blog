import React from "react";
import { Link } from "gatsby";

const Footer = () => {
  return (
    <div className="bg-white border-t border-gray-400 shadow">
      <div className="container max-w-4xl mx-auto flex py-8">
        <div className="flex flex-wrap md:flex-nowrap w-full mx-auto">
          <div className="flex w-full">
            <div className="px-8">
              <h3 className="font-bold text-gray-900">Blog - 2023</h3>
              <p className="py-3 text-gray-600 text-sm">Lorem</p>
            </div>
          </div>

          <div className="flex w-full">
            <div className="px-8">
              <h3 className="font-bold text-gray-900">Contact</h3>
              <ul className="items-center text-sm pt-3">
                <li>
                  <Link to="/contact" className="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-1">
                    Contact</Link>
                </li>
                <li>
                  <a href="#" className="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-1"></a>
                </li>
                <li>
                  <a href="#" className="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-1"></a>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer