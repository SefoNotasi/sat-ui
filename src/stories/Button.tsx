import type { ComponentPropsWithoutRef } from 'react'

export const Button = (props: ComponentPropsWithoutRef<'button'>) => {
	return <button {...props}>Lol test</button>
}
