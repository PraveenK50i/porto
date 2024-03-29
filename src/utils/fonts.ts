import { Inter, Roboto_Mono , Montserrat_Alternates } from 'next/font/google'
 
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})
 
export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
})

export const mons = Montserrat_Alternates({
  subsets: ['cyrillic'],
  display: 'auto',
  weight:'100'
})