import { NextRequest,NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { getDb } from "@/db";
import { products } from "@/db/schema";
import { isAdmin } from "@/app/admin/auth";
export async function PATCH(request:NextRequest,{params}:{params:Promise<{id:string}>}){if(!await isAdmin())return NextResponse.json({error:"Acesso negado."},{status:401});const id=Number((await params).id);if(!Number.isInteger(id)||id<=0)return NextResponse.json({error:"Produto inválido."},{status:400});try{const body=await request.json() as {sold?:boolean};if(body.sold!==true&&body.sold!==false)return NextResponse.json({error:"Estado inválido."},{status:400});await getDb().update(products).set({sold:body.sold}).where(eq(products.id,id));return NextResponse.json({ok:true})}catch(e){console.error(e);return NextResponse.json({error:"Não foi possível atualizar."},{status:500})}}
