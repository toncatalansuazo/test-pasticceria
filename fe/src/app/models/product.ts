export interface Product {
  id?: number;
  name: string;
  img: string;
  price: number;
  salePrice?: number;
  createdAt: number;
  stock: number;
  expired: boolean;
  ingredients: Ingredient[];
}

export interface Ingredient {
  id?: number;
  name: string;
}
