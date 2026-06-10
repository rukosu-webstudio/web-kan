import { defineCollection, z } from "astro:content";

const productsCollection = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    price: z.number(),
    description: z.string(),
    tag: z.string(),
    img: z.string(),
    gallery: z.array(z.string()),
    size: z.array(z.string()),
  }),
});

export const collections = {
  products: productsCollection,
};
