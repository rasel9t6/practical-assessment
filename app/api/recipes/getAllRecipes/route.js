import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET() {
  try {
    const response = await axios.get(`${process.env.BASE_URL}/filter.php?a=American`);
    return NextResponse.json(response.data.meals || []);
  } catch (error) {
    console.error('Error fetching all recipes:', error);
    return NextResponse.json(
      { error: 'Failed to fetch recipes' },
      { status: 500 }
    );
  }
}
