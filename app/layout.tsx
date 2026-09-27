import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {title:"Brechó João e Lulu | Catálogo",description:"Peças e achadinhos disponíveis no Brechó João e Lulu.",icons:{icon:"/favicon.svg"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body>{children}</body></html>}
