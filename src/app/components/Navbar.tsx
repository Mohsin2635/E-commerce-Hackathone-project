"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import search from "../../../public/Icons/vector.png";
import cart from "../../../public/Icons/icn shopping-cart .icn-xs.png";
import heart from "../../../public/Icons/Wishlist.png";

const Navbar = () => {

    const val = usePathname();

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            {/* Navigatiom */}
            <div className="w-full bg-transparent h-16 flex justify-between items-center lg:px-[12%] px-[2%]">


                <Link href="/"><h3 className="text-[24px] w-[187px] leading-[32px] font-bold cursor-pointer">Bandage</h3>
                </Link>

                <div className="flex justify-between items-center md:w-[815px] lg:ml-6 gap-10">

                    <ul className="hidden md:flex h-full items-center text-[#737373] font-bold text-sm gap-10 ">
                        <li>
                            <Link href="/" className={val === "/" ? "border-b-4 border-[#4c9eb3] text-[#737373]" : ""}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/components/About" className={val === "/components/About" ? "border-b-4 border-[#4c9eb3] text-[#737373]" : ""} >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/components/Product" className={val === "/components/Product" ? "border-b-4 border-[#4c9eb3] text-[#737373]" : ""} >
                                Products
                            </Link>
                        </li>

                        <li>
                            <Link href="/components/Pricing" className={val === "/components/Pricing" ? "border-b-4 border-[#4c9eb3] text-[#737373]" : ""} >
                                Pricing
                            </Link>
                        </li>
                        <li>
                            <Link href="/components/Contact" className={val === "/components/Contact" ? "border-b-4 border-[#4c9eb3] text-[#737373]" : ""} >
                                Contact
                            </Link>
                        </li>

                    </ul>
                    <div className="w-full h-full text-sm font-bold hidden md:flex items-center px-5 justify-between">
                        <p className="text-[#23A6F0] cursor-pointer">Login / Register</p>
                        <div className=" flex items-center cursor-pointer gap-5 ">
                            <Image src={search} alt="search" className="w-6 h-6 object-fill hover:scale-95 duration-300" />
                            <Image src={cart} alt="cart" className="w-6 h-6 hover:scale-95 object-fill duration-300" />
                            <Image src={heart} alt="Heart" className="w-7 h-7 object-fill hover:scale-95 duration-300" />
                        </div>

                    </div>
                </div>
                <div className="flex gap-5 items-center ">
                    <div className="flex md:hidden items-center cursor-pointer gap-5 ">
                        <Image src={search} alt="search" className="w-6 h-6 object-fill" />
                        <Image src={cart} alt="cart" className="w-6 h-6 object-fill" />
                    </div>


                    <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:hidden cursor-pointer"
                        onClick={toggleSidebar}>
                        <path d="M0.571533 0H23.4287V2.28571H0.571533V0ZM6.28582 5.71429H23.4287V8H6.28582V5.71429ZM13.4287 11.4286H23.4287V13.7143H13.4287V11.4286Z" fill="#252B42" />
                    </svg>
                </div>


            </div>
            

            {isSidebarOpen && (

                <div className="w-full h-[532px] bg-white relative top-[0px] z-50 transition-transform duration-300 ease-in-out">
                    <div className="w-full h-screen " onClick={toggleSidebar}>

                        <ul className="flex flex-col w-full text-[#737373] text-[30px] justify-center items-center py-24 space-y-[30px] font-bold">
                            <li>
                                <Link href="/" className={val === "/" ? "border-b-4 border-[#737373] text-[#4c9eb3] " : ""} onClick={toggleSidebar}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/components/About" className={val === "/components/About" ? "border-b-4 border-[#737373] text-[#4c9eb3]" : ""} onClick={toggleSidebar}>
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/components/Product" className={val === "/components/Product" ? "border-b-4 border-[#737373] text-[#4c9eb3] " : ""} onClick={toggleSidebar}>
                                    Products
                                </Link>
                            </li>

                            <li>
                                <Link href="/components/Pricing" className={val === "/components/Pricing" ? "border-b-4 border-[#737373] text-[#4c9eb3] " : ""} onClick={toggleSidebar}>
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link href="/components/Contact" className={val === "/components/Contact" ? "border-b-4 border-[#737373] text-[#4c9eb3] " : ""} onClick={toggleSidebar}>
                                    Contact
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
            )}

        </>
    );
};

export default Navbar;
