import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
		<div className=' py-4 text-white md:py-6 lg:py-8 flex justify-center'>
			<nav className='  bg-gray-900 rounded-3xl py-4 px-8 flex gap-8 shadow-lg shadow-purple-300 animate-bounce'>
				<Link
					to=''
					className=' hover:text-purple-500 hover:-translate-y-1.5 text-xl md:text-3xl lg:text-4xl'>
					Home
				</Link>
				<Link
					to='/about'
					className=' hover:text-purple-500 hover:-translate-y-1.5 text-xl md:text-3xl lg:text-4xl'>
					About
				</Link>
				<Link
					to='/projects'
					className=' hover:text-purple-500 hover:-translate-y-1.5 text-xl md:text-3xl lg:text-4xl'>
					Projects
				</Link>
				<Link
					to='/contact'
					className=' hover:text-purple-500 hover:-translate-y-1.5 text-xl md:text-3xl lg:text-4xl'>
					Contact
				</Link>
			</nav>
		</div>
	)
}

export default Header
