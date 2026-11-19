export type productCategory = "thit-tuoi" | "suon" | "noi-tang";

export interface Product {
  id: string;
  name: string;
  category: productCategory;
  pricePerKg: number;
  stockKg: number;
  image?: string;
}
