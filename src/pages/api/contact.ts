import type { APIRoute } from 'astro'
export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData()
  const email = formData.get('email')
  const message = formData.get('message')
  const name = formData.get('name')
  if (!email || !message || !name) {
    return new Response('Bad request', {
      status: 400,
    })
  }
  return new Response('OK', {
    status: 200,
  })
}