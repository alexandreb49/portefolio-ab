import React from 'react'
import Link from 'next/link'

function Navbar() {
    return (
        <nav className="w-full h-16 bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg flex items-center justify-between px-8">
            {/* Logo / Brand */}
            <div className="text-2xl font-bold text-white hover:text-gray-200 transition-colors duration-300 cursor-pointer">
                Portefolio - Alexandre Bernard
            </div>

            {/* Links */}
            <div className="flex space-x-8">
                <Link 
                    href="/" 
                    className="text-white hover:text-gray-200 transition-colors duration-300 font-medium"
                >
                    About Me
                </Link>
                <Link 
                    href="/projects" 
                    className="text-white hover:text-gray-200 transition-colors duration-300 font-medium"
                >
                    Projects
                </Link>
                <Link 
                    href="/contact" 
                    className="text-white hover:text-gray-200 transition-colors duration-300 font-medium"
                >
                    Contact
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
