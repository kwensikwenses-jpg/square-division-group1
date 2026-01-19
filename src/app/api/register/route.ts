import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const cookieStore = cookies();
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });
  
  try {
    const { email, password, full_name, role } = await request.json();

    // 1. Sign up the user in Supabase Auth
    // This creates the user in the 'auth' schema (for login)
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
    // This allows Mohammed to query the user for the Map and Search Hub
    if (authData.user) {
      const { error: profileError } = await supabase
        .from('profiles')
        .insert([
          { 
            id: authData.user.id, // Linking to the Auth ID
            full_name: full_name,
            role: role || 'consumer',
            email: email,
            is_verified: false // Defaults to false until Cole approves them
          }
        ]);

      if (profileError) {
        console.error("Database Error:", profileError.message);
        // We don't throw here so the user still gets registered in Auth
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