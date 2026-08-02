import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  href?: string
  to?: string
  onClick?: () => void
  className?: string
  size?: 'sm' | 'md' | 'lg'
  type?: 'button' | 'submit'
}

export default function Button({
  children,
  variant = 'primary',
  href,
  to,
  onClick,
  className = '',
  size = 'md',
  type = 'button',
}: ButtonProps) {
  const sizeClasses = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-8 py-3.5 text-sm',
    lg: 'px-10 py-4 text-base',
  }

  const variantClasses = {
    primary:
      'bg-rose text-pearl rounded-full font-body font-medium tracking-wide shadow-copper hover:bg-rose-deep hover:shadow-rose-md transition-all duration-300',
    secondary:
      'bg-pearl border border-border text-ink rounded-full font-body font-medium tracking-wide hover:bg-blush-deep hover:border-rose transition-all duration-300',
    ghost:
      'text-rose-deep font-body font-medium underline decoration-copper/40 underline-offset-4 hover:text-rose hover:decoration-rose/60 transition-all duration-200',
  }

  const classes = `inline-flex items-center gap-2 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
