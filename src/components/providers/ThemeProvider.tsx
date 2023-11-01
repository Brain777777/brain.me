'use client'

import { type FC } from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import type { ThemeProviderProps } from 'next-themes/dist/types'

export const ThemeProvider:FC<ThemeProviderProps> = (props) => {
  return <NextThemesProvider {...props}/>
}
