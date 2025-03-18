import React from 'react'
import { menu_list } from '../../assets/frontend_assets/assets'

const ExploreMenu = () => {
  return (
    <div className='flex flex-col gap-5'>
        <h1 className='text-4xl text-[#222]'>Explore Our Menu 🍝</h1>
        <p className='w-[70%] text-gray-500'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinery expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>

        <div className='flex items-center justify-between'>
            {
                menu_list.map((item, index) => {
                    return (
                        <div key={index} className='flex flex-col items-center gap-2' >
                            <img src={item.menu_image} alt="menu-image" />
                            <p className='text-lg text-gray-500'>{item.menu_name}</p>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default ExploreMenu