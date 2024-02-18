import type { APIRoute } from 'astro'
export const POST: APIRoute = async ({ request }) => {
  const { email, message, name } = await request.json()
  if (!email || !message || !name) {
    return new Response('Bad request', {
      status: 400,
    })
  }
  return new Response(JSON.stringify({
    name,
    email,
    message
  }), {
    status: 200,
  })
}