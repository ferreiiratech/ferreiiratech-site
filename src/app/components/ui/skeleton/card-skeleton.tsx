"use client"

import { Skeleton } from "@/components/ui/skeleton"
import React from "react"
import Card from "../Card"

export default function ProjectCardSkeleton() {
  return (
    <Card>
      <div className="mb-4">
        <Skeleton className="h-4 w-20 rounded-lg bg-gray-700/30" />
      </div>

      <div className="flex flex-row gap-4">
        <div className="w-4/5">
          <Skeleton className="h-6 w-3/4 mb-4 rounded bg-gray-700/30" />
          <Skeleton className="h-4 w-full mb-2 rounded bg-gray-700/30" />{" "}
          <Skeleton className="h-4 w-5/6 mb-2 rounded bg-gray-700/30" />{" "}
          <Skeleton className="h-4 w-2/3 rounded bg-gray-700/30" />
        </div>

        <div className="flex flex-col gap-2">
          <Skeleton className="h-[100px] w-[120px] rounded-lg bg-gray-700/30" />
          <Skeleton className="h-[100px] w-[120px] rounded-lg bg-gray-700/30" />
        </div>
      </div>

      <div className="mt-auto">
        <div className="flex gap-2 mb-6">
          <Skeleton className="h-6 w-16 rounded-lg bg-gray-700/30" />
          <Skeleton className="h-6 w-16 rounded-lg bg-gray-700/30" />
          <Skeleton className="h-6 w-16 rounded-lg bg-gray-700/30" />
        </div>

        <Skeleton className="h-4 w-32 rounded bg-gray-700/30" />
      </div>
    </Card>
  )
}
