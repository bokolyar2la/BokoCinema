import { useState } from 'react'

export const useSlider = (length: number) => {
	const [currentIdx, setCurrentIdx] = useState(0)
	const [slideIn, setSlideIn] = useState(true)

	const isExistsNext = currentIdx + 1 < length
	const isExistsPrev = currentIdx > 0

	const handleArrowClick = (direction: 'next' | 'prev') => {
		const newIndex = direction === 'next' ? currentIdx + 1 : currentIdx - 1
		console.log('New Index After Click:', newIndex)

		// Защита от выхода за пределы массива
		if (newIndex < 0 || newIndex >= length) {
			console.warn('Attempted to access out-of-bounds index:', newIndex)
			return
		}

		setSlideIn(false)

		setTimeout(() => {
			setCurrentIdx(newIndex)
			setSlideIn(true)
		}, 300)
	}

	return {
		slideIn,
		index: currentIdx,
		isNext: isExistsNext,
		isPrev: isExistsPrev,
		handleClick: handleArrowClick,
	}
}
