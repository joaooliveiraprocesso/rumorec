import { Search } from '@/components/Forms/Search'
import Hero from '@/components/Hero'
import Places from '@/components/Places'

export default function Home() {
	return (
		<main>
			<div className="flex w-full gap-6 pt-6">
				<div className="w-1/2">
					<Search />

					<div className="pb-6 mt-12">
						<h2
							className="mb-8 text-4xl font-bold"
							style={{ color: '#ea580c' }}
						>
							Lugares mais visitados
						</h2>

						<Places />
					</div>
				</div>
				<div className="w-1/2 h-[calc(100vh-3rem)]">
					<div className="fixed rigth-0 h-screen w-[calc(50%-4rem)]">
						<div className="h-[calc(100vh-3rem)] w-full px-6">
							<div className="relative h-full overflow-hidden rounded-3xl">
								<Hero />
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}
