export default function Header() {
  return (
    <div className="bg-secondary py-3 flex justify-center gap-2">
      <div>
        <button
          type="button"
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary bg-highlight rounded-lg hover:bg-purple-100"
        >
          <img src="\img\coffee-icon.svg" alt="coffee icon" />
          Buy me a coffee
        </button>
      </div>
      <div className="flex items-center gap-3 text-primary">
        <img src="\img\arrow-icon.svg" alt="arrow icon" />
        <p>Apoie meu trabalho</p>
      </div>
    </div>
  )
}
