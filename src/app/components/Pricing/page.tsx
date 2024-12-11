import Image from "next/image";
import greater from "../../../../public/Icons/topcoat_next-light.png";
import image1 from "../../../../public/Icons/switch.png";
import Pricing_card from "../Pricing_card";
import imaeg10 from "../../../../public/Icons/col-md-3.png";
import imaeg11 from "../../../../public/Icons/col-md-3 (1).png";
import imaeg12 from "../../../../public/Icons/col-md-3 (2).png";
import imaeg13 from "../../../../public/Icons/col-md-3 (3).png";
import imaeg14 from "../../../../public/Icons/col-md-3 (4).png";
import imaeg15 from "../../../../public/Icons/col-md-3 (5).png";
import logo1 from "../../../../public/Icons/logos_twitter.png";
import logo2 from "../../../../public/Icons/logos_facebook.png";
import logo3 from "../../../../public/Icons/Vector (4).png";
import logo4 from "../../../../public/Icons/logos_linkedin-icon.png";
import Footer from "../Footer";




const page = () => {
    return (
        <>
            <div className="overflow-hidden">
            <div className="w-full h-[202px] py-6 space-y-5">
                <div className="w-full h-[80px] py-6 text-[#252B42] text-2xl text-center font-bold md:text-5xl">
                    Simple Pricing
                </div>
                <div className="w-full h-[44px] flex justify-center items-center">
                    <div className="w-[117px] h-full py-[10px] flex justify-between">
                        <p className="text-[#252B42] font-bold text-sm">Home</p>
                        <Image src={greater} alt="greater" height={18} />
                        <p className="text-[#737373] font-bold text-sm">Pricing</p>
                    </div>
                </div>
            </div>
            <div className="w-full h-[2451px] md:h-full bg-[#FAFAFA] place-items-center md:place-items-start md:px-[12%]">
                <div className="w-[330px] md:w-full h-full py-[45px] space-y-[48px] place-items-center">
                    <div className="w-[310px] h-[140px] place-items-center space-y-[10px]">
                        <h2 className="text-[#252B42] font-bold text-5xl">Pricing</h2>
                        <p className="w-[262px] md:w-[469px] md:h-full h-[82px] text-sm text-center">Problems trying to resolve
                            the conflict between the two major
                            realms of Classical physics:
                            Newtonian mechanics </p>
                    </div>
                    <div className="w-[311px] h-[44px] space-x-[16px] flex justify-between items-center">
                        <div className="w-[186px] text-[#252B42] font-bold flex justify-between">
                            <h5>Monthly</h5>
                            <div className="w-[45px] h-[25px] border-[1px] border-[#23A6F0] rounded-2xl font-bold flex justify-between items-center px-[2px] cursor-pointer">
                                <div className="w-[19px] h-[19px] rounded-full bg-[#EBEBEB] border-[1px] border-[#D0D0D0]"></div>
                                
                            </div>
                            <h5>Yearly</h5>
                        </div>
                        <div className="w-[109px] h-[44px] rounded-[37px] bg-[#B2E3FF] py-[10px] px-[20px]">
                            <h6 className="Save 25% w-full text-sm text-[#23A6F0]">Save 25%</h6>

                        </div>

                    </div>

                    <div className="h-[2112px] md:h-full w-full space-y-[30px] md:space-y-0 md:flex justify-between">
                        <Pricing_card bg="bg-white" name="FREE" price="0" text="text-[#252B42]" pt="md:pt-8" />
                        <Pricing_card bg="bg-[#252B42]" name="STANDARD" price="9.99" text="text-white" />
                        <Pricing_card bg="bg-white" name="PREMIUM" price="19.99" text="text-[#252B42]" pt="md:pt-8" />
                    </div>
                </div>
            </div>
            <div className="w-full h-[1173px] md:h-[175px] md:py-0 py-10 place-items-center md:pt-0 pt-[110px] bg-[#FAFAFA] md:space-y-0 space-y-20 md:flex justify-between items-center md:px-[12%]">
                <Image src={imaeg10} alt="" className="" />
                <Image src={imaeg11} alt="" className="" />
                <Image src={imaeg12} alt="" className="" />
                <Image src={imaeg13} alt="" className="" />
                <Image src={imaeg14} alt="" className="" />
                <Image src={imaeg15} alt="" className="" />
            </div>

            <div className="w-full h-[1849px] md:h-[1037px] bg-white py-[80px] space-y-[80px] place-items-center md:px-[12%]">
                <div className="w-full h-[125px] place-items-center text-[#252B42] font-bold">
                    <h2 className="text-[40px] space-y-[15px]">Pricing FAQs</h2>
                    <p className="w-[280px] md:w-[400px] h-[60px] text-sm text-center">Problems trying to resolve the conflict between
                        the two major realms of Classical physics</p>
                </div>
                <div className="w-[362px] h-[1344px] md:w-full md:h-[537px] space-y-[10px] md:flex flex-wrap justify-between ">
                    <div className="w-full h-[220px] md:w-[491px] md:h-[159px] md:mb-10 py-4 px-4 md:px-10">
                        <h2 className="text-[#252B42] font-bold">Work better together</h2>
                        <p className="text-[#737373] text-sm py-10 w-[313px] md:w-[408px] ">Met minim Mollie non desert
                            Alamo est sit cliquey dolor do met sent.
                            RELIT official consequent door ENIM RELIT
                            Mollie. Excitation venial consequent
                            sent nostrum met.</p>

                    </div>
                    <div className="w-full h-[220px] md:w-[491px] md:h-[159px] md:mb-10 py-4 px-4 md:px-10">
                        <h2 className="text-[#252B42] font-bold">OpenType features and
                            Variable fonts</h2>
                        <p className="text-[#737373] text-sm py-10 w-[313px] md:w-[408px]">Met minim Mollie non desert
                            Alamo est sit cliquey dolor do met sent.
                            RELIT official consequent door ENIM RELIT
                            Mollie. Excitation venial consequent
                            sent nostrum met.</p>

                    </div>
                    <div className="w-full h-[220px] md:w-[491px] md:h-[159px] md:mb-10 py-4 px-4 md:px-10">
                        <h2 className="text-[#252B42] font-bold">Start working faster today</h2>
                        <p className="text-[#737373] text-sm py-10 w-[313px] md:w-[408px]">Met minim Mollie non desert
                            Alamo est sit cliquey dolor do met sent.
                            RELIT official consequent door ENIM RELIT
                            Mollie. Excitation venial consequent
                            sent nostrum met.</p>

                    </div>
                    <div className="w-full h-[220px] md:w-[491px] md:h-[159px] md:mb-10 py-4 px-4 md:px-10">
                        <h2 className="text-[#252B42] font-bold">Work at the speed of thought.</h2>
                        <p className="text-[#737373] text-sm py-10 w-[313px] md:w-[408px]">Met minim Mollie non desert
                            Alamo est sit cliquey dolor do met sent.
                            RELIT official consequent door ENIM RELIT
                            Mollie. Excitation venial consequent
                            sent nostrum met.</p>

                    </div>
                    <div className="w-full h-[220px] md:w-[491px] md:h-[159px] md:mb-10 py-4 px-4 md:px-10">
                        <h2 className="text-[#252B42] font-bold">The Fastest way to organize</h2>
                        <p className="text-[#737373] text-sm py-10 w-[313px] md:w-[408px]">Met minim Mollie non desert
                            Alamo est sit cliquey dolor do met sent.
                            RELIT official consequent door ENIM RELIT
                            Mollie. Excitation venial consequent
                            sent nostrum met.</p>

                    </div>
                    <div className="w-full h-[220px] md:w-[491px] md:h-[159px] md:mb-10 py-4 px-4 md:px-10">
                        <h2 className="text-[#252B42] font-bold">The Fastest way to navigate</h2>
                        <p className="text-[#737373] text-sm py-10 w-[313px] md:w-[408px]">Met minim Mollie non desert
                            Alamo est sit cliquey dolor do met sent.
                            RELIT official consequent door ENIM RELIT
                            Mollie. Excitation venial consequent
                            sent nostrum met.</p>

                    </div>
                    <div className="w-full h-[60px] md:py-14 flex justify-center items-center place-items-center">
                        <p className="w-[287px] md:w-full h-[60px] text-xl text-center text-[#737373]">Haven’t got your answer? Contact our support</p>
                    </div>

                </div>
            </div>
            <div className="w-full h-[586px] md:h-full py-[112px] space-y-[96px] place-items-center">
                <div className="w-[332px] md:w-full h-[352px] md:h-full space-y-[36px] place-items-center">
                    <h2 className="w-full h-[100px] md:h-[50px] text-[#252B42] text-[40px] font-bold text-center leading-[50px]">Start your
                        14 days free trial</h2>
                    <p className="w-full h-[60px] md:w-[411px] md:h-[40px] text-[#737373] text-sm text-center">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent.</p>
                    <button className="w-[186px] h-[52px] bg-[#23A6F0] py-[15px] px-10 text-sm text-white font-bold rounded hover:bg-[#2e8fc7] duration-300">Try It Free Now</button>
                    <div className="w-[242px] h-[50px] p-[10px] space-x-[34px] flex">
                        <Image src={logo1} alt="" className="hover:-translate-y-1 duration-300 cursor-pointer" />
                        <Image src={logo2} alt="" className="hover:-translate-y-1 duration-300 cursor-pointer" />
                        <Image src={logo3} alt="" className="hover:-translate-y-1 duration-300 cursor-pointer" />
                        <Image src={logo4} alt="" className="hover:-translate-y-1 duration-300 cursor-pointer" />

                    </div>

                </div>

            </div>
            {/* footer */}
            <div>
                <Footer />
            </div>
</div>
        </>
    )
}

export default page
