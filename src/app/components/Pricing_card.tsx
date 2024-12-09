import Image from "next/image";
import image2 from "../../../public/Icons/Vector (2).png";


const Pricing_card = (props: any) => {
    return (
        <>
            <div className={`${props.pt}`}>
                <div className={`w-full ${props.bg} ${props.text} h-[664px] md:w-[327px] py-[50px] px-10 space-y-[35px] place-items-center rounded hover:scale-105 duration-500 cursor-pointer`}>
                    <h2 className=" text-2xl text-center font-bold">{props.name}</h2>
                    <p className="font-bold text-center">Organize across all
                        apps by hand</p>
                    <div className="w-[210px] h-[56px] space-x-[10px] flex">
                        <h2 className="text-4xl text-[#23A6F0] font-bold">{props.price} <sup>$</sup></h2>
                        <p className="text-[#23A6F0] text-sm pt-5">per Month</p>
                    </div>
                    <div className="w-[236px] h-[247px] space-y-[15px]">
                        <div className="w-full h-[32px] space-x-[10px] flex items-center justify-between">
                            <div className="w-[32px] h-[32px] rounded-full flex justify-center items-center bg-[#2DC071]">
                                <Image src={image2} alt="" />
                            </div>
                            <p className="text-sm ">Unlimited product updates
                            </p>
                        </div>
                        <div className="w-full h-[32px] space-x-[10px] flex items-center justify-between">
                            <div className="w-[32px] h-[32px] rounded-full flex justify-center items-center bg-[#2DC071]">
                                <Image src={image2} alt="" />
                            </div>
                            <p className="text-sm ">Unlimited product updates
                            </p>
                        </div>
                        <div className="w-full h-[32px] space-x-[10px] flex items-center justify-between">
                            <div className="w-[32px] h-[32px] rounded-full flex justify-center items-center bg-[#2DC071]">
                                <Image src={image2} alt="" />
                            </div>
                            <p className="text-sm ">Unlimited product updates
                            </p>
                        </div>
                        <div className="w-full h-[32px] space-x-[10px] flex items-center justify-between">
                            <div className="w-[32px] h-[32px] rounded-full flex justify-center items-center bg-[#BDBDBD]">
                                <Image src={image2} alt="" />
                            </div>
                            <p className="text-sm  text-left">1GB  Cloud storage and More

                            </p>
                        </div>
                        <div className="w-full h-[32px] space-x-[10px] flex items-center justify-between">
                            <div className="w-[32px] h-[32px] rounded-full flex justify-center items-center bg-[#BDBDBD]">
                                <Image src={image2} alt="" />
                            </div>
                            <p className="text-sm ">Email and community
                                support

                            </p>
                        </div>

                    </div>
                    <div className="w-[246px] h-[52px] rounded py-[15px] px-10 bg-[#23A6F0] text-white flex justify-center items-center hover:bg-[#2e8fc7] duration-300">
                        <button className="text-sm text-center font-bold">Try For {props.name}</button>

                    </div>

                </div>
            </div>

        </>
    )
}

export default Pricing_card;
