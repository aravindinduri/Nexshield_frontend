import React from 'react'

function SecuritySection() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4 text-center">
          {/* Logo or Icon */}
          <div className="mb-6">
            <FaTools className="text-6xl text-blue-500 animate-pulse" />
          </div>
    
          {/* Heading */}
          <h1 className="text-4xl font-extrabold mb-2">Page Under Development</h1>
    
          {/* Subtext */}
          <p className="text-gray-400 max-w-md">
            We're working hard to bring this section to life. Stay tuned!
          </p>
        </div>
  )
}

export default SecuritySection
