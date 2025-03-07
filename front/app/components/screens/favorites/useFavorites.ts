import { useAuth } from '@/hooks/useAuth'
import { UserService } from '@/services/user.service'
import { useQuery } from 'react-query'

export const useFavorites = () => {
	const { user } = useAuth()
	const {
		isLoading,
		data: favoritesMovies,
		refetch,
	} = useQuery('Favorite movies', () => UserService.getFavorites(), {
		enabled: !!user,
		select: ({ data }) => data,
	})

	return { isLoading, favoritesMovies, refetch }
}
