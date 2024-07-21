import Image from 'next/image'

import hero from '/public/img8.jpg'
import Link from 'next/link'

export default function Hero() {
    return(
        <div className="overflow-hidden before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-full before:bg-black/40 before:content-['*']">
            <div className="absolute z-10 top-50% translate-y-[50%] p-6">
                <h1 className="text-7xl font-extraligth text-white">
                Viva essa <span className="font-bold">Experiência</span>
                </h1>
                <Link href="https://www.instagram.com/rumo.recife/" className="mt-10 block max-w-max rounded-xl border border-orange px-4 py-3 font-bold text-white transition-all hover:bg-orange-700 hover:border-orange-700">Siga nosso Instagram</Link>
            </div>

            <Image 
                src={hero}
                fill={true}
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: '1'
                }}   
                alt="imagem do card"
            />
        </div>
    )
}