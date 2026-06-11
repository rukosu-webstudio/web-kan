export interface IProductCard {
  img?: string;
  imgHover?: string;
  gallery?: string[];
  name: string;
  price: number;
  size?: string[];
  slug: string;
  tag?: string;
  color?: string;
}

export interface IProduct {
  name: string;
  slug: string;
  price: number;
  size: string[];

  tag?: string;
  color?: string;

  description?: string;
  moreDetails?: {
    title: string;
    description: string;
  }[];

  img?: string;
  gallery?: string[];
}