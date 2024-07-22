import Image from 'next/image'
import Link from 'next/link'
import { myRouteAtom } from '@/atoms/my-route'
import { useAtom } from 'jotai'

import { Place } from '../PlacesPage/schema'

interface CardProps {
	data: Place
	isRoute: boolean
}

export default function Card(props: CardProps) {
	const { desc, id, price, title, url, img } = props.data
	const [myRoute, setMyRoute] = useAtom(myRouteAtom)

	const onAddToRoute = (place: Place) => {
		if (isSelected()) return
		setMyRoute((old) => [...old, place])
	}

	const isSelected = () => {
		const result = myRoute.find((place) => place.id == id)
		if (result) return true
		return false
	}

	const rootClass =
		isSelected() && !props.isRoute
			? 'flex gap-4 p-4 bg-white opacity-50 rounded-xl'
			: 'flex gap-4 p-4 bg-white rounded-xl'

	return (
		<div className={rootClass}>
			<div className="relative overflow-hidden min-w-[400px] rounded-xl">
				{img ? (
					<Image
						src={img}
						fill={true}
						style={{
							width: '100%',
							height: '100%',
							objectFit: 'cover'
						}}
						alt="imagem do card"
					/>
				) : null}
			</div>
			<div className="flex flex-col gap-2">
				<h3 className="text-2xl font-bold text-orange-700">{title}</h3>
				<p className="font-extraligth text-black-400">{desc}</p>
				<h4 className="text-xl font-bold text-black-600">{price}</h4>
				<div className="flex gap-4 mt-4">
					{url ? (
						<Link
							href={url}
							className="px-4 py-3 font-bold text-white uppercase transition-all bg-orange-700 max-w-max rounded-xl hover:bg-indigo-800"
						>
							explorar
						</Link>
					) : null}
					{isSelected() ? null : (
						<button
							onClick={() => onAddToRoute(props.data)}
							className="px-4 py-3 font-bold text-white uppercase transition-all border-[1px] text-[#c2410c] border-[#c2410c] bg-transparent max-w-max rounded-xl"
						>
							Adicione a sua rota
						</button>
					)}
				</div>
			</div>
		</div>
	)
}
