export default function TitleH1({
  title1,
  title2,
}: { title1: string; title2: string }) {
  return (
    <h1>
      <div className="font-spaceGrotesk font-bold text-gray-500 text-2xl xxs:text-3xl sm:text-[2.7rem] sm:mb-4 sm:w-fit lg:text-5xl lg:mb-7 2xl:text-6xl">
        {title1}.
      </div>
      <div className="font-spaceGrotesk font-bold text-2xl xxs:text-[1.83rem] xs:text-[1.5rem] sm:text-[2rem] sm:w-fit md:text-4xl lg:text-[2.8rem] 2xl:text-6xl">
        {title2}
      </div>
    </h1>
  )
}
