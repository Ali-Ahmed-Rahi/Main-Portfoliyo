import { FaLinkedin, FaLocationDot } from "react-icons/fa6";
import { GiShoppingBag } from "react-icons/gi";
import { MdCall, MdMarkEmailUnread } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";

const ResponsiveContact = () => {

  return (
    <div className="font-semibold text-white">
      <div className=" fixed w-full z-50 ">
        <div className="fixed bottom-0 w-full bg-black shadow-2xl p-[15px] rounded-t-lg border-t-2 border-yellow-500 ">
          <div className="flex justify-around items-center py-2">

            <a
             href="tel:+8801942432047 "
              className="flex flex-col items-center "
            >
              <MdCall className="w-7 h-6" />
              
            </a>
            <a 
            href="https://wa.me/+8801942432047"
             className="flex flex-col items-center ">
              <RiWhatsappFill className="w-6 h-6" />
              
            </a>
            <a
              href="mailto:aliahmedrahi44@gmail.com"
              className="flex flex-col items-center "
            >
              <MdMarkEmailUnread className="w-6 h-6" />
              
            </a>
            <a
              href="https://www.linkedin.com/in/ali-ahmed-rahi/"
              className="flex flex-col items-center "
            >
              <FaLinkedin className="w-6 h-6" />
             
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveContact;
