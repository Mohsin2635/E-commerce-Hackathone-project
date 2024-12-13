import Image from "next/image";


const Contact_Card = (props: any) => {
    return (
        <>
            <div className={`${props.pt}`}>
                <div className={`w-[327px] ${props.bg} ${props.text} h-[333px] md:w-[380px] xl:w-[327px] py-[50px] px-10 space-y-[15px] place-items-center rounded hover:scale-105 duration-500 cursor-pointer my-10`}>
                    <div className="w-[72px] h-[72px]">
                        <Image src={props.image} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-[216px] h-[48px] text-center font-bold text-sm space-y-2">
                        <h6>georgia.young@ple.com</h6>
                        <h6>georgia.young@ple.com</h6>
                    </div>
                    <h5 className="font-bold">Get Support</h5>

                    <div className="w-[246px] h-[52px] rounded py-[15px] px-10 border-[1px] border-[#23A6F0] hover:text-white flex justify-center items-center hover:bg-[#2e8fc7] duration-300">
                        <button className={`text-sm text-center font-bold  ${props.btntext}`}>Submit Request</button>

                    </div>

                </div>
            </div>

        </>
    )
}

export default Contact_Card;
