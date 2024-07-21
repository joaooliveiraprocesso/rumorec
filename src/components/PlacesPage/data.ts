import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import { sql } from "drizzle-orm";
import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";
import { places } from "./schema"

const client = createClient({ url: 'libsql://rumorecife-joaooliveira.turso.io', authToken: 'eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3MjE1ODE5MzEsImlkIjoiMzczZjVlNTUtNmY2ZC00YWNkLWI1ZmMtN2VhZjIzN2M0MTFmIn0.kq7K8oslXjy8lRYAtQc8naC98z3Q65D8LHzsiyjMo48-4qdKwANvoFJYcPKZ9mjLd771sHDlxgNvX9vuI6BkAw' });

const db = drizzle(client);

export const getPlaces = async() => {
    const result = await db.select().from(places).all()
}

export const placesPage = [
    {
        img: '/img2.jpg',
        desc: 'Viva uma experiência Incrivel',
        title: 'Rua do Bom Jesus',
        price: 'Free',
        url: '/'
    },
    {
        img: '/img2.jpg',
        desc: 'Viva uma experiência Incrivel',
        title: 'Caixa Cultural',
        price: 'Free',
        url: '/'
    },
    {
        img: '/img2.jpg',
        desc: 'Viva uma experiência Incrivel',
        title: 'Instituto Ricardo Brennand',
        price: 'R$ 30,00',
        url: 'https://www.institutoricardobrennand.org.br/'
    },
    {
        img: '/img2.jpg',
        desc: 'Viva uma experiência Incrivel',
        title: 'Praia de Boa Viagem',
        price: 'Free',
        url: '/'
    },
    {
        img: '/img3.jpg',
        desc: 'Viva uma experiência Incrivel',
        title: 'Instituto Ricardo Brennand',
        price: 'R$ 30,00',
        url: 'https://www.institutoricardobrennand.org.br/'
    },
    {
        img: '/img4.jpg',
        desc: 'Viva uma experiência Incrivel',
        title: 'Praia de Boa Viagem',
        price: 'Free',
        url: '/'
    },
    {
        img: '/img3.jpg',
        desc: 'Viva uma experiência Incrivel',
        title: 'Instituto Ricardo Brennand',
        price: 'R$ 30,00',
        url: 'https://www.institutoricardobrennand.org.br/'
    },
   
]