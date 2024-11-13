import axios from 'axios';
import { NextResponse } from 'next/server';


export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query');

  try {
    const response = await axios.get(`${process.env.BASE_URL}/search.php`, {
      params: { s: query },
    });
    const meals = response.data.meals || [];
    return  NextResponse(JSON.stringify(meals), { status: 200 });
  } catch (error) {
    console.error('Error fetching recipes by name:', error);
    return NextResponse(
      JSON.stringify({ error: 'Failed to fetch recipes by name' }),
      { status: 500 }
    );
  }
}
