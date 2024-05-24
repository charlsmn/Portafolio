import type { APIRoute } from 'astro'
import { db, Users } from 'astro:db'

export const prerender = false

export const POST: APIRoute = async ({ request }) => {
    try {
        const formData = await request.json()
        await db.insert(Users).values(formData)
        return new Response(JSON.stringify({ success: true }), { status: 200 })
    } catch (error) {
        console.error('Error inserting data:', error)
        return new Response(
            JSON.stringify({ success: false, error: error.message }),
            { status: 500 }
        )
    }
}
