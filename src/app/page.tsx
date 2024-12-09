import Image from "next/image";
import hero_image from "../../public/Product_Image/shop-hero-1-product-slide-1.png";
import Man from "../../public/Product_Image/filter.png";
import woman from "../../public/Product_Image/filter (1).png";
import assoseries from "../../public/Product_Image/filter (2).png";
import kids from "../../public/Product_Image/filter (3).png";
import Product_Image from "./components/Product_Image";
import product_image1 from "../../public/Product_Image/product-cover-5.png";
import product_image2 from "../../public/Product_Image/product-cover-5 (1).png";
import product_image3 from "../../public/Product_Image/product-cover-5 (2).png";
import product_image4 from "../../public/Product_Image/product-cover-5 (3).png";
import product_image5 from "../../public/Product_Image/fixed-height.png";
import product_image6 from "../../public/Product_Image/product-cover-5 (3).png";
import product_image7 from "../../public/Product_Image/product-cover-5 (4).png";
import product_image8 from "../../public/Product_Image/filter.png";
import summer from "../../public/Product_Image/png-cover.2.png";
import summer2 from "../../public/Product_Image/asian-woman-man-with-winter-clothes 1.png";
import Future_card from "./components/Future_card";
import image9 from "../../public/Product_Image/unsplash_CuEvrPd3NYc.png";
import image10 from "../../public/Product_Image/unsplash_gEZkP23pLZ4.png";
import image11 from "../../public/Product_Image/unsplash_k0rVudBoB4c.png";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>

      {/* Hero Section */}
      <div className="overflow-hidden relative" >
        <Image src={hero_image} alt="" className="w-full h-[753px] object-cover" />
        <div className="md:w-[1044px] md:h-[427px] h-[361px] space-y-[35px] text-[#FFFFFF] place-items-center md:place-items-start absolute md:top-44 top-56 left-16 md:left-[197px] z-30">
          <h5 className="font-bold">SUMMER 2020</h5>
          <h2 className="text-[40px] leading-[50px] w-[268px] h-[100px] md:w-full text-center md:text-start font-bold">NEW COLLECTION</h2>
          <p className="text-[20px] leading-[30px] w-[291px] md:w-[376px] md:h-[60px] h-[90px] text-center md:text-start font-normal">We know how large objects
            will act, but things on a small scale.</p>
          <button className="py-[15px] px-10 text-[24px] leading-[32px] font-bold bg-[#2DC071] hover:bg-[#37ac6d] duration-300 rounded-[5px] ">SHOP NOW</button>
        </div>
      </div>
      {/* Catogory */}
      <div className="w-full h-[1850px] md:h-[770px] bg-[#FAFAFA] md:px-[12%] place-items-center md:place-items-start">
        <div className="py-20 w-[333px] md:w-full h-full space-y-12">
          <div className="w-full h-[82px] place-items-center space-y-[10px]">
            <h3 className="text-[#252B42] text-2xl font-bold">EDITOR’S PICK</h3>
            <p className="w-[196px] md:w-full h-[40px] text-center text-sm">Problems trying to resolve
              the conflict between </p>
          </div>
          <div className="w-full h-[1560px] md:h-full space-y-[30px] md:space-y-0 md:flex justify-between ">
            <div className="w-full md:w-[510px] h-[500px] md:px-12 relative bg-[#b4abab40]">
              <Image src={Man} alt="" className="w-full h-full" />
              <p className="w-[170px] h-[48px] bg-white text-[#252B42] font-bold flex items-center justify-center rounded absolute top-[426px] left-[31px] hover:bg-[#ee4c37] duration-300 cursor-pointer">MEN</p>
            </div>
            <div className="w-full h-[500px] md:w-[240px] relative">
              <Image src={woman} alt="" className="w-full h-full" />
              <p className="w-[170px] h-[48px] bg-white text-[#252B42] font-bold flex items-center justify-center rounded absolute top-[426px] left-[31px] hover:bg-[#ee4c37] duration-300 cursor-pointer">WOMEN</p>
            </div>
            <div className="w-full h-[500px] md:w-[240px] space-y-4">
              <div className="w-full md:w-[240px] h-[242px] relative">
                <Image src={assoseries} alt="" className="w-full h-full" />
                <p className="w-[170px] h-[48px] bg-white text-[#252B42] font-bold flex items-center justify-center rounded absolute top-[171px] left-[14px] hover:bg-[#ee4c37] duration-300 cursor-pointer">ACCESSORIES</p>
              </div>
              <div className="w-full md:w-[240px] h-[242px] relative">
                <Image src={kids} alt="" className="w-full h-full" />
                <p className="w-[170px] h-[48px] bg-white text-[#252B42] font-bold flex items-center justify-center rounded absolute top-[171px] left-[14px] hover:bg-[#ee4c37] duration-300 cursor-pointer ">KIDS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Future Product */}
      <div className="w-full h-[5510px] md:h-full flex justify-center items-center md:px-[12%]">
        <div className="h-full w-[328px] md:w-full space-y-[48px] md:space-y-0 py-20 place-items-center md:place-items-start">
          <div className="w-[261px] md:w-full h-[154px] space-y-[10px]">
            <h4 className="text-xl text-center">Featured Products</h4>
            <h3 className="text-2xl font-bold text-center">BESTSELLER PRODUCTS</h3>
            <p className="text-sm text-center">Problems trying to resolve the conflict between </p>
          </div>
          <div className="w-full h-[2550px] md:h-full space-y-[30px] md:space-y-0 md:flex items-center justify-between">
            <Product_Image image={product_image1} />
            <Product_Image image={product_image2} />
            <Product_Image image={product_image3} />
            <Product_Image image={product_image4} />
          </div>
          <div className="w-full h-[2550px] md:h-full space-y-[30px] md:space-y-0 md:flex items-center justify-between">
            <Product_Image image={product_image5} />
            <Product_Image image={product_image6} />
            <Product_Image image={product_image7} />
            <Product_Image image={product_image8} />
          </div>
        </div>
      </div>
      {/* Summer Section */}
      <div className="w-full h-[1230px] md:h-[709px] rounded-[5px] border-[1px] border-[#DEDEDE] bg-[#23856D] md:px-[12%] overflow-hidden">
        <div className="py-[112px] space-y-[80px] md:space-y-0 w-full h-[1252px] md:h-full md:flex justify-between items-center">
          <div className="h-[429px] space-y-[35px] place-items-center md:place-items-start text-white">
            <h4 className="text-xl">SUMMER 2020</h4>
            <h2 className="w-[246px] h-[100px] font-bold text-[40px] leading-[50px] text-center md:text-start">Vita Classic Product</h2>
            <p className="w-[291px] h-[90px] md:w-[341px] md:text-start text-xl text-center ">We know how large objects
              will act, but things on a
              small scale.</p>
            <div className="w-[184px] h-[104px] md:w-[295px] md:h-full space-y-[20px] md:space-y-0 place-items-center md:place-items-start md:flex justify-between items-center">
              <h2 className="text-2xl font-bold md:text-start text-center">$16.48</h2>
              <button className="px-[40px] py-[15px] text-[14px] bg-[#2DC071] rounded-[5px]  hover:bg-[#37ac6d] duration-300">ADD TO CART</button>
            </div>
          </div>

          <div className="w-[416px] md:w-[510px] h-[681px]">
            <Image src={summer} alt="" className="w-full h-full object-cover" />
          </div>

        </div>

      </div>
      {/* universe section */}
      <div className="w-full h-[999px] md:h-[682px] pt-[120px] md:pt-0 md:flex md:flex-row-reverse justify-between items-center md:px-[12%]">
        <div className="h-[476px] md:w-[573px] md:h-[326px] space-y-[32px] place-items-center md:place-items-start md:px-10">
          <h5 className="font-bold text-[#BDBDBD]">SUMMER 2020</h5>
          <h2 className="w-[303px] md:w-[375px] h-[140px] text-[40px] leading-[50px] font-bold text-center md:text-start">Part of the
            Neural
            Universe</h2>
          <p className="w-[262px] h-[84px] text-xl text-center md:text-start text-[#737373]">We know how large objects will act, but things on a small scale.</p>
          <div className="w-[165px] md:w-[339px] h-[129px] space-y-[25px] md:space-y-0 place-items-center md:place-items-start md:flex">
            <button className="px-[40px] py-[15px] text-[14px] bg-[#23A6F0] rounded-[5px] text-white  hover:bg-[#2e8fc7] duration-300">BUY NOW</button>
            <button className=" h-[52px] px-[40px] py-[15px] text-[14px] text-[#23A6F0] border-[1px] border-[#23A6F0] hover:text-white hover:bg-[#3f90be] duration-300 rounded-[5px]">Learn More</button>
          </div>
        </div>
        <div className="w-full h-[407px] md:w-[704px] md:h-[682px] ">
          <Image src={summer2} alt="" className="w-full h-full object-fill" />
        </div>
      </div>
      {/* Futured Section */}
      <div className="w-full h-[2100px] md:h-full flex justify-center items-center md:px-[12%]">
        <div className="h-full w-[328px] md:w-full space-y-[48px] md:space-y-0 py-20 place-items-center ">
          <div className="w-[261px] h-[154px] md:w-[691px] place-items-center space-y-[10px]">
            <h4 className="text-sm text-center text-[#23A6F0]">Practice Advice</h4>
            <h3 className="text-2xl font-bold text-center">Featured Products</h3>
            <p className="text-sm text-center md:w-[469px]">Problems trying to resolve the conflict between
              the two major realms of Classical physics: Newtonian mechanics  </p>
          </div>
          <div className="w-full h-[1878px] md:h-full md:flex justify-between items-center">
            <Future_card image={image9} />
            <Future_card image={image10} />
            <Future_card image={image11} />
          </div>
        </div>
      </div>
      {/* footer */}
      <div>
        <Footer/>
      </div>



    </>
  );
}
