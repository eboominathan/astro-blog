import { defineCollection, z } from "astro:content";
const bigCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    author: z.string(),
    image: z.date(),
    tags: z.array(z.string()),
  }),
});

export const Collections = {
  blog: bigCollection,
};
