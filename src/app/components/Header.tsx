import Image from 'next/image'
import React from 'react'
import logo from '../images/logo.svg'

export const Header = () => {
  return (
    
    <header className="bg-blue-600 text-white p-4 w-full text-center">
    <div className='flex items-center justify-center gap-60'>
        <Image src={logo} alt='logo'></Image>
    <h1 className="text-2xl">Chuck Norris Quotes</h1>
    </div>
  </header>
  )
}
