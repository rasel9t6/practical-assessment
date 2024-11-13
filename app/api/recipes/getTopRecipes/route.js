import axios from 'axios';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await axios.get(`${process.env.BASE_URL}/filter.php?a=American`);
    const meals = response.data.meals ? response.data.meals.slice(0, 12) : [];
    return NextResponse(JSON.stringify(meals), { status: 200 });
  } catch (error) {
    console.error('Error fetching top recipes:', error);
    return NextResponse(
      JSON.stringify({ error: 'Failed to fetch top recipes' }),
      { status: 500 }
    );
  }
}
