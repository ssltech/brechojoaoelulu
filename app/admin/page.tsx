import { desc } from "drizzle-orm";
import { getDb } from "@/db";
import { products } from "@/db/schema";
import { isAdmin } from "./auth";
import AdminClient from "./ui";
export const dynamic="force-dynamic";
export default async function Admin(){const authorized=await isAdmin();let items:typeof products.$inferSelect[]=[];let error=false;if(authorized)try{items=await getDb().select().from(products).orderBy(desc(products.id))}catch(e){console.error(e);error=true}return <AdminClient authorized={authorized} initialItems={items} loadError={error}/>}
