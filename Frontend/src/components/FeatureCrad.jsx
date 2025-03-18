import React from 'react'

const FeatureCard = ({icon, title, description}) => {
    return (
        <div className='border rounded-sm w-[15rem] px-5 py-10 flex flex-col justify-start items-center text-center gap-2'>
            <div className='border rounded-full p-3 bg-green-100 text-2xl flex items-center justify-center'>
                {icon}
            </div>
            <h2 className='font-semibold text-lg'>{title}</h2>
            <p className='text-xs text-slate-500'>{description}</p>
        </div>
    )
}



const Features = () => {
    const features = [
        { icon: "🍽️", title: "Wide Range of Cuisines", description: "Order from multiple cuisines including Indian, Chinese, Italian, and more!" },
        { icon: "🚴", title: "Fast & Reliable Delivery", description: "Get your food delivered hot and fresh in under 30 minutes!" },
        { icon: "💳", title: "Secure & Easy Payments", description: "Pay with UPI, Cards, or Cash on Delivery – 100% secure transactions." },
        { icon: "🌟", title: "Exclusive Deals ", description: "Enjoy special discounts, cashback, and loyalty rewards!" },
        { icon: "📍", title: "Live Order Tracking", description: "Track your order in real-time and know exactly when it arrives!" }
    ];

    return (
        <>
            <h1 className='text-4xl text-[#222]'>Our Features 🚀</h1>
            <div className='grid grid-cols-5 gap-5'>
                {
                    features.map((feature, index) => (
                        <FeatureCard key={index} {...feature}/>
                    ))
                }
            </div>
        </>
    )
}

export default Features