import axios from 'axios';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await axios.get(`${process.env.BASE_URL}/categories.php`);
    const categories = response.data.categories || [];
    return NextResponse(JSON.stringify(categories), { status: 200 });
  } catch (error) {
    console.error('Error fetching categories:', error);
    return NextResponse(
      JSON.stringify({ error: 'Failed to fetch categories' }),
      { status: 500 }
    );
  }
}
