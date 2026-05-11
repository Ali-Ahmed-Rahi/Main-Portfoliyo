import { MdOutlineSimCardDownload } from "react-icons/md";
import img2 from "../assets/Banner/2.png";
import GlowWrapper from "../helpers/GlowWrapper";

const Banner = () => {
  return (
    <div className="md:relative ">
      {/* Shadow added here */}
      <div>
        <img className="w-full " src={img2} alt="Ali Ahmed Rahi portfolio banner" />
      </div>

      <div className="md:absolute md:bottom-20 md:left-5 mx-3 text-white flex flex-col gap-5 ">
        <h1 className="text-5xl font-bold font-playfair">Hi!</h1>
        <h2 className="text-5xl font-bold text-yellow-500 font-playfair">
          I'm Rahi
        </h2>
        <GlowWrapper>
          <a
            href="https://drive.google.com/uc?export=download&id=1cBE2ikadZEOCkG09ES9Z-43yglsW_GP5"
            className="flex p-3 bg-black text-white hover:text-yellow-500 justify-center items-center gap-2  "
            aria-label="Download resume"
          >
            Download Resume{" "}
            <MdOutlineSimCardDownload className="text-lg hover:animate-bounce" />
          </a>
        </GlowWrapper>
      </div>
    </div>
  );
};

export default Banner;
