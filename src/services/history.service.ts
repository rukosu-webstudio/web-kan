import { marked } from "marked";
import type { IHistory } from "@/types/pages-cms";

/**
 * Retrieves the history content from src/content/history.json.
 * Processes special image syntax @public/ path and converts markdown to HTML.
 */
export const getHistoryContent = async (): Promise<string> => {
  try {
    const files = import.meta.glob("../content/history.json", {
      query: "?raw",
      import: "default",
      eager: true,
    });

    const contentString = Object.values(files)[0] as string;
    if (!contentString) {
      return "";
    }

    const history = JSON.parse(contentString) as IHistory;
    let content = history.content;

    if (content) {
      // Replace @public/path/to/img.png with standard markdown image tag and newlines
      // Example: @public/history/history-1.png -> \n\n![Historia](/history/history-1.png)\n\n
      content = content.replace(
        /@public\/(.*?\.(?:png|jpg|jpeg|webp|gif|svg|avif))/g,
        "\n\n![Historia](/$1)\n\n"
      );

      // Convert Markdown to HTML
      return await marked.parse(content);
    }

    return "";
  } catch (error) {
    console.error("Error loading history content:", error);
    return "";
  }
};
