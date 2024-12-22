import Image from "next/image";
import greater from "../../../../public/Icons/topcoat_next-light.png";
import imaeg1 from "../../../../public/Product_Image/col-md-4.png";
import imaeg2 from "../../../../public/Product_Image/col-md-4 (1).png";
import imaeg3 from "../../../../public/Product_Image/col-md-4 (2).png";
import imaeg4 from "../../../../public/Product_Image/card-item.png";
import imaeg5 from "../../../../public/Product_Image/col-md-4 (3).png";
import imaeg6 from "../../../../public/Icons/icon.png";
import imaeg7 from "../../../../public/Icons/icon (1).png";
import imaeg8 from "../../../../public/Icons/sort.png";
import product_image1 from "../../../../public/Product_Image/product-cover-5.png";
import product_image2 from "../../../../public/Product_Image/product-cover-5 (1).png";
import product_image3 from "../../../../public/Product_Image/product-cover-5 (2).png";
import product_image4 from "../../../../public/Product_Image/product-cover-5 (3).png";
import product_image5 from "../../../../public/Product_Image/fixed-height.png";
import product_image6 from "../../../../public/Product_Image/product-cover-5 (3).png";
import product_image7 from "../../../../public/Product_Image/product-cover-5 (4).png";
import product_image8 from "../../../../public/Product_Image/filter.png";

import Product_Image from "../Product_Image";
import imaeg10 from "../../../../public/Icons/col-md-3.png";
import imaeg11 from "../../../../public/Icons/col-md-3 (1).png";
import imaeg12 from "../../../../public/Icons/col-md-3 (2).png";
import imaeg13 from "../../../../public/Icons/col-md-3 (3).png";
import imaeg14 from "../../../../public/Icons/col-md-3 (4).png";
import imaeg15 from "../../../../public/Icons/col-md-3 (5).png";
import Footer from "../Footer";
import Link from "next/link";
import Top_Navbar from "../Top_Navbar";
import Navbar from "../Navbar";


const page = () => {
    return (
        <>
            <div className="overflow-hidden">
                {/* Top Navbar */}
                <Top_Navbar bg="bg-[#23856D]" textcol="text-white" />

                {/* Navigation */}
                <Navbar />
                {/* Product Section */}

                <div className="w-full h-[202px] md:h-full py-6 md:flex justify-between md:items-center lg:px-[12%] px-[2%]">
                    <div className="w-full h-[80px] md:h-full py-6 md:py-0 text-[#252B42] text-2xl text-center md:text-left font-bold">
                        Shop
                    </div>
                    <div className="w-full h-[44px] md:h-full md:place-content-end flex justify-center items-center">
                        <div className="w-[117px] h-full py-[10px] flex justify-between">
                            <Link href="/">
                                <p className="text-[#252B42] font-bold text-sm">Home</p>
                            </Link>
                            <Image src={greater} alt="greater" height={18} />
                            <p className="text-[#737373] font-bold text-sm">Shop</p>
                        </div>
                    </div>
                </div>
                {/* Card section */}

                <div className="w-full h-full bg-[#FAFAFA] place-items-center  lg:px-[12%] px-[2%] overflow-hidden pb-5 sm:pb-0">
                    <div className="w-[333px] sm:w-full h-full place-items-center sm:py-0 py-6 sm:space-y-0 space-y-[18px] overflow-hidden">
                        <div className="h-full w-full sm:pb-12 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 justify-between gap-5 lg:gap-1">
                            <Image src={imaeg1} alt="" className="w-full h-auto hover:scale-95 duration-500 cursor-pointer" />
                            <Image src={imaeg2} alt="" className="w-full h-auto hover:scale-95 duration-500 cursor-pointer" />
                            <Image src={imaeg3} alt="" className="w-full h-auto hover:scale-95 duration-500 cursor-pointer" />
                            <Image src={imaeg4} alt="" className="w-full h-auto hover:scale-95 duration-500 cursor-pointer" />
                            <Image src={imaeg5} alt="" className="w-full h-auto hover:scale-95 duration-500 cursor-pointer" />
                        </div>
                    </div>
                </div>
                {/* all cards */}
                <div className="w-full h-[216px] md:h-full md:place-items-start place-items-center lg:px-[12%] px-[2%]">
                    <div className="w-[252px] h-[158px] md:w-full md:h-[98px] md:space-y-0 space-y-6 text-sm place-items-center md:flex justify-between ">
                        <p>Show all 12 Results</p>
                        <div className="w-[177px] h-[46px] space-x-[15px] flex justify-around items-center">
                            <p>Views</p>
                            <div className="flex justify-center bg-[#FAFAFA] items-center border-[1px] hover:scale-110 duration-500 cursor-pointer">
                                <Image src={imaeg6} alt="" />
                            </div>
                            <div className="flex justify-center bg-[#FAFAFA] items-center border-[1px] hover:scale-110 duration-500 cursor-pointer">
                                <Image src={imaeg7} alt="" />
                            </div>
                        </div>
                        <Image src={imaeg8} alt="" />
                    </div>
                </div>
                {/* pagination */}
                <div className="w-full h-[1173px] hidden md:block md:h-[175px] md:py-0 py-10 place-items-center md:pt-0 pt-[110px] bg-[#FAFAFA] md:space-y-0 space-y-20 md:flex justify-between 2xl:justify-evenly items-center lg:px-[12%] px-[2%]">
                    <Image src={imaeg10} alt="" className="" />
                    <Image src={imaeg11} alt="" className="" />
                    <Image src={imaeg12} alt="" className="" />
                    <Image src={imaeg13} alt="" className="" />
                    <Image src={imaeg14} alt="" className="" />
                    <Image src={imaeg15} alt="" className="" />
                </div>
                {/* Footer */}
                <div className="hidden md:block">
                    <Footer />
                </div>

                {/* product */}
                <div className="w-full h-full flex justify-center items-center lg:px-[12%] px-[2%]">

                    <div className="h-full w-[328px] md:w-full space-y-[48px] sm:space-y-0 py-20 place-items-center">
                        <div className="w-full h-[2550px] sm:h-full space-y-[30px] sm:space-y-0 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-center justify-between">
                            <Product_Image image={product_image1} />
                            <Product_Image image={product_image2} />
                            <Product_Image image={product_image3} />
                            <Product_Image image={product_image4} />
                        </div>
                        <div className="w-full h-[2550px] sm:h-full space-y-[30px] sm:space-y-0 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-center justify-between">
                            <Product_Image image={product_image5} />
                            <Product_Image image={product_image6} />
                            <Product_Image image={product_image7} />
                            <Product_Image image={product_image8} />
                        </div>
                        <div className="w-full h-full place-items-center place-content-center">
                            <div className="w-[310px] h-[80px] rounded-md  flex justify-between shadow-lg items-center">
                                <div className="text-[#BDBDBD] w-[27%] h-full text-center place-content-center text-base font-bold border-2 rounded-bl-md rounded-tl-md border-[#BDBDBD] cursor-pointer">
                                    First
                                </div>
                                <div className="w-[46%] h-full flex">
                                    <div className="text-[#23A6F0] w-[33.5%] h-full text-center place-content-center text-base font-bold border-2 border-[#BDBDBD] hover:text-white hover:bg-[#23A6F0] duration-300 cursor-pointer">1</div>
                                    <div className="text-white w-[33.5%] h-full text-center place-content-center cursor-pointer text-base font-bold bg-[#23A6F0]">2</div>
                                    <div className="text-[#23A6F0] w-[33.5%] h-full text-center place-content-center text-base cursor-pointer font-bold border-2 border-[#BDBDBD] hover:text-white hover:bg-[#23A6F0] duration-300">3</div>


                                </div>
                                <div className="text-[#23A6F0] w-[27%] h-full text-center place-content-center text-base font-bold border-2 cursor-pointer rounded-br-md rounded-tr-md border-[#BDBDBD]">Next</div>

                            </div>
                        </div>
                    </div>
                </div>
                {/* pagination */}
                <div className="block md:hidden">
                    <div className="w-full h-[1173px] md:h-[175px] md:py-0 py-10 place-items-center md:pt-0 pt-[110px] bg-[#FAFAFA] md:space-y-0 space-y-20 md:flex justify-between items-center lg:px-[12%] px-[2%]">
                        <Image src={imaeg10} alt="" className="" />
                        <Image src={imaeg11} alt="" className="" />
                        <Image src={imaeg12} alt="" className="" />
                        <Image src={imaeg13} alt="" className="" />
                        <Image src={imaeg14} alt="" className="" />
                        <Image src={imaeg15} alt="" className="" />
                    </div>
                </div>
                {/* Footer */}
                <div className="md:hidden block">
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default page;
