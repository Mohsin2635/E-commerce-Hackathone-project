import Image from "next/image";
import greater from "../../../../public/Icons/topcoat_next-light.png";
import logo1 from "../../../../public/Icons/logos_twitter.png";
import logo2 from "../../../../public/Icons/logos_facebook.png";
import logo3 from "../../../../public/Icons/Vector (4).png";
import logo4 from "../../../../public/Icons/logos_linkedin-icon.png";
import None from "../../../../public/Product_Image/none.png";
import Contact_Card from "../Contact_Card";
import icon1 from "../../../../public/Icons/Vector (5).png";
import icon2 from "../../../../public/Icons/icn settings .icn-xl.png";
import icon3 from "../../../../public/Icons/icn settings .icn-xl (1).png";
import Arrow from "../../../../public/Icons/Arrow 2.png";
import Footer from "../Footer";
import Link from "next/link";
import Top_Navbar from "../Top_Navbar";
import Navbar from "../Navbar";

const Page = () => {
  return (
    <>
      <div className="overflow-hidden">
        {/* Top Navbar */}
        <Top_Navbar bg="bg-[#23856D]" textcol="text-white" />

        {/* Navigation */}
        <Navbar />

        {/* Contact */}
        <div className="w-full h-full lg:flex md:px-[12%] justify-between xl:justify-around 2xl:justify-evenly items-center">
          <div className=" h-[590px] md:h-[518px] py-6 md:py-3 space-y-5 md:space-y-2 place-items-center lg:place-items-start overflow-hidden">
            <p className="font-bold text-[#252B42]">CONTACT US</p>
            <div className="w-[337px] h-[100px] md:h-[160px] py-6 text-[#252B42] text-2xl text-center lg:text-start font-bold md:text-5xl ">
              Get in touch today!
            </div>
            <div className="w-full h-[44px] flex justify-center items-center md:hidden">
              <div className="w-[117px] h-full py-[10px] flex justify-between">
                <Link href="/">
                  <p className="text-[#252B42] font-bold text-sm">Home</p>
                </Link>
                <Image src={greater} alt="greater" height={18} />
                <p className="text-[#737373] font-bold text-sm">Contact</p>
              </div>
            </div>
            <p className="w-[277px] h-[120px] md:w-[376px] md:h-[80px] text-center lg:text-start text-xl text-[#737373]">
              We know how large objects will act, but things on a small scale just do not act that way.
            </p>
            <div className="w-[252px] h-[84px] text-[#252B42] text-2xl font-bold space-y-5 text-center md:text-start">
              <h3>Phone : +451 215 215 </h3>
              <h3>Fax : +451 215 215</h3>
            </div>
            <div className="w-[242px] h-[50px] p-[10px] space-x-[34px] flex">
              <Image src={logo1} alt="Twitter logo" className="hover:-translate-y-1 duration-500 cursor-pointer" />
              <Image src={logo2} alt="Facebook logo" className="hover:-translate-y-1 duration-500 cursor-pointer" />
              <Image src={logo3} alt="Vector logo" className="hover:-translate-y-1 duration-500 cursor-pointer" />
              <Image src={logo4} alt="LinkedIn logo" className="hover:-translate-y-1 duration-500 cursor-pointer" />
            </div>
          </div>
          <div className=" place-items-center md:place-items-start ">
            <Image src={None} alt="None" className="w-[620px] h-full object-fill" />
          </div>
        </div>
        {/* Cards */}
        <div className="w-full h-full bg-[#FAFAFA] place-items-center lg:px-[12%] px-[2%]">
          <div className="w-[330px] h-full md:w-full pt-[30px] py-[45px] space-y-[60px] place-items-center">
            <div className="w-[310px] h-[184px] md:w-[625px] md:h-[125px] text-[#252B42] font-bold place-items-center">
              <h6 className="text-sm">VISIT OUR OFFICE</h6>
              <h2 className="text-[40px] leading-[50px] text-center ">
                We help small businesses with big ideas
              </h2>
            </div>
            <div className="h-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:gap-10">
              <Contact_Card image={icon1} bg="bg-white" text="text-[#252B42]" pt="xl:pt-8" btntext="text-[#23A6F0]" />
              <Contact_Card image={icon2} bg="bg-[#252B42]" text="text-white" />
              <Contact_Card image={icon3} bg="bg-white" text="text-[#252B42]" pt="xl:pt-8" btntext="text-[#23A6F0]" />
            </div>
          </div>
        </div>
        <div className="w-full h-[440px] md:h-full bg-white place-items-center">
          <div className="w-[321px] h-full py-[95px] place-items-center ">
            <Image src={Arrow} alt="Arrow" />
            <div className="w-full h-[216px] space-y-[36px] text-[#252B42] font-bold place-items-center ">
              <h5>WE Can't WAIT TO MEET YOU</h5>
              <h1 className="text-6xl">Let’s Talk</h1>
              <div className="w-[186px] h-[52px] rounded py-[15px] px-10 bg-[#23A6F0] text-white place-items-center hover:bg-[#2e8fc7] duration-300">
                <button className="text-sm text-center md:text-start font-bold">Try it free now</button>
              </div>
            </div>
          </div>
        </div>
        {/* footer */}
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Page;
