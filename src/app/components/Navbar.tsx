"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import search from "../../../public/Icons/vector.png";
import cart from "../../../public/Icons/icn shopping-cart .icn-xs.png";
import heart from "../../../public/Icons/Wishlist.png";

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [menu, setmenu] = useState('Home');

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <div className="w-full bg-transparent h-20 flex justify-between items-center md:px-[12%]">


                <Link href="/"><h3 className="text-[24px] w-[187px] leading-[32px] font-bold cursor-pointer">Bandage</h3>
                </Link>

                <div className="flex justify-between items-center md:w-[815px] md:ml-6">

                    <ul className="hidden md:flex h-full items-center text-[#737373] font-semibold text-sm space-x-5 lg:space-x-10 ">
                        <li>
                            <Link href="/" className={menu === "Home" ? "border-b-4 border-[#4c9eb3] text-[#737373]" : ""} onClick={() => setmenu('Home')}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/components/Product" className={menu === "Products" ? "border-b-4 border-[#4c9eb3] text-[#737373]" : ""} onClick={() => setmenu('Products')}>
                                Products
                            </Link>
                        </li>

                        <li>
                            <Link href="/components/Pricing" className={menu === "Pricing" ? "border-b-4 border-[#4c9eb3] text-[#737373]" : ""} onClick={() => setmenu('Pricing')}>
                                Pricing
                            </Link>
                        </li>
                        <li>
                            <Link href="/components/Contact" className={menu === "Contact" ? "border-b-4 border-[#4c9eb3] text-[#737373]" : ""} onClick={() => setmenu('Contact')}>
                                Contact
                            </Link>
                        </li>

                    </ul>
                    <div className="w-[324px] h-full space-x-[45px] text-sm font-bold hidden md:flex justify-between items-center  px-5">
                        <p className="text-[#23A6F0] cursor-pointer">Login / Register</p>
                        <div className="flex items-center cursor-pointer gap-5 ">
                            <Image src={search} alt="search" className="w-6 h-6 object-fill hover:scale-95 duration-300" />
                            <Image src={cart} alt="cart" className="hover:scale-95 duration-300" />
                            <Image src={heart} alt="Heart" className="hover:scale-95 duration-300"/>
                        </div>

                    </div>
                </div>
                <div className="flex gap-5 items-center ">
                    <div className="flex md:hidden items-center cursor-pointer gap-5 ">
                        <Image src={search} alt="search" className="w-6 h-6 object-fill" />
                        <Image src={cart} alt="cart" />
                    </div>


                    <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:hidden cursor-pointer"
                        onClick={toggleSidebar}>
                        <path d="M0.571533 0H23.4287V2.28571H0.571533V0ZM6.28582 5.71429H23.4287V8H6.28582V5.71429ZM13.4287 11.4286H23.4287V13.7143H13.4287V11.4286Z" fill="#252B42" />
                    </svg>
                </div>


            </div>

            {isSidebarOpen && (

                <div className="w-full h-[532px] bg-white fixed top-[82px] bottom-0 right-0 z-50 transition-transform duration-300 ease-in-out">
                    <div className="w-full h-screen" onClick={toggleSidebar}>
                        <ul className="flex flex-col w-full text-[#737373] text-[30px] justify-center items-center py-24 space-y-[30px] font-bold">
                            <li>
                                <Link href="/" className="active:text-[#737373]" onClick={toggleSidebar}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/components/Product" className="active:text-[#737373]" onClick={toggleSidebar}>
                                    Products
                                </Link>
                            </li>
                            <li>
                                <Link href="/components/Pricing" className="active:text-[#737373]" onClick={toggleSidebar}>
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link href="/components/Contact" className="active:text-[#737373]" onClick={toggleSidebar}>
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
