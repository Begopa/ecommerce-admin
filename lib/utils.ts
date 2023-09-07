import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatterForUSD = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const formatterForKRW = new Intl.NumberFormat("ko-KR", {
  style: "currency",
  currency: "KRW",
});
