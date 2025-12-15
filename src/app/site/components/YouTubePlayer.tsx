export default function YouTubePlayer({
  videoId,
  title = "YouTube video player",
  showControls = false,
}: YouTubePlayerProps) {
  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?controls=${showControls ? 1 : 0}&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&playsinline=1&enablejsapi=1`

  return (
    <div className="relative w-full h-full bg-gray-800 rounded-lg overflow-hidden">
      <iframe
        src={embedUrl}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
        className="absolute inset-0 w-full h-full border-0"
      />
    </div>
  )
}
