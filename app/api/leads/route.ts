import {NextResponse} from 'next/server';
export async function POST(req:Request){const body=await req.json();return NextResponse.json({ok:true,lead:{id:`LD-${Date.now().toString().slice(-6)}`,...body,status:'New',createdAt:new Date().toISOString()},message:'MVP placeholder: persist this payload in Supabase/Postgres in production.'},{status:201})}
