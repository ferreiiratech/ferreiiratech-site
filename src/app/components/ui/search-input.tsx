import { Search } from "lucide-react"

export default function SearchInput({
  technologies,
  searchTech,
  setSearchTech,
  setSelectedTag,
  setCurrentPage,
}: SearchInputProps) {
  return (
    <div className="relative w-full 2xl:max-w-sm flex-shrink-0">
      <input
        id="search-tech"
        type="text"
        placeholder={
          technologies.slice(0, 3).join(", ").concat("...") ||
          "Buscar por tecnologia"
        }
        value={searchTech}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setSearchTech(e.target.value)
          setSelectedTag(null)
          setCurrentPage(1)
        }}
        className="bg-transparent pl-4 pr-10 py-2 rounded-md border border-[#899099]/30 focus:outline-none transition w-full"
        aria-label="Buscar por tecnologia"
        autoComplete="off"
      />
      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#899099]/60 pointer-events-none border-[#899099]/60 border-l pl-2">
        <Search size={20} aria-hidden="true" />
      </span>
    </div>
  )
}
