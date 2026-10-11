// app/api/players/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

const WARNING_HEADER = { 'X-Usage-Warning': 'This API is for internal use only. Unauthorized access is prohibited.' };

/**
 * APIキーを検証する認証関数
 * @param request - NextRequestオブジェクト
 */
function authenticateRequest(request: NextRequest) {
  const apiKey = request.headers.get('X-API-KEY');
  return apiKey === process.env.NEXT_PUBLIC_API_KEY;
}

function getGoogleAuth() {
  return new google.auth.JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
}