import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getProficiencyColor(level: string): string {
  switch (level) {
    case "ADVANCED":
      return "text-primary";
    case "PROFICIENT":
      return "text-blue-400";
    case "WORKING KNOWLEDGE":
      return "text-secondary";
    default:
      return "text-textSecondary";
  }
}

export function getProficiencyBadge(level: string): string {
  switch (level) {
    case "ADVANCED":
      return "bg-primary/10 text-primary border-primary/20";
    case "PROFICIENT":
      return "bg-blue-400/10 text-blue-400 border-blue-400/20";
    case "WORKING KNOWLEDGE":
      return "bg-secondary/10 text-secondary border-secondary/20";
    default:
      return "bg-surfaceLight text-textSecondary border-surface";
  }
}
