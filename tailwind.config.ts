import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
  ],
  theme: {
  	container: {
  		center: true,
  		padding: '1rem',
  		screens: {
  			'2xl': '1280px'
  		}
  	},
  	extend: {
  		colors: {
  			primary: {
  				DEFAULT: '#7A4E9E',
  				hover: '#6A3E8E'
  			},
  			secondary: '#B47EC8',
  			accent: {
  				DEFAULT: '#F0C49B',
  				light: '#F8E1C2'
  			},
  			success: '#10B981',
  			warning: '#F59E0B',
  			danger: '#EF4444',
  			border: '#E5E5E5',
  			input: '#E5E5E5',
  			ring: '#7A4E9E',
  			background: '#FFFFFF',
  			foreground: '#171717',
  			neutral: {
  				'0': '#FFFFFF',
  				'50': '#FAFAFA',
  				'100': '#F5F5F5',
  				'200': '#E5E5E5',
  				'300': '#D4D4D4',
  				'400': '#A3A3A3',
  				'500': '#737373',
  				'600': '#525252',
  				'700': '#404040',
  				'800': '#262626',
  				'900': '#171717'
  			},
  			muted: {
  				DEFAULT: '#F5F5F5',
  				foreground: '#737373'
  			}
  		},
  		fontFamily: {
  			sans: [
  				'var(--font-inter)',
  				'Inter',
  				'system-ui',
  				'sans-serif'
  			],
  			mono: [
  				'JetBrains Mono',
  				'Fira Code',
  				'Consolas',
  				'monospace'
  			]
  		},
  		fontSize: {
  			xs: [
  				'0.75rem',
  				{
  					lineHeight: '1.5'
  				}
  			],
  			sm: [
  				'0.875rem',
  				{
  					lineHeight: '1.5'
  				}
  			],
  			base: [
  				'1rem',
  				{
  					lineHeight: '1.5'
  				}
  			],
  			lg: [
  				'1.125rem',
  				{
  					lineHeight: '1.5'
  				}
  			],
  			xl: [
  				'1.25rem',
  				{
  					lineHeight: '1.4'
  				}
  			],
  			'2xl': [
  				'1.5rem',
  				{
  					lineHeight: '1.375'
  				}
  			],
  			'3xl': [
  				'1.875rem',
  				{
  					lineHeight: '1.3'
  				}
  			],
  			'4xl': [
  				'2.25rem',
  				{
  					lineHeight: '1.25'
  				}
  			],
  			'5xl': [
  				'3rem',
  				{
  					lineHeight: '1.25'
  				}
  			],
  			'6xl': [
  				'3.75rem',
  				{
  					lineHeight: '1.2'
  				}
  			]
  		},
  		borderRadius: {
  			sm: '0.375rem',
  			DEFAULT: '0.5rem',
  			md: '0.75rem',
  			lg: '1rem',
  			xl: '1.5rem',
  			'2xl': '2rem'
  		},
  		boxShadow: {
  			sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  			md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  			lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  			xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  			'2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)'
  		},
  		zIndex: {
  			dropdown: '1000',
  			sticky: '1020',
  			fixed: '1030',
  			modal: '1040',
  			popover: '1050',
  			tooltip: '1060'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require('tailwindcss-animate')],
}

export default config

