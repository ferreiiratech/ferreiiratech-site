import { Skeleton } from "@/components/ui/skeleton"

export default function TechFilterSkeleton() {
  return (
    <div className="hidden 2xl:flex flex-wrap gap-2 mb-2 md:mb-0 md:ml-4">
      <Skeleton className="h-8 w-16 rounded-lg border border-[#899099]/30" />
      {Array.from({ length: 6 }).map((_, index) => (
        <Skeleton
          key={index}
          className="h-8 w-20 rounded-lg border border-[#899099]/30"
        />
      ))}
    </div>
  )
}
