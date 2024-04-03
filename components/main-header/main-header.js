import Link from "next/link"
import Image from "next/image"
import logo from "@/assets/logo.png"
import classesfrom from "./main-header.module.css"
import MainHeaderBackground from "./main-header-background"
import NavLink from "./nav-link"
export default function MainHeader(){
    return(
        <>
        <MainHeaderBackground />
        <header className={classesfrom.header}>
            <Link className={classesfrom.logo} href="/">
                <Image priority src={logo} alt="logo" width={100} height={100} />
                NextLevel Food
            </Link>
            <nav className={classesfrom.nav}>
                <ul>
                    <li>
                        <NavLink href="/meals">Browse Meals</NavLink>
                    </li>
                    <li>
                        <NavLink href="/community">Community</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
        </>
    )
}