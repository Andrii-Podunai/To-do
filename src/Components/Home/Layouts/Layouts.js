import React from 'react'

const Layouts = ({children}) => {
  return (
    <div className='py-10 bg-gray-900 h-screen'>
        <main>{children}</main>

    </div>
  )
}

export default Layouts