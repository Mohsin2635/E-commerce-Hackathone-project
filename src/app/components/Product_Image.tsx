import Image from "next/image";


const Product_Image = (props:any) => {
  return (
    <>
      <div className="w-full md:w-[1050px] h-[615px] hover:-translate-y-1 duration-500 cursor-pointer">
        <div className="w-full md:w-[240px] h-[422px] ">
        <Image src={props.image} alt="Product" className="w-full h-full object-cover" />
        </div>
        <div className="h-[188px] pt-[25px] pb-[35px] px-[25px] space-y-[10px] place-items-center">
            <h5 className="text-center font-bold text-[#252B42]">Graphic Design</h5>
            <p className="text-center font-bold text-[#737373]">English Department</p>
            <div className="w-[118px] h-[34px] px-[3px] py-[5px] flex justify-between ">
                <h5 className="text-[#BDBDBD] font-bold text-[16px]">$16.48</h5>
                <h5 className="text-[#23856D] font-bold">$6.48</h5>
            </div>
            <div className="flex justify-between items-center w-[82px]">
                <div className="w-4 h-4 rounded-full bg-[#23A6F0] cursor-pointer hover:scale-110 duration-500"></div>
                <div className="w-4 h-4 rounded-full bg-[#23856D] cursor-pointer hover:scale-110 duration-500"></div>
                <div className="w-4 h-4 rounded-full bg-[#E77C40] cursor-pointer hover:scale-110 duration-500"></div>
                <div className="w-4 h-4 rounded-full bg-[#252B42] cursor-pointer hover:scale-110 duration-500"></div>
               
            </div>
        </div>

      </div>
    </>
  )
}

export default Product_Image;
