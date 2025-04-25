import { defineCollection, z } from "astro:content";

export const collections = {
  "articles": defineCollection({
    type: "content",
    schema: z.object({
      title: z.string().min(1, { message: "Title is required!" }).trim(),
      description: z.string().min(1, { message: "Description is required!" }).trim(),
      tags: z.array(z.string()),
      date: z.coerce.date(),
      reading_time: z.number().int().positive().min(1, { message: "Reading time is required!" }),
      thumbnail: z.string().trim(),
    }),
  }),
};