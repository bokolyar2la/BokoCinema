import { ControllerRenderProps } from 'react-hook-form'
import { Options } from 'react-select'
import { IFieldProps } from '../form-elements/form.interface'

export interface IOption {
	value: string
	label: string
}

export interface ISelect extends IFieldProps {
	options: Options<IOption>
	isMulti?: boolean
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	field: ControllerRenderProps<any, any>
	isLoading?: boolean
}
