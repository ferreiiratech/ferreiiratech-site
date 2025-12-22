export default function Card({ className, children }: CardProps) {
  return (
    <div
      className={`border border-[#899099]/20 rounded-lg p-5 flex flex-col h-full border-hover-highlight ${className}`}
    >
      {children}
    </div>
  )
}
