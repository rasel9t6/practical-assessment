import axios from 'axios';

export async function GET() {
  try {
    const response = await axios.get(`${process.env.BASE_URL}/categories.php`);
    const categories = response.data.categories || [];
    return new Response(JSON.stringify(categories), { status: 200 });
  } catch (error) {
    console.error('Error fetching categories:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to fetch categories' }),
      { status: 500 }
    );
  }
}