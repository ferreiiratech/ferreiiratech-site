export default function Description({
  text,
  maxW,
}: { text: string; maxW: string }) {
  return (
    <p
      className="text-[14.3px] xxs:text-base sm:text-2xl"
      style={{ maxWidth: maxW }}
    >
      {text}
    </p>
  )
}
