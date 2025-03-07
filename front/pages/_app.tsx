import { TypeComponentAuthFields } from '@/shared/types/auth.types'
import type { AppProps } from 'next/app'
import MainProviders from 'providers/MainProviders'
import '../app/assets/styles/globals.scss'

type TypeAppProps = AppProps & TypeComponentAuthFields

function MyApp({ Component, pageProps }: TypeAppProps) {
	return (
		<MainProviders Component={Component}>
			<Component {...pageProps} />
		</MainProviders>
	)
}

export default MyApp
