import { FaLinkedin } from "react-icons/fa6";
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
              aria-label="Call Ali Ahmed Rahi"
            >
              <MdCall className="w-7 h-6" />
              
            </a>
            <a 
            href="https://wa.me/+8801942432047"
             className="flex flex-col items-center "
             aria-label="Open WhatsApp chat"
             target="_blank"
             rel="noopener noreferrer"
            >
              <RiWhatsappFill className="w-6 h-6" />
              
            </a>
            <a
              href="mailto:aliahmedrahi44@gmail.com"
              className="flex flex-col items-center "
              aria-label="Send email to Ali Ahmed Rahi"
            >
              <MdMarkEmailUnread className="w-6 h-6" />
              
            </a>
            <a
              href="https://www.linkedin.com/in/ali-ahmed-rahi/"
              className="flex flex-col items-center "
              aria-label="Open LinkedIn profile"
              target="_blank"
              rel="noopener noreferrer"
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
