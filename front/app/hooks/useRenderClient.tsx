import { useEffect, useState } from 'react'

export const useRenderClient = () => {
	const [isRenderClient, setIsRenderClient] = useState(false)

	useEffect(() => {
		if (!isRenderClient) {
			setIsRenderClient(true)
		}
	}, [isRenderClient])

	return { isRenderClient }
}
