import axios from 'axios';
import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  try {
    const response = await axios.get(`${process.env.BASE_URL}/lookup.php`, {
      params: { i: id },
    });
    const meal = response.data.meals ? response.data.meals[0] : null;
    return NextResponse(JSON.stringify(meal), { status: 200 });
  } catch (error) {
    console.error('Error fetching recipe details:', error);
    return NextResponse(
      JSON.stringify({ error: 'Failed to fetch recipe details' }),
      { status: 500 }
    );
  }
}
