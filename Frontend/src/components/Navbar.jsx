import React, { useState } from 'react'
import { Search, ShoppingBag  } from 'lucide-react';

const Navbar = () => {

    const [menu, setMenu] = useState("home");

    return (
        <>
            <div className='flex items-center justify-between text-[#222] animate-[fadeIn_2s]'>
                <div className='flex items-center'>
                    <img src="\src\assets\onion-logo.png" alt="logo" className='h-10'/>
                    <h1 className='text-[2.5rem] font-semibold text-green-500'>Onion.</h1>
                </div>
                <div>
                    <ul className='flex items-center gap-10 text-[1rem] font-medium cursor-pointer text-gray-500'>
                        <li onClick={() => setMenu("home")} className={menu == "home"?"text-green-500 underline":""}>Home</li>
                        <li onClick={() => setMenu("menu")} className={menu == "menu"?"text-green-500 underline":""}>Menu</li>
                        <li onClick={() => setMenu("contacts")} className={menu == "contacts"?"text-green-500 underline":""}>Contacts</li>
                        <li onClick={() => setMenu("about-us")} className={menu == "about-us"?"text-green-500 underline":""}>About Us</li>
                    </ul>
                </div>
                <div className='flex gap-5 items-center'>
                    <span> <Search /></span>
                    <div>
                        <div className='relative'><ShoppingBag /> </div>
                        <div className='absolute h-2 w-2 bg-green-600 rounded-full top-2'></div>
                    </div>
                    <div>
                        <button className='px-7 py-1 border rounded-2xl'>Sign In</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar