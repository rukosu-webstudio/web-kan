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
  const numericPrice =
    typeof price === "string" ? Number.parseFloat(price) : price;

  if (Number.isNaN(numericPrice)) {
    return "0.00 GTQ";
  }

  const formattedPrice = new Intl.NumberFormat("es-GT", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(numericPrice);

  return `${formattedPrice} GTQ`;
}
