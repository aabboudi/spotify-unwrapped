import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getFlag(countryCode: string): string {
  if (countryCode?.length !== 2) {
    return "";
  }

  const offset = 0x1F1E6 - 'A'.charCodeAt(0);
  const firstChar = String.fromCodePoint(countryCode.charCodeAt(0) + offset);
  const secondChar = String.fromCodePoint(countryCode.charCodeAt(1) + offset);
  
  return firstChar + secondChar;
}

export function getGreeting(): string {
  const now: number = new Date().getHours();
  if (now > 24) {
    return "";
  }

  switch (true) {
    case (now > 18):
      return "Good evening";
    case (now > 12):
      
    default:
      return "Hello";
  }
}
