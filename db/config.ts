import { defineDb, defineTable, column } from 'astro:db'

const Users = defineTable({
    columns: {
        id: column.number({ primaryKey: true }),
        name: column.text(),
        email: column.text(),
        company: column.text(),
        services: column.json(),
        message: column.text(),
    },
})

// https://astro.build/db/config
export default defineDb({
    tables: {
        Users,
    },
})
