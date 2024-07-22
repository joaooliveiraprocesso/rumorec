'use client'

import { useEffect, useState } from 'react'

import Card from '../Card'
import { getPlaces } from './data'
import { Place } from './schema'

export default function PlacesPage() {
	const [search, setSearch] = useState('')
	const [places, setPlaces] = useState<Place[]>([])

	useEffect(() => {
		const teste = async () => {
			const placesResponse = await getPlaces()
			setPlaces(placesResponse)
		}
		teste()
	}, [])

	const getData = (content: Place[], filter: string) => {
		const result = content.filter((place) => {
			return place.title
				?.toLocaleLowerCase()
				.includes(filter.toLowerCase())
		})

		return result.length > 0 ? result : []
	}

	return (
		<div className="flex flex-col gap-4 pb-10">
			<input
				className="h-10 px-4 rounded-lg"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				placeholder="Busce um ponto turistico"
			/>
			{places
				? getData(places, search).map((place) => (
						<Card key={place.id} data={place} isRoute={false} />
				  ))
				: null}
		</div>
	)
}
