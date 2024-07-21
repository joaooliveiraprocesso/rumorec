import Image from "next/image";
import Link from "next/link";

type Props = {
    img: string
    desc: string
    title: string
    price: string
    url: string

}

export default function Card({ img, desc, title, price, url }: Props) {
    return(
        <div className="flex gap-4 rounded-xl bg-gray p-4">
            <div className="relative w-40 overflow-hidden rounded-xl">
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
            </div>
            <div className="flex flex-col gap-2">
                <p className="font-extraligth text-black-400">{desc}</p>
                <h3 className="text-2xl font-bold text-orange-700">{title}</h3>
                <h4 className="text-xl font-bold text-black-600">{price}</h4>
                <Link href={url} className="max-w-max rounded-xl bg-orange-700 px-4 py-3 font-bold uppercase text-white transition-all hover:bg-indigo-800"
                >
                    explorar
                </Link>
            </div>
        </div>
    )
}