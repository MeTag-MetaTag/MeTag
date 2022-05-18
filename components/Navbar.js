import { useEffect, useState } from "react";
import Link from "next/link";

function Navbar(props) {
  const [hideNav, setHideNav] = useState(true);
  const [screenWidth, setScreenWidth] = useState();
  const openNav = () => {
    setHideNav(!hideNav);
  };

  useEffect(() => {
    if (window) {
      setScreenWidth(window.innerWidth);
      window.addEventListener("resize", (e) => {
        setScreenWidth(e.target.innerWidth);
      });
    }
    const navContainer = document.querySelector("header");
    const navHeight = navContainer.clientHeight;
    window.addEventListener("scroll", () => {
      window.pageYOffset > navHeight
        ? (navContainer.style.background = "rgba(0, 0, 0, .3)")
        : (navContainer.style.background = "transparent");
    });
  }, []);

  return (
    <header className="flex flex-wrap justify-center items-center sticky top-0 bg-transparent backdrop-blur-lg z-[99] transition duration-200 py-0.5 px-16">
      <div className="flex mr-auto py-2 pl-6">
        <Link href="/">
          <a className="flex mr-auto hover:bg-[#dbd5d533] ease-in transition duration-700 px-2 py-1 border-0 rounded-xl">
<<<<<<< Updated upstream
            <div className="font-inter font-semibold text-[26px] text-white">
              MetTag
=======
            {/* <div className="h-9 w-9 mr-2.5">
                <Image src={logo} layout="responsive" alt="image" />
              </div> */}
            <div className="font-inter font-semibold text-[26px] text-white">
              MeTag
>>>>>>> Stashed changes
            </div>
          </a>
        </Link>
      </div>
<<<<<<< Updated upstream
     
=======
      <div className="absolute space-x-8">
        {/* <div className=" left-auto flex items-center"> */}
        <Link href="/about">
          <a className="nav-link">About Us</a>
        </Link>
        <Link href="/events">
          <a className="nav-link">Shop</a>
        </Link>
        <Link href="/contact">
          <a className="nav-link">Contact Us</a>
        </Link>
        <Link href="/team">
          <a className="nav-link">Team</a>
        </Link>
      </div>
      {/* </div> */}
>>>>>>> Stashed changes
      <div className="items-end">
        <button className="tetiary-1">Join Us</button>
      </div>
    </header>
  );
}

export default Navbar;
