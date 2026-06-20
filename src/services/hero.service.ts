import { marked } from "marked";
import type { IHero } from "@/types/pages-cms";

const DEFAULTS: IHero = {
  isPromo: false,
  badge: "PROMO",
  title: "LA CONSTANCIA SUPERA LA MOTIVACIÓN",
  content: "",
};

/**
 * Retrieves the hero configuration from src/content/hero.json.
 */
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

    const hero = JSON.parse(contentString) as IHero;
    const parsedContent = hero.content ? await marked.parse(hero.content) : "";

    return {
      ...hero,
      content: parsedContent,
    };
  } catch (error) {
    console.error("Error loading hero config:", error);
    return DEFAULTS;
  }
};
