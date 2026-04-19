import { FaFacebook, FaLinkedin } from "react-icons/fa6";
import { MdCall, MdMarkEmailUnread } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";
import GlowWrapper from "../helpers/GlowWrapper";

const AboutMe = () => {
  return (
    <section>
      <div className="flex justify-between">
        <div className="space-y-3">
          <h2 className="text-md font-work text-yellow-500 space-x-4">
            About Me
          </h2>
          <h2 className="uppercase font-playfair flex gap-4 text-2xl">
            who <span>am</span> <span>i</span>?
          </h2>
        </div>

        <div className="hidden md:flex justify-around items-center py-2 gap-7 ">
          <GlowWrapper>
            <a
              href="https://www.facebook.com/share/1GhF329hjj/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center bg-black"
            >
              <FaFacebook className="w-7 h-6" />
            </a>
          </GlowWrapper>

          <GlowWrapper>
            <a
              href="https://wa.me/+8801942432047"
              className="flex flex-col items-center "
            >
              <RiWhatsappFill className="w-6 h-6 bg-black" />
            </a>
          </GlowWrapper>
          <GlowWrapper>
            <a
              href="mailto:aliahmedrahi44@gmail.com"
              className="flex flex-col items-center "
            >
              <MdMarkEmailUnread className="w-6 h-6 bg-black" />
            </a>
          </GlowWrapper>

          <GlowWrapper>
            <a
              href="https://www.linkedin.com/in/ali-ahmed-rahi/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center "
            >
              <FaLinkedin className="w-6 h-6 bg-black" />
            </a>
          </GlowWrapper>
        </div>
      </div>

      <div className="mt-12">
        <p className="font-open text-md">
          {" "}
          <span className="font-bold  text-yellow-500 text-lg">
            Hi I'm Ali Ahmed Rahi,
          </span>{" "}
          a Full-Stack Web Application Developer focused on building scalable,
          high-performance digital solutions. From user experience to backend
          architecture, I create complete web applications designed for growth,
          security, and real business impact.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
