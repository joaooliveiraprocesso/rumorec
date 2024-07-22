'use client'

import { myRouteAtom } from '@/atoms/my-route'
import { useAtom } from 'jotai'

import Card from '@/components/Card'

export default function Page2() {
	const [myRoute, setMyRoute] = useAtom(myRouteAtom)

	return (
		<div className="container px-4 mx-auto">
			<div className="py-8 text-center">
				<h1 className="text-4xl font-bold">Minha rota pela cidade</h1>
			</div>
			<div className="flex flex-col gap-4 pb-10"></div>
			{myRoute
				? myRoute.map((place, index) => {
						if (myRoute.length - 1 === index) {
							return (
								<>
									<Card key={place.id} data={place} isRoute />
								</>
							)
						}

						return (
							<>
								<Card key={place.id} data={place} isRoute />
								<div className="flex flex-col items-center justify-center w-full gap-2 my-4">
									<div className="w-4 h-4 bg-red-400 rounded-full" />
									<div className="w-4 h-4 bg-red-400 rounded-full" />
									<div className="w-4 h-4 bg-red-400 rounded-full" />
								</div>
							</>
						)
				  })
				: null}
		</div>
	)
}
