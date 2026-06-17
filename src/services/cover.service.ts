import type { ICovers } from "@/types/pages-cms";

const DEFAULTS = {
  home: "/default/hero.webp",
  history: "/default/history-bg.webp",
  shop: "/default/shop-bg.webp",
  contact: "/default/contact-bg.webp",
  women: "/default/women-banner.png",
  men: "/default/men-banner.png",
};

/**
 * Retrieves the cover images from src/content/covers.json.
 * Falls back to default images if not defined.
 */
export const getCovers = async (): Promise<Required<ICovers>> => {
  try {
    const files = import.meta.glob("../content/covers.json", {
      query: "?raw",
      import: "default",
      eager: true,
    });

    const contentString = Object.values(files)[0] as string;
    if (!contentString) return DEFAULTS;

    const covers = JSON.parse(contentString) as ICovers;

    const cleanPath = (path?: string) => {
      if (!path) return null;
      return path.replace(/^(\/)?public/, "");
    };

    return {
      home: cleanPath(covers.home) || DEFAULTS.home,
      history: cleanPath(covers.history) || DEFAULTS.history,
      shop: cleanPath(covers.shop) || DEFAULTS.shop,
      contact: cleanPath(covers.contact) || DEFAULTS.contact,
      women: cleanPath(covers.women) || DEFAULTS.women,
      men: cleanPath(covers.men) || DEFAULTS.men,
    };
  } catch (error) {
    console.error("Error loading covers:", error);
    return DEFAULTS;
  }
};
