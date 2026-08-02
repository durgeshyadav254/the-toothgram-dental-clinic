interface StarRatingProps {
  rating?: number
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function StarRating({ rating = 5, size = 'md', className = '' }: StarRatingProps) {
  const sizeMap = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
  }

  return (
    <div className={`flex items-center gap-0.5 ${sizeMap[size]} ${className}`} aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={i < Math.floor(rating) ? 'text-copper' : 'text-copper/30'}
        >
          ★
        </span>
      ))}
    </div>
  )
}
