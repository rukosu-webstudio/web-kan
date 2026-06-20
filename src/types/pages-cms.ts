export interface IProductCard {
  active?: boolean;
  category?: string[];
  color?: string;
  featured?: boolean;
  gallery?: string[];
  img?: string;
  imgHover?: string;
  name: string;
  price: number;
  size?: string[];
  slug: string;
  tag?: string;
}

export interface IProduct {
  active?: boolean;
  category: string;
  color?: string;

  description?: string;

  featured?: boolean;

  gallery?: string[];
  img?: string;
  imgHover?: string;

  moreDetails?: {
    title: string;
    description: string;
  }[];
  name: string;
  price: number;
  size: string[];
  slug: string;

  tag?: string;
}

export interface IHistory {
  content: string;
}

export interface ICovers {
  contact?: string;
  history?: string;
  home?: string;
  men?: string;
  shop?: string;
  women?: string;
}

export interface IGalleryItem {
  image?: string;
  videoUrl?: string;
}

export interface IGallery {
  images: IGalleryItem[];
}

export interface IHero {
  badge?: string;
  isPromo: boolean;
  subtitle?: string;
  title: string;
}
