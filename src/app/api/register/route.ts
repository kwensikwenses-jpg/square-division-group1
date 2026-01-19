import { createClient } from '@/utils/supabase/server';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  // Use the modern SSR client to handle cookies and auth correctly
  const supabase = await createClient();
  
  try {
    const { email, password, full_name, role } = await request.json();

    // 1. Sign up the user in Supabase Auth
    // This creates the user in the internal 'auth' schema
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: full_name,
          role: role || 'consumer', 
        },
      },
    });

    if (authError) throw authError;

    // 2. Insert into the public 'profiles' table
    // This links the Auth user to the platform data for Search and Mapping
    if (authData.user) {
      const { error: profileError } = await supabase
        .from('profiles')
        .insert([
          { 
            id: authData.user.id, // Linking to the Auth ID
            full_name: full_name,
            role: role || 'consumer',
            email: email,
            is_verified: false // Defaults to false until Cole approves the business
          }
        ]);

      if (profileError) {
        console.error("Database Error:", profileError.message);
        // We log the error but don't stop the process so the user is still registered
      }
    }

    return NextResponse.json(
      { message: 'Registration successful! Please check your email.', user: authData.user }, 
      { status: 200 }
    );

  } catch (error: any) {
    console.error("Registration Error:", error.message);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}