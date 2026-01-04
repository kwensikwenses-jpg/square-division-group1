// src/app/api/verify/recovery/route.ts
import { NextResponse } from 'next/server';
import { RECOVERY_EMAIL_TEMPLATE } from '@/utils/emailTemplates';

export async function POST(request: Request) {
  const { email } = await request.json();

  // 1. Generate your secure override URL (e.g., a Supabase password reset link)
  const overrideUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/business/reset-password`;

  // 2. Logic to send the email via your provider (Resend example)
  // const { data, error } = await resend.emails.send({
  //   from: 'security@kaidemo.com',
  //   to: email,
  //   subject: 'PROTOCOL: NODE LOCKDOWN',
  //   html: RECOVERY_EMAIL_TEMPLATE(overrideUrl),
  // });

  return NextResponse.json({ status: 'Recovery Packet Dispatched' });
}