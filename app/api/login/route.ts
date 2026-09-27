import { NextRequest,NextResponse } from "next/server";
import { adminCookie,checkPassword } from "@/app/admin/auth";
export async function POST(request:NextRequest){const body=await request.json().catch(()=>({})) as {password?:string};if(!checkPassword(body.password||""))return NextResponse.json({error:"Senha incorreta."},{status:401});const response=NextResponse.json({ok:true});response.cookies.set("brecho_admin",await adminCookie(),{httpOnly:true,secure:true,sameSite:"strict",path:"/",maxAge:7*86400});return response}
