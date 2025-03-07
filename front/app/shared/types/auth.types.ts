import { NextPage } from 'next'
import { ReactNode } from 'react'

export type TypeRoles = {
	isOnlyAdmin?: boolean
	isOnlyUser?: boolean
}

export type NextPageAuth<P = Record<string, unknown>> = NextPage<P> & TypeRoles

export type TypeComponentAuthFields = {
	Component: TypeRoles
	children?: ReactNode
}
