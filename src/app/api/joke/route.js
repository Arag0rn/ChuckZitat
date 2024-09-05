import axios from 'axios';

export async function GET() {
  try {
    const response = await axios.get('https://api.chucknorris.io/jokes/random?category=dev');
    const quote = response.data.value;
    return new Response(JSON.stringify({ quote }), { status: 200 });
  } catch (error) {
    console.error('Error fetching joke:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch joke' }), { status: 500 });
  }
}