import Image from "next/image"
import image from "../../../public/Icons/icon arrow-next.png";


const Future_card = (props: any) => {
    return (
        <>
            <div className="w-full md:w-[338px] h-[606px] md:h-full bg-white hover:-translate-y-1 duration-500 shadow-lg">
                <div className="w-full md:w-full h-[300px] cursor-pointer">
                    <Image src={props.image} alt="Product" className="w-full h-full object-cover" />
                </div>
                <div className="h-[306px] pt-[25px] pb-[35px] px-[25px] space-y-[24px]">
                    <div className="w-[159px] h-[16px] text-xs gap-4 flex cursor-pointer">
                        <p className="text-[#8EC2F2]">Google</p>
                        <p>Trending</p>
                        <p>New</p>
                    </div>
                    <h5 className="font-bold text-[#252B42]">Loudest à la Madison #1
                        (L'integral)</h5>
                    <p className="text-sm font-bold text-[#737373]">We focus on ergonomics and meeting
                        you where you work. It's only a
                        keystroke away.</p>
                        <div className="w-[104px] h-[24px] flex justify-between">
                            <p className="text-sm font-bold">Learn More</p>
                            <Image src={image} alt="" width={9} height={16}/>
                        </div>


                </div>

            </div>
        </>
    )
}

export default Future_card
