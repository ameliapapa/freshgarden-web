export const colors = {
  primary: {
    DEFAULT: '#2B3C1B',
    hover: '#3B4F28',
    active: '#445A2E',
  },
  brand: {
    main: '#3E5622',
    accent: '#172815',
  },
  secondary: {
    DEFAULT: '#E8E6E1',
    hover: '#D3CEC4',
  },
  white: '#FFFFFF',
  black: '#000000',
};

export const typography = {
  heading: {
    fontFamily: 'Meno Banner, serif',
    sizes: {
      h1: 'text-5xl md:text-6xl lg:text-7xl',
      h2: 'text-4xl md:text-5xl lg:text-6xl',
      h3: 'text-3xl md:text-4xl lg:text-5xl',
      h4: 'text-2xl md:text-3xl lg:text-4xl',
    },
  },
  body: {
    fontFamily: 'Fira Code, monospace',
    sizes: {
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
    },
  },
};

export const buttonStyles = {
  base: 'inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50',
  variants: {
    primary: 'bg-[#2B3C1B] text-white shadow hover:bg-[#3B4F28] active:bg-[#445A2E]',
    outline: 'border border-[#2B3C1B] bg-transparent text-[#2B3C1B] hover:bg-[#2B3C1B] hover:text-white',
    secondary: 'bg-[#E8E6E1] text-[#2B3C1B] shadow-sm hover:bg-[#D3CEC4]',
    ghost: 'hover:bg-[#F5F5F4] hover:text-[#2B3C1B]',
    link: 'text-[#2B3C1B] underline-offset-4 hover:underline',
  },
  sizes: {
    sm: 'h-8 rounded-md px-3 text-xs',
    default: 'h-9 px-4 py-2',
    lg: 'h-10 rounded-md px-8',
    icon: 'h-9 w-9',
  },
};

export const spacing = {
  container: 'px-4 md:px-6 lg:px-8',
  section: 'py-12 md:py-16 lg:py-20',
  stack: {
    sm: 'space-y-2',
    default: 'space-y-4',
    lg: 'space-y-8',
  },
};

export const borderRadius = {
  sm: 'rounded',
  default: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-full',
};

export const shadows = {
  sm: 'shadow-sm',
  default: 'shadow',
  lg: 'shadow-lg',
};

// Usage example with tailwind classes:
// className={`${buttonStyles.base} ${buttonStyles.variants.primary} ${buttonStyles.sizes.default}`} 