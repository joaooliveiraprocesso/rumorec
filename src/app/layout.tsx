import { defaultFont } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import { Toaster } from "@/components/ui/toaster"
import Nav from '@/components/Nav'

import '@/styles/globals.scss'

export const metadata = {
	title: 'Rumo Recife',
	description: 'Viva essa experiência',
	viewport: {
		width: 'device-width',
		initialScale: 1,
		maximumScale: 1
	}
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="pt-br">
			<body
				className={cn(
					'min-h-screen bg-blue-100 antialiased',  // Alteração feita aqui
					defaultFont.variable
				)}
			>
				<Nav />
				<main className="w-full pl-[8.5rem]">
					<div className="w-full px-6">{children}</div>
					<Toaster />
				</main>
			</body>
		</html>
	)
}
