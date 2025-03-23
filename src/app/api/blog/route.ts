import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch('https://docs.douglaschalegre.com/articles', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
      },
    });
    
    const data = await response.text();
    return new NextResponse(data, {
      headers: {
        'Content-Type': 'text/html',
      },
    });
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return new NextResponse('Error fetching blog posts', { status: 500 });
  }
} 