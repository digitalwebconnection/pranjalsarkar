export type ClassValue = string | number | boolean | undefined | null;

export interface Product {
  id: string;
  _id?: string;
  name: string;
  category: string;
  brand: string;
  rating: number;
  image: string;
  description: string;
  specifications?: string[];
  isHot?: boolean;
  isRecent?: boolean;
}

export interface OrderItem {
  product?: {
    name?: string;
    brand?: string;
  };
  productName?: string;
  brand?: string;
  quantity: number;
  image?: string;
}

export interface Order {
  _id?: string;
  id?: string;
  orderId?: string;
  customerName?: string;
  customerEmail?: string;
  customerPhone?: string;
  items?: OrderItem[];
  totalQuantity?: number;
  status?: string;
  date?: string;
  createdAt?: string;
}
