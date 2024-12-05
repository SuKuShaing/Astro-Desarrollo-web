import { defineCollection, z } from "astro:content";

const product = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        heroImage: z.string(),
        price: z.coerce.number(),
        category: z.string(),
    })
})

const blog = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        author: z.string(),
        pubDate: z.coerce.date(),
        article: z.string(),
        category: z.string(),
    }),
});

export const collections = { product, blog };