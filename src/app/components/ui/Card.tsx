const Card = ({ children }: CardProps) => {
  return (
    <div
      className="border border-[#899099]/20 rounded-lg p-5 flex flex-col h-full border-hover-highlight"
    >
      {children}
    </div>
  )
}

export default Card
