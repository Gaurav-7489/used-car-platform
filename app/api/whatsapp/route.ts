import {NextResponse} from 'next/server';
export async function POST(req:Request){const body=await req.json();return NextResponse.json({ok:true,provider:'placeholder',queued:true,message:'Replace this route with an approved WhatsApp Business provider when credentials and consent flow are available.',payload:body})}
