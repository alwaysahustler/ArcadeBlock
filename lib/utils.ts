import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function truncateAddress(address: string): string {
  if (!address) return ""
  return `${address.slice(0, 6)}...${address.slice(-4)}`
}

export function formatDate(timestamp: number): string {
  return new Date(timestamp).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  })
}

export function generateAvatarUrl(address: string): string {
  // Generate a deterministic avatar based on the address
  // This is just for demo purposes - in a real app you might use an avatar service
  return `/placeholder.svg?height=100&width=100&text=${address.slice(0, 2)}`
}

export function formatAmount(amount: string): string {
  return Number.parseFloat(amount).toFixed(4)
}

export function devLog(...args: any[]) {
  if (process.env.NODE_ENV !== "production") {
    // Use console.debug so logs can be filtered easily
    // Prefix with [dev] for easier searching in logs
    // eslint-disable-next-line no-console
    console.debug("[dev]", ...args)
  }
}
