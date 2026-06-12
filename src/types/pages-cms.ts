export interface IProductCard {
  img?: string;
  imgHover?: string;
  gallery?: string[];
  name: string;
  price: number;
  size?: string[];
  slug: string;
  tag?: string;
  category?: string;
  color?: string;
  featured?: boolean;
  active?: boolean;
}

export interface IProduct {
  name: string;
  slug: string;
  price: number;
  size: string[];

  tag?: string;
  category?: string;
  color?: string;

  featured?: boolean;
  active?: boolean;

  description?: string;
  moreDetails?: {
    title: string;
    description: string;
  }[];

  img?: string;
  gallery?: string[];
  }

  export interface IHistory {
    content: string;
  }

  export interface ICovers {
    home?: string;
    history?: string;
    shop?: string;
    contact?: string;
  }