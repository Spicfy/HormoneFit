import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.date || !body.time) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }



    return NextResponse.json(
      { message: 'Booking created successfully' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Booking error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
