import { NextRequest, NextResponse } from 'next/server'

// Simple in-memory storage for demo (replace with database in production)
const submissions: any[] = []

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, message } = body

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Store submission (in production, save to database)
    const submission = {
      id: Date.now(),
      name,
      email,
      company: company || 'N/A',
      message,
      timestamp: new Date().toISOString()
    }
    
    submissions.push(submission)
    
    console.log('[v0] New contact submission:', submission)

    // In production, you would:
    // 1. Save to database
    // 2. Send confirmation email to user
    // 3. Send notification to admin
    // 4. Integrate with CRM/email service

    return NextResponse.json(
      {
        success: true,
        message: 'Your message has been received. We will get back to you soon.',
        id: submission.id
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('[v0] Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Optional: GET endpoint to retrieve submissions (for admin dashboard)
export async function GET(request: NextRequest) {
  // Add authentication in production
  return NextResponse.json({
    total: submissions.length,
    submissions: submissions
  })
}
