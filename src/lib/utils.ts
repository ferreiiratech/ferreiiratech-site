import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getInitials(name: string): string {
  const names = name.split(" ")
  if (names.length >= 2) {
    return `${names[0][0]}${names[1][0]}`
  }
  return names[0][0]
}