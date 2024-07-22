import { atom } from 'jotai'

import { Place } from '@/components/PlacesPage/schema'

export const myRouteAtom = atom<Place[]>([])
