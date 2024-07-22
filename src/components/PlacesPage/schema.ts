import { InferSelectModel } from 'drizzle-orm'
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const places = sqliteTable('places', {
	id: text('id'),
	img: text('img'),
	desc: text('desc'),
	title: text('title'),
	price: text('price'),
	url: text('url')
})

export type Place = InferSelectModel<typeof places>
