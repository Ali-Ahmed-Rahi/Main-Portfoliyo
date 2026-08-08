import Link from 'next/link';
import ProfileSelect from '../helpers/profileSelect';

const Sidebar = () => {
  return (
    <div className="md:flex md:flex-col h-screen hidden lg:block">
      <div className="flex items-center justify-center pt-12">
        <ProfileSelect />
      </div>

      <div className="text-center pt-10">
        <h2 className="text-2xl font-bold text-white font-playfair">Ali Ahmed Rahi</h2>
        <p className="text-yellow-500 text-[14px] font-work">Full Stack Web Developer</p>
      </div>

      <div className="pt-16 flex justify-center font-roboto text-ellipsis text-white">
        <ul className="menu gap-6 text-center uppercase text-sm "> <li>
            <Link href="/#home">Home</Link>
          </li>

          <li>
            <Link href="/#about">About</Link>
          </li>
          <li>
            <Link href="/#skills">Skills</Link>
          </li>

          <li>
            <Link href="/#projects">Projects</Link>
          </li>

          <li>
            <Link href="/#contact">Contact</Link>
          </li>
        </ul>
      </div>

      <footer className="footer footer-center text-white p-4 pt-48 font-work">
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
