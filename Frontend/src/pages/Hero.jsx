import React from "react";

const Hero = () => {
  return (
    <div className="relative h-[550px] flex items-center justify-center text-center text-white bg-cover bg-center bg-no-repeat p-10">
        
        {/* Blurred Background Image */}
        <div className="absolute inset-0 bg-cover bg-center filter blur-[4px] rounded-3xl" 
            style={{ backgroundImage: "url('/src/assets/hero-food.webp')" }}>
        </div>
    
        <div className="flex flex-col items-center justify-center relative z-10 gap-5">
            <div>
                <h1 className="text-6xl font-bold drop-shadow-[1px_1px_1px_rgba(0,0,0,0.8)]">Order Your</h1>
                <h1 className="text-6xl font-bold drop-shadow-[1px_1px_1px_rgba(0,0,0,0.8)]">Favourite Food Here</h1>
            </div>

            <p className="w-[60%] drop-shadow-[1px_1px_1px_rgba(0,0,0,0.8)]">Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinery expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>

            <button className='px-7 py-1 border rounded-2xl bg-white text-[#222] font-medium drop-shadow-[1px_1px_1px_rgba(0,0,0,0.8)]'>View Menu🤤</button>
        </div>
    </div>
  );
};

export default Hero;
