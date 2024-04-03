"use client"
import Link from 'next/link'
import { usePathname } from "next/navigation"
import classesfrom from "./nav-link.module.css"

export default function NavLink({href,children}){
    const path = usePathname();
    return(
        <Link href={href} className={path.startsWith(href)?`${classesfrom.link} ${classesfrom.active}`:classesfrom.link}>{children}</Link>
    )
}