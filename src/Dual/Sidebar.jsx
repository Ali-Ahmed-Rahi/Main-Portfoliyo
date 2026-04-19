
import { HashLink } from "react-router-hash-link";
import ProfileSelect from "../helpers/profileSelect";

const Sidebar = () => {

 

  return (
    <div className="md:flex md:flex-col h-screen hidden lg:block">

      {/* Profile */}
      <div className="flex items-center justify-center pt-12">
        <ProfileSelect />
      </div>

      {/* Name */}
      <div className="text-center pt-10">
        <h2 className="text-2xl font-bold text-white font-playfair">
          Ali Ahmed Rahi
        </h2>
        <p className="text-yellow-500 text-[14px] font-work">
          Full Stack Web Developer
        </p>
      </div>

      {/* Navigation */}
      <div className="pt-16 flex justify-center font-roboto">
        <ul className="menu gap-6 text-center uppercase text-sm">

          <li>
            <HashLink to="/#home" >
              Home
            </HashLink>
          </li>

          <li>
            <HashLink to="/#about" >
              About
            </HashLink>
          </li>

          <li>
            <HashLink smooth to="/#skills">
              Skills
            </HashLink>
          </li>

          <li>
            <HashLink to="/#projects" >
              Projects
            </HashLink>
          </li>

          <li>
            <HashLink to="/contact" >
              Contact
            </HashLink>
          </li>

        </ul>
      </div>

      {/* Footer */}
      <footer className="footer footer-center text-white p-4 pt-32 font-work">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All rights reserved by
            <br /> Ali Ahmed Rahi
          </p>
        </aside>
      </footer>

    </div>
  );
};

export default Sidebar;
