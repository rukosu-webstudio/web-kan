import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function cls11(...inputs: ClassValue[]) {
  return cn(...inputs);
}

export function joinPath(...paths: string[]) {
  return paths.join("/").replace(/\/+/g, "/");
}

export function getCurrentPath(url: URL, level = 0) {
  const paths = url.pathname.split("/").filter(Boolean);
  return paths[level];
}

export function formatPrice(price: number | string): string {
  const numericPrice = typeof price === "string" ? parseFloat(price) : price;

  if (isNaN(numericPrice)) {
    return "GTQ 0.00";
  }

  return new Intl.NumberFormat("es-GT", {
    style: "currency",
    currency: "GTQ",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(numericPrice);
}
