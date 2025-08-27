'use client'

import React from 'react'
import { Mail, Phone, Linkedin } from 'lucide-react'

function ContactMe() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold text-blue-800 mb-8">Contact Me</h1>

      <div className="flex flex-col space-y-6 text-blue-800">
        {/* Email */}
        <a
          href="mailto:alexandre.bernard.chaillou@gmail.com"
          className="flex items-center space-x-3 bg-white px-6 py-4 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
        >
          <Mail className="w-6 h-6 text-blue-700" />
          <span className="text-lg font-medium">alexandre.bernard.chaillou@gmail.com</span>
        </a>

        {/* Phone */}
        <a
          href="tel:+1234567890"
          className="flex items-center space-x-3 bg-white px-6 py-4 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
        >
          <Phone className="w-6 h-6 text-blue-700" />
          <span className="text-lg font-medium">+33 7 81 99 57 63</span>
        </a>

        {/* LinkedIn */}
        <a
          href="https:/linkedin.com/in/alexandre-bernard-chaillou"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-3 bg-white px-6 py-4 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
        >
          <Linkedin className="w-6 h-6 text-blue-700" />
          <span className="text-lg font-medium">/in/alexandre-bernard-chaillou/</span>
        </a>
      </div>
    </div>
  )
}

export default ContactMe
