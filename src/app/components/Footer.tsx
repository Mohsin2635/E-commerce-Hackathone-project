import Image from "next/image"
import image1 from "../../../public/Icons/Vector (1).png";
import image2 from "../../../public/Icons/instagram.png";
import image3 from "../../../public/Icons/twitter.png";
import Link from "next/link";



const Footer = () => {
    return (
        <>
            <div className="w-full h-[173px] md:h-[58px] bg-[#FAFAFA] py-10 pl-[34px] lg:px-[12%] px-[2%] md:flex justify-between items-center">
                <h2 className="text-2xl font-bold text-[#252B42]">Bandage</h2>
                <div className="w-full md:w-[236px] h-[24px] gap-5 flex mt-7 md:mt-0">
                    <Image src={image1} alt="" className="hover:-translate-y-1 duration-500 cursor-pointer" />
                    <Image src={image2} alt="" className="hover:-translate-y-1 duration-500 cursor-pointer" />
                    <Image src={image3} alt="" className="hover:-translate-y-1 duration-500 cursor-pointer" />
                </div>
            </div>

            <div className="w-full h-[1071px] md:h-[272px] py-[70px] pl-[34px] space-y-[30px] md:space-y-0 lg:px-[12%] px-[2%] md:flex justify-between items-center">
                <div className="w-[148px] h-[170px] space-y-[20px]">
                    <h2 className="text-[#252B42] font-bold">Company Info</h2>
                    <div className="w-full h-[126px] space-y-[10px] text-[#737373] font-bold text-sm">
                        <Link href="/components/About">
                            <p>About Us</p>
                        </Link>
                        <p>Carrier</p>
                        <p>We are hiring</p>
                        <p>Blog</p>
                    </div>
                </div>
                <div className="w-[148px] h-[170px] space-y-[20px]">
                    <h2 className="text-[#252B42] font-bold">Legal</h2>
                    <div className="w-full h-[126px] space-y-[10px] text-[#737373] font-bold text-sm">
                        <Link href="/components/About">
                            <p>About Us</p>
                        </Link>
                        <p>Carrier</p>
                        <p>We are hiring</p>
                        <p>Blog</p>
                    </div>
                </div>
                <div className="w-[148px] h-[170px] space-y-[20px]">
                    <h2 className="text-[#252B42] font-bold">Features</h2>
                    <div className="w-full h-[126px] space-y-[10px] text-[#737373] font-bold text-sm">
                        <p>Business Marketing</p>
                        <p>User Analytic</p>
                        <p>Live Chat</p>
                        <p>Unlimited Support</p>
                    </div>
                </div>
                <div className="w-[148px] h-[170px] space-y-[20px]">
                    <h2 className="text-[#252B42] font-bold">Resources</h2>
                    <div className="w-full h-[126px] space-y-[10px] text-[#737373] font-bold text-sm">
                        <p>IOS & Android</p>
                        <p>Watch a Demo</p>
                        <p>Customers</p>
                        <p>API</p>
                    </div>
                </div>

                <div className="w-[321px] h-[131px] space-y-[20px]">
                    <h2 className="font-bold text-base text-[#252B42]">Get In Touch</h2>
                    <div className="flex border-[1px] border-[#E6E6E6]">
                        <input type="text" placeholder="Your Email" className="rounded-tl-[5px] text-sm px-5 outline-none" />
                        <button className="w-[117px] h-[58px] bg-[#23A6F0] rounded-tr-[5px] text-sm text-center text-white hover:bg-[#3693c9] duration-300">Subscribe</button>
                    </div>

                </div>

            </div>
            <div className="w-full h-[98px] py-[25px] flex justify-center items-center">
                <div className="w-[193px] md:w-full h-[48px]">
                    <p className="text-[#737373] text-sm font-bold text-center">Made With Love By
                        Finland All Right Reserved </p>

                </div>

            </div>


        </>
    )
}

export default Footer
