export default function TechFilter({
  technologies,
  selectedTag,
  setSelectedTag,
  setCurrentPage,
}: TechFilterProps) {
  return (
    <div className="hidden 2xl:flex flex-wrap gap-2 mb-2 md:mb-0 md:ml-4">
      <button
        type="button"
        className={`text-sm font-spaceGrotesk px-3 py-2 bg-secondary border border-[#899099]/30 rounded-lg transition focus:outline-none
                        ${selectedTag === null ? "bg-white/25" : ""}`}
        onClick={() => {
          setSelectedTag(null)
          setCurrentPage(1)
        }}
        aria-pressed={selectedTag === null}
      >
        Todas
      </button>

      {technologies.slice(0, 8).map(tech => (
        <button
          key={tech}
          type="button"
          className={`text-[0.6rem] lg:text-sm font-spaceGrotesk px-3 py-2 bg-secondary border border-[#899099]/30 rounded-lg text-sm transition
                          ${selectedTag === tech ? "bg-white/25" : ""}`}
          onClick={() => {
            setSelectedTag(tech)
            setCurrentPage(1)
          }}
          aria-pressed={selectedTag === tech}
        >
          {tech}
        </button>
      ))}
    </div>
  )
}
