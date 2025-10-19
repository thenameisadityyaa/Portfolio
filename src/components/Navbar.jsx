import React from 'react'
import 'remixicon/fonts/remixicon.css'

const Navbar = () => {
    return (
        <div className=' h-10 w-full p-2 flex items-center justify-between '>
            <h1 className='font-medium text-2xl tracking-tight'>Aditya Sharma</h1>
            <div className='flex items-center justify-between gap-15 font-light tracking-tight'>
                <h1>Home</h1>
                <h1>About</h1>
                <h1>Projects</h1>
                <div className='px-10 py-3 border border-black-1 rounded-full flex justify-between items-center gap-4 h-12 font-semibold'>
                    <button>Download CV</button>
                    <i className="ri-arrow-right-long-fill bg-orange-500 h-10 w-10 flex items-center justify-center rounded-full text-white font-semibold"></i>
                </div>
                
            </div>

        </div>
    )
}

export default Navbar