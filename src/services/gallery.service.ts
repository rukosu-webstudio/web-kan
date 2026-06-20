import type { IGallery } from "@/types/pages-cms";

const PUBLIC_PATH_REGEX = /^(\/)?public/;

/**
 * Retrieves the gallery list of images/videos from src/content/gallery.json.
 * Cleans the paths to be root-relative for Astro (removing "/public" prefix).
 */
// biome-ignore lint/suspicious/useAwait: getGallery returns a Promise to maintain call site compatibility
export const getGallery = async (): Promise<string[]> => {
  try {
    const files = import.meta.glob("../content/gallery.json", {
      query: "?raw",
      import: "default",
      eager: true,
    });

    const contentString = Object.values(files)[0] as string;
    if (!contentString) {
      return [];
    }

    const gallery = JSON.parse(contentString) as IGallery;
    if (!(gallery && Array.isArray(gallery.images))) {
      return [];
    }

    return gallery.images
      .map((item) => {
        const path = item.videoUrl || item.image;
        if (!path) {
          return "";
        }
        let cleaned = path.replace(PUBLIC_PATH_REGEX, "");
        if (!(cleaned.startsWith("/") || cleaned.startsWith("http"))) {
          cleaned = `/${cleaned}`;
        }
        return cleaned;
      })
      .filter(Boolean);
  } catch (error) {
    console.error("Error loading gallery:", error);
    return [];
  }
};
