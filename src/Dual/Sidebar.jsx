<<<<<<< HEAD

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

=======
import { IoIosContact } from "react-icons/io";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
 
      <div className="md:flex  md:flex-col h-screen hidden lg:block ">
       
        
          <div className="flex  items-center justify-center pt-12">
            <IoIosContact className="w-40 h-40 rounded-full text-white" />
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white font-playfair">Ali Ahmed Rahi</h2>
            <p className="text-yellow-500 text-sm font-work">Web Developer</p>
          </div>
          <div className="pt-16 flex justify-center font-roboto ">
            <ul
              tabIndex={0}
              className="menu gap-6 text-center uppercase text-sm"
            >
              <Link className="hover:underline w-32 hover:text-base hover:text-yellow-500 transition-all duration-200">
                <a>Home</a>
              </Link>
              <Link className="hover:underline w-32 hover:text-base hover:text-yellow-500 transition-all duration-200">
                <a>About</a>
              </Link>
              <Link className="hover:underline w-32 hover:text-base hover:text-yellow-500 transition-all duration-200">
                <a>Skill</a>
              </Link>
              <Link className="hover:underline w-32 hover:text-base hover:text-yellow-500 transition-all duration-200">
                <a>Education</a>
              </Link>
              <Link className="hover:underline w-32 hover:text-base hover:text-yellow-500 transition-all duration-200">
                <a>Services</a>
              </Link>
              <Link className="hover:underline w-32 hover:text-base hover:text-yellow-500 transition-all duration-200">
                <a>Contact</a>
              </Link>
            </ul>
          </div>
        

        {/* Footer at the Bottom */}
        <footer className="footer footer-center text-white p-4 pt-56 font-work">
          <aside>
            <p>
              Copyright © {new Date().getFullYear()} - All rights reserved by{" "}
              <br /> ACME Industries Ltd
            </p>
          </aside>
        </footer>
      </div>
     
    
>>>>>>> 80f15e9 (first commit)
    </div>
  );
};

<<<<<<< HEAD
export default Sidebar;
=======
export default Sidebar;
>>>>>>> 80f15e9 (first commit)
