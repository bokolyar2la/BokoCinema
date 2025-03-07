import { useRenderClient } from '@/hooks/useRenderClient'
import { TypeMaterialIconName } from '@/shared/types/icon.types'
import { FC } from 'react'
import * as MaterialIcons from 'react-icons/md'

interface MaterialIconProps {
	name: TypeMaterialIconName
	size?: number
	color?: string
	className?: string
}

export const MaterialIcon: FC<MaterialIconProps> = ({
	name,
	size = 24,
	color = 'currentColor',
}) => {
	const { isRenderClient } = useRenderClient()

	const IconComponent = MaterialIcons[name] || MaterialIcons.MdDragIndicator

	if (isRenderClient) {
		return <IconComponent size={size} color={color} />
	}

	return null
}

export default MaterialIcon
