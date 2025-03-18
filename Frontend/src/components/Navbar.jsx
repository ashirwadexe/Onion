import React from 'react'
import { Search, ShoppingBag  } from 'lucide-react';

const Navbar = () => {
  return (
    <>
        <div className='flex items-center justify-between text-[#222]'>
            <div className='flex items-center'>
                <img src="\src\assets\onion-logo.png" alt="logo" className='h-10'/>
                <h1 className='text-[2.5rem] font-semibold text-green-500'>Onion.</h1>
            </div>
            <div>
                <ul className='flex items-center gap-10 text-[1rem] font-medium'>
                    <li>Home</li>
                    <li>Menu</li>
                    <li>Contacts</li>
                    <li>About Us</li>
                </ul>
            </div>
            <div className='flex gap-5 items-center'>
                <span> <Search /></span>
                <span><ShoppingBag /> </span>
                <div>
                    <button className='px-7 py-1 border rounded-2xl'>Sign In</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar