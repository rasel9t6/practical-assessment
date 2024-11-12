import axios from 'axios';

export async function GET() {
  try {
    const response = await axios.get(`${process.env.BASE_URL}/filter.php?a=American`);
    const meals = response.data.meals ? response.data.meals.slice(0, 12) : [];
    return new Response(JSON.stringify(meals), { status: 200 });
  } catch (error) {
    console.error('Error fetching top recipes:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to fetch top recipes' }),
      { status: 500 }
    );
  }
}
