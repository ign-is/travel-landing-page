"use client"
import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"
import { useState } from "react";

const Navbar = () => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    return (
        <nav className="flexBetween max-container padding-container relative z-30 py-5">
            <Link href="/">
                <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} className="w-full h-auto"/>
            </Link>

            <ul className="hidden h-full gap-12 lg:flex">
                {NAV_LINKS.map((link) => (
                    <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
                        {link.label}
                    </Link>
                ))}
            </ul>

            <div className="lg:flexCenter hidden">
                <Button 
                    type="button"
                    title="Login"
                    icon="/user.svg"
                    variant="btn_dark_green"
                />
            </div>

            <div className="lg:hidden z-20">
                <button onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? 
                     <Image 
                        src="/close-icon.png"
                        alt="close"
                        width={32}
                        height={32}
                        className="inline-block cursor-pointer lg:hidden"
                    /> :
                    <Image 
                        src="menu.svg"
                        alt="menu"
                        width={32}
                        height={32}
                        className="inline-block cursor-pointer lg:hidden"
                    /> 
                }
                </button>
            </div>

            {isMobileMenuOpen && (
            <div className="w-60 h-screen pt-20 bg-white lg:hidden absolute top-0 right-0 z-10 flex-1 flex flex-col shadow-2xl">
                    {NAV_LINKS.map((link) => (
                    <Link 
                        href={link.href} 
                        key={link.key} 
                        className="p-4 pl-8 uppercase tracking-tighter text-xl cursor-pointer transition-all hover:font-bold"
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
            )}
        </nav>
    )
}

export default Navbar