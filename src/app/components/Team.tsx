import Image from "next/image";
import image1 from "../../../public/Icons/logos_facebook.png";
import image2 from "../../../public/Icons/instagram.png";
import image3 from "../../../public/Icons/logos_twitter.png";


const Team = (props: any) => {
    return (
        <>
            <div className="w-[316px] sm:w-[400px] xl:w-[316px] h-full place-items-center hover:-translate-y-1 duration-500 cursor-pointer">
                <div className="w-full h-[231px] sm:h-[300px] xl:h-[231px] rounded-md">
                    <Image src={props.image} alt="" className="rounded-md w-full h-full object-cover" />
                </div>
                <div className="w-full h-[172px] p-[30px] space-y-5 font-bold place-items-center">
                    <h5 className="text-[#252B42]">username</h5>
                    <h5 className="text-[#737373] text-sm">Proficient</h5>
                    <div className=" gap-5 flex">
                        <Image src={image1} alt="" className="w-6 h-6 object-cover hover:-translate-y-1 duration-500 cursor-pointer" />
                        <Image src={image2} alt="" className="w-6 h-6 object-cover hover:-translate-y-1 duration-500 cursor-pointer" />
                        <Image src={image3} alt="" className="w-6 h-6 object-cover hover:-translate-y-1 duration-500 cursor-pointer" />
                    </div>
                </div>


            </div>
        </>
    )
}

export default Team;
