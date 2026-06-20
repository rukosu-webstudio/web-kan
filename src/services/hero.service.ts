import type { IHero } from "@/types/pages-cms";

const DEFAULTS: IHero = {
  isPromo: false,
  badge: "PROMO",
  title: "LA CONSTANCIA SUPERA LA MOTIVACIÓN",
  subtitle: "",
  buttonLabel: "Nuestra galería",
  buttonUrl: "/#gallery",
};

/**
 * Retrieves the hero configuration from src/content/hero.json.
 */
// biome-ignore lint/suspicious/useAwait: getHero returns a Promise to maintain call site compatibility
export const getHero = async (): Promise<IHero> => {
  try {
    const files = import.meta.glob("../content/hero.json", {
      query: "?raw",
      import: "default",
      eager: true,
    });

    const contentString = Object.values(files)[0] as string;
    if (!contentString) {
      return DEFAULTS;
    }

    return JSON.parse(contentString) as IHero;
  } catch (error) {
    console.error("Error loading hero config:", error);
    return DEFAULTS;
  }
};
