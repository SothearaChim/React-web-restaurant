import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between h-24 mx-auto items-center max-w-[100%] px-24  '>

       <div>Logo</div> 

        <div>
            <ul className='flex gap-3.5'>
                <li className='p-4'>Home</li>
                <li className='p-4'>About us</li>
                <li className='p-4'>Contacts</li>
                <li className='p-4'>booking</li>
            </ul>
        </div>

    </nav>
  )
}

export default Navbar