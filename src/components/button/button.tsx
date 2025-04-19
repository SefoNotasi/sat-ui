import type { ComponentPropsWithoutRef } from 'react'

export const Button = (props: ComponentPropsWithoutRef<'button'>) => {
	return (
		<button
			className={
				'cursor-pointer rounded bg-emerald-200 px-4 py-2 hover:bg-sky-300'
			}
			{...props}
		/>
	)
}
