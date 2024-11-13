import axios from 'axios';


export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');

  try {
    const response = await axios.get(`${process.env.BASE_URL}/filter.php`, {
      params: { c: category },
    });
    const meals = response.data.meals || [];
    return new Response(JSON.stringify(meals), { status: 200 });
  } catch (error) {
    console.error('Error filtering recipes by category:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to filter recipes by category' }),
      { status: 500 }
    );
  }
}
