import { EditorProps } from 'draft-js'
import { ButtonHTMLAttributes, CSSProperties, InputHTMLAttributes } from 'react'

import { FieldError } from 'react-hook-form'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

export interface IFieldProps {
	placeholder: string
	error?: FieldError | undefined
}

type TypeInputPropsField = InputHTMLAttributes<HTMLInputElement> & IFieldProps

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface IField extends TypeInputPropsField {}

type TypeEditorPropsField = EditorProps & IFieldProps

export interface ITextEditor extends Omit<TypeEditorPropsField, 'editorState'> {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	onChange: (...event: any[]) => void
	value: string
}

export interface IUploadField {
	folder?: string
	value?: string
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	onChange: (...event: any[]) => void
	placeholder: string
	error?: FieldError
	style?: CSSProperties
	isNoImage?: boolean
}
