import axios from 'axios';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const area = searchParams.get('area');

  try {
    const response = await axios.get(`${process.env.BASE_URL}/filter.php`, {
      params: { a: area },
    });
    const meals = response.data.meals || [];
    return new Response(JSON.stringify(meals), { status: 200 });
  } catch (error) {
    console.error('Error filtering recipes by area:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to filter recipes by area' }),
      { status: 500 }
    );
  }
}
