import { z, defineCollection } from 'astro:content'

const worksCollection = defineCollection({
    type: 'content',
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            pubDate: z.date(),
            description: z.string(),
            category: z.array(z.string()),
            image: z.object({
                url: image(),
                alt: z.string(),
            }),
        }),
})

export const collections = {
    works: worksCollection,
}
