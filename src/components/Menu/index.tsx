import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { links } from './data'

export default function Menu() {
	const isActive = usePathname()

	const linkStyle = 'transition-colors hover:text-white'

	return (
		<ul className="absolute top-1/2 flex translate-y-[-50%] flex-col gap-20">
			{links.map((link, index) => (
				<li
					key={index}
					className={
						isActive === link.url
							? `${linkStyle} text-white`
							: `${linkStyle} text-black-400`
					}
				>
					<Link href={link.url}>{link.icon}</Link>
				</li>
			))}
		</ul>
	)
}
