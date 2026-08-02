interface WaveDividerProps {
  topColor?: string
  bottomColor?: string
  flip?: boolean
}

export default function WaveDivider({
  topColor = '#F8EDE8',
  bottomColor = '#FFF9F6',
  flip = false,
}: WaveDividerProps) {
  return (
    <div
      className={`w-full overflow-hidden leading-none ${flip ? 'rotate-180' : ''}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-16 md:h-20"
      >
        <rect width="1440" height="80" fill={topColor} />
        <path
          d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
          fill={bottomColor}
        />
      </svg>
    </div>
  )
}
