import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const data = await request.json();
    const { parentName, email, phone, studentName, academicYear, subjects, totalPrice } = data;

    // Optional: Get list ID from environment variables and convert to a number if present
    const listId = process.env.BREVO_LIST_ID ? Number(process.env.BREVO_LIST_ID) : null;

    const payload = {
      email: email,
      attributes: {
        FIRSTNAME: parentName || '',
        PHONE: phone || '',
        STUDENT_NAME: studentName || '',
        ACADEMIC_YEAR: academicYear || '',
        SUBJECTS: Array.isArray(subjects) ? subjects.join(', ') : '',
        TOTAL_PRICE: totalPrice || 0,
      },
      updateEnabled: true,
    };

    // Include listIds only if the environment variable is configured
    if (listId) {
      payload.listIds = [listId];
    }

    // Send data to Brevo Contacts API
    const brevoResponse = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': process.env.BREVO_API_KEY,
      },
      body: JSON.stringify(payload),
    });

    if (!brevoResponse.ok) {
      const errorData = await brevoResponse.json();
      console.error('Brevo API Error:', errorData);
      return NextResponse.json({ success: false, error: errorData.message || 'Failed to sync with Brevo' }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Server Error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}