import { Skeleton } from "@/components/ui/skeleton"
import React from "react"

export default function SearchInputSkeleton() {
  return (
    <div className="relative w-full 2xl:max-w-sm flex-shrink-0">
      <Skeleton className="h-10 w-full rounded-md border border-[#899099]/30" />
      <span className="absolute right-3 top-1/2 -translate-y-1/2 border-l border-[#899099]/30 pl-2">
        <Skeleton className="h-5 w-5 rounded-full border border-[#899099]/30" />
      </span>
    </div>
  )
}
