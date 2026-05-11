import { Link } from "react-router-dom";

const ResponsiveSb = () => {
  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Projects", href: "/#projects" },
    { label: "Contact", href: "/#contact" }
  ];

  return (
    <div className="navbar bg-black">
      <div className="navbar-start">
        <div className="dropdown">
          <button
            type="button"
            tabIndex={0}
            className="btn btn-ghost btn-circle"
            aria-label="Toggle navigation menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-yellow-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-black border border-yellow-500 rounded-box z-[1] mt-3 w-[250px] p-2 shadow gap-4"
          >
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.href}
                  className="text-yellow-500  rounded text-lg "
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="navbar-center">
        <Link to="/" className="btn btn-ghost text-xl text-yellow-500">Portfolio</Link>
      </div>

      <div className="navbar-end" />
    </div>
  );
};

export default ResponsiveSb;
