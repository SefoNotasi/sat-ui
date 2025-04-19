import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '../../utils/mergeClasses'

export const Button = ({
	className,
	children,
	...restProps
}: ComponentPropsWithoutRef<'button'>) => {
	return (
		<button
			className={cn(
				'cursor-pointer rounded bg-emerald-200 px-4 py-2 hover:bg-sky-300',
				className,
			)}
			{...restProps}
		>
			Button Sat-UI {children}
		</button>
	)
}
