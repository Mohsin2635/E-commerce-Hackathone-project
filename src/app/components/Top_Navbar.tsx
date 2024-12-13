import Image from "next/image";
import icon1 from "../../../public/Icons/icn settings icn-xs.png";
import icon2 from "../../../public/Icons/icn settings icn-xs (1).png";
import logo1 from "../../../public/Icons/logos_twitter.png";
import logo2 from "../../../public/Icons/logos_facebook.png";
import logo3 from "../../../public/Icons/instagram.png";
import logo4 from "../../../public/Icons/logos_linkedin-icon.png";


const Top_Navbar = (props:any) => {
    return (
        <>
            <div className={`w-full h-16 ${props.bg} font-bold ${props.textcol} hidden lg:flex justify-between items-center px-[12%] text-xs`}>
                <div className="w-[370px] flex place-items-center justify-between">
                    <div className="w-40 flex items-center gap-3">
                        <Image src={icon1} alt="" className="w-4 h-4 object-cover" />
                        <h6>(225) 555-0118</h6>
                    </div>
                    <div className="w-[228px] flex items-center gap-3">
                        <Image src={icon2} alt="" className="w-4 h-4 object-cover" />
                        <h6>michelle.rivera@example.com</h6>
                    </div>
                </div>
                <div className="w-[332px] place-items-center">
                    Follow Us  and get a chance to win 80% off
                </div>
                <div className="w-[233px] flex justify-around items-center">
                    <p>Follow Us  :</p>
                    <div className="w-[120px] flex gap-3">
                        <Image src={logo1} alt="" className="w-4 h-4 hover:-translate-y-1 duration-500 cursor-pointer" />
                        <Image src={logo2} alt="" className="w-4 h-4 hover:-translate-y-1 duration-500 cursor-pointer" />
                        <Image src={logo3} alt="" className="w-4 h-4 hover:-translate-y-1 duration-500 cursor-pointer" />
                        <Image src={logo4} alt="" className="w-4 h-4 hover:-translate-y-1 duration-500 cursor-pointer" />

                    </div>

                </div>

            </div>
        </>
    )
}

export default Top_Navbar;
