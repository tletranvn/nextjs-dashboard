// Import the Inter font from the next/font/google module - this will be your primary font. 
import {Inter, Lusitana} from 'next/font/google';
// Then, specify what subset you'd like to load. In this case, 'latin':
export const inter = Inter({subsets: ['latin']});
export const lusitana = Lusitana({subsets: ['latin'], weight: ['400', '700']});