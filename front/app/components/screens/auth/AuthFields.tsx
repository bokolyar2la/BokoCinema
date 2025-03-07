import Field from '@/components/ui/form-elements/Field'
import { validEmail } from '@/shared/regex'
import {
	FieldError,
	FieldValues,
	FormState,
	Path,
	UseFormRegister,
} from 'react-hook-form'

interface IAuthFields<T extends FieldValues> {
	register: UseFormRegister<T>
	formState: FormState<T>
	isPasswordRequired?: boolean
}

const AuthFields = <T extends FieldValues>({
	register,
	formState: { errors },
	isPasswordRequired = false,
}: IAuthFields<T>) => {
	return (
		<>
			<Field
				{...register('email' as Path<T>, {
					required: 'Email is required!',
					pattern: {
						value: validEmail,
						message: 'Please enter a valid email',
					},
				})}
				placeholder="E-mail"
				error={errors.email as FieldError}
			/>
			<Field
				{...register(
					'password' as Path<T>,
					isPasswordRequired
						? {
								required: 'Password is required!',
								minLength: {
									value: 6,
									message: 'Min length should be more than 6 symbols!',
								},
							}
						: {}
				)}
				placeholder="Password"
				type="password"
				error={errors.password as FieldError}
			/>
		</>
	)
}

export default AuthFields
