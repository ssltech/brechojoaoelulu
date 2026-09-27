import { env } from "cloudflare:workers";
import { cookies } from "next/headers";
const encoder=new TextEncoder();
function secret(){return (env as unknown as Record<string,string>).ADMIN_PASSWORD || ""}
async function digest(value:string){const key=await crypto.subtle.importKey("raw",encoder.encode(secret()),{name:"HMAC",hash:"SHA-256"},false,["sign"]);const bytes=new Uint8Array(await crypto.subtle.sign("HMAC",key,encoder.encode(value)));return Array.from(bytes,b=>b.toString(16).padStart(2,"0")).join("")}
export async function isAdmin(){if(!secret())return false;const token=(await cookies()).get("brecho_admin")?.value;if(!token)return false;const [expires,signature]=token.split(".");if(!expires||!signature||Number(expires)<Date.now())return false;return (await digest(expires))===signature}
export async function adminCookie(){const expires=String(Date.now()+7*86400000);return `${expires}.${await digest(expires)}`}
export function checkPassword(value:string){return !!secret()&&value===secret()}
