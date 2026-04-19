import { MdOutlineSimCardDownload } from "react-icons/md";
// import img from "../assets/Banner/WhatsApp Image 2025-04-10 at 11.34.30_5d14909f.jpg";
import img2 from "../assets/Banner/2.png"

const Banner = () => {
  return (
    <div className="md:relative ">
      {/* Shadow added here */}
      <div>
      <img className="w-full " src={img2} alt="" />
      </div>

      <div className="md:absolute md:bottom-20 md:left-5 mx-3 text-white  flex flex-col gap-5 ">
        <h1 className="text-5xl font-bold font-playfair">Hi!</h1>
        <h2 className="text-5xl font-bold text-yellow-500 font-playfair">I'm Rahi</h2>
        {/* <p className="text-base mt-2 font-work">
          MernStack Developer
        </p> */}
        <a
          href="https://drive.google.com/uc?export=download&id=1cBE2ikadZEOCkG09ES9Z-43yglsW_GP5"
            className="btn  rounded-lg bg-black text-white mt-5 hover:bg-white hover:text-black w-52 border-yellow-500 "
          >
           DownLode Resume <MdOutlineSimCardDownload className="text-lg hover:animate-bounce" />
          </a>
      </div>
    </div>
  );
};

export default Banner;
