'use client'

import Image from 'next/image'

import Menu from '../Menu'
import logo from '/public/logo.svg'

export default function Nav() {
	return (
		<nav className="fixed left-6 top-1/4 flex min-h-[calc(100vh-100px)] w-25 translate-y-[-25%] flex-col items-center rounded-full bg-orange-700 px-3 py-5">
			<Image src={logo} width={50} height={80} alt="Logo" />

			<Menu />
		</nav>
	)
}
