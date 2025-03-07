import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { IVideoElement } from './video.interface'

export const useVideo = () => {
	const videoRef = useRef<IVideoElement>(null)

	const [isPlaying, setIsPlaying] = useState(false)
	const [currentTime, setCurrentTime] = useState(0)
	const [videoTime, setVideoTime] = useState(0)
	const [progress, setProgress] = useState(0)

	useEffect(() => {
		const video = videoRef.current
		if (!video) return

		const setDuration = () => {
			setVideoTime(video.duration)
		}

		video.addEventListener('loadedmetadata', setDuration)
		return () => video.removeEventListener('loadedmetadata', setDuration)
	}, [])

	const toggleVideo = useCallback(() => {
		if (videoRef.current) {
			if (!isPlaying) {
				videoRef.current
					.play()
					.catch((err) => console.error('Playback error:', err))
			} else {
				videoRef.current.pause()
			}
			setIsPlaying((prev) => !prev)
		}
	}, [isPlaying])

	const forward = useCallback(() => {
		if (videoRef.current) {
			videoRef.current.currentTime += 10
		}
	}, [])

	const revert = useCallback(() => {
		if (videoRef.current) {
			videoRef.current.currentTime -= 10
		}
	}, [])

	const fullScreen = useCallback(() => {
		const video = videoRef.current
		if (!video) return

		if (video.requestFullscreen) {
			video.requestFullscreen()
		} else if (video.msRequestFullscreen) {
			video.msRequestFullscreen()
		} else if (video.mozRequestFullScreen) {
			video.mozRequestFullScreen()
		} else if (video.webkitRequestFullscreen) {
			video.webkitRequestFullscreen()
		}
	}, [])

	useEffect(() => {
		const video = videoRef.current
		if (!video) return

		const updateProgress = () => {
			const currentTime = video.currentTime
			const progress = (currentTime / (video.duration || 1)) * 100
			setCurrentTime(currentTime)
			setProgress(progress)
		}

		video.addEventListener('timeupdate', updateProgress)
		return () => video.removeEventListener('timeupdate', updateProgress)
	}, [])

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			switch (e.key) {
				case 'ArrowRight':
					forward()
					break
				case 'ArrowLeft':
					revert()
					break
				case ' ':
					e.preventDefault()
					toggleVideo()
					break
				case 'f':
					fullScreen()
					break
				default:
					return
			}
		}

		document.addEventListener('keydown', handleKeyDown)
		return () => document.removeEventListener('keydown', handleKeyDown)
	}, [toggleVideo, forward, revert, fullScreen])

	return useMemo(
		() => ({
			videoRef,
			actions: {
				fullScreen,
				revert,
				forward,
				toggleVideo,
			},
			video: {
				isPlaying,
				currentTime,
				progress,
				videoTime,
			},
		}),
		[
			currentTime,
			progress,
			isPlaying,
			videoTime,
			fullScreen,
			revert,
			forward,
			toggleVideo,
		]
	)
}
