import type { APIRoute } from 'astro'
import { sql } from "@vercel/postgres";
import { createContact } from '@/utils/Shema';

export const POST: APIRoute = async ({ request }) => {
  const { email, message, name } = await request.json()
  const { name: nameValid, email: emailValid, message: messageValid } = createContact.parse({ name, email, message });
  if (!nameValid || !emailValid || !messageValid) {
    return new Response('Bad request', {
      status: 400,
    })
  }
  await sql`INSERT INTO customers (name, email, message) VALUES (${nameValid}, ${emailValid}, ${messageValid});`;
  const result = await sql`SELECT * FROM customers;`;
  console.log(result.rows);
  return new Response(JSON.stringify({
    name,
    email,
    message
  }), {
    status: 200,
  })
}