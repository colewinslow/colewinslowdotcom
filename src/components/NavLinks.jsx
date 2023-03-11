import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link, scroller } from "react-scroll";

function NavLinks() {
  const NavLinks = [
    { id: 1, text: "Home", to: "home" },
    { id: 2, text: "About", to: "about" },
    { id: 3, text: "Skills", to: "skills" },
    { id: 4, text: "Portfolio", to: "portfolio" },
    { id: 5, text: "Contact", to: "contact" },
  ];
  let location = useLocation();
  let navigate = useNavigate();
  const HandleHomeChange = (to) => {
    navigate("/");

    scroller.scrollTo(to);
  };

  return (
    <div className="NavLinkContainer">
      {location.pathname === "/blog" ? (
        <>
          {NavLinks.map(({ text, to, id }) => {
            return (
              <button
                key={id}
                onClick={() => HandleHomeChange(to)}
                className="mx-4 text-sm cursor-pointer "
              >
                {text}
              </button>
            );
          })}
        </>
      ) : (
        <>
          {NavLinks.map(({ text, to, id }) => {
            return (
              <Link
                to={to}
                key={id}
                spy={true}
                smooth={true}
                className="mx-4 text-sm cursor-pointer "
              >
                {text}
              </Link>
            );
          })}
        </>
      )}
    </div>
  );
}

export default NavLinks;
