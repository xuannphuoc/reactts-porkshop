import type { Product } from "../types/products";

export async function getProducts(): Promise<Product[]> {
  const response = await fetch("/data/products.json");

  if (!response.ok) {
    throw new Error("Không thể tải danh sách sản phẩm");
  }

  const data = await response.json();

  return data as Product[];
}
