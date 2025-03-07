import { useAuth } from '@/hooks/useAuth'
import { TypeComponentAuthFields } from '@/shared/types/auth.types'
import { useRouter } from 'next/router'
import { FC, useEffect } from 'react'

const CheckRole: FC<TypeComponentAuthFields> = ({
	children,
	Component: { isOnlyAdmin, isOnlyUser },
}) => {
	const { user } = useAuth()
	const router = useRouter()

	useEffect(() => {
		console.log('isOnlyAdmin:', isOnlyAdmin)
		console.log('isOnlyUser:', isOnlyUser)
		console.log('user:', user)

		if (isOnlyAdmin && !user?.isAdmin) {
			// Redirect to 404 if the page is for admins only and the user is not an admin
			router.replace('/404')
		} else if (isOnlyUser && !user) {
			// Redirect to /auth if the page is for authorized users only and the user is not logged in
			router.replace('/auth')
		}
	}, [isOnlyAdmin, isOnlyUser, user, router])

	// If the page does not require any special access
	if (!isOnlyAdmin && !isOnlyUser) {
		return <>{children}</>
	}

	// If the page is for admins only and the user is an admin
	if (isOnlyAdmin && user?.isAdmin) {
		return <>{children}</>
	}

	// If the page is for authorized users and the user is logged in (admin or regular user)
	if (isOnlyUser && user) {
		return <>{children}</>
	}

	// If no conditions are met, render nothing (redirect already handled)
	return null
}

export default CheckRole
