// https://astro.build/db/config
import { defineDb, defineTable, column } from 'astro:db'

const Users = defineTable({
    columns: {
        id: column.number({ primaryKey: true }),
        name: column.text(),
        email: column.text(),
        company: column.text(),
        message: column.text(),
    },
})

export default defineDb({
    tables: {
        Users,
    },
})
