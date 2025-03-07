import MaterialIcon from '@/components/ui/MaterialIcon'
import { useActions } from '@/hooks/useActions'
import { FC, MouseEvent } from 'react'

const LogoutButton: FC = () => {
	const { logout } = useActions()

	const handleLogout = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		logout()
	}

	return (
		<li className="logout">
			<button
				onClick={handleLogout}
				className="flex items-center text-gray-600 px-5 mt-8 cursor-pointer hover:text-white transition-colors"
			>
				<MaterialIcon name="MdLogout" size={24} color="white" />
				<span className="ml-2 text-lg">Logout</span>
			</button>
		</li>
	)
}

export default LogoutButton
