import { TfiEmail } from "react-icons/tfi";
import { BsTelephone } from "react-icons/bs";
import { SlSocialTwitter } from "react-icons/sl";
import { PiInstagramLogo } from "react-icons/pi";
import { SlSocialFacebook } from "react-icons/sl";
import { HiOutlineSearchCircle } from "react-icons/hi";
import { useState } from "react";
import Modal from "./Modal";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Navbar = () => {
  const [openform, setOpenform] = useState(false);
  function handleClick() {
    setOpenform(!openform);
  }

  return (
    <>
      <div>
        {openform && <Modal closeModal={() => setOpenform(false)} />}
        <div className="top-header">
          <div className="top-container">
            <div className="lft">
              <i>
                <TfiEmail />
              </i>
              <h2> Holiidayplaners@gmail.com</h2>
              <span></span>
              <br />
              <i>
                <BsTelephone />
              </i>
              <h2>+250784998214</h2>
            </div>
            <div className="rgt">
              <i>
                <SlSocialFacebook />
              </i>

              <i>
                <PiInstagramLogo />
              </i>

              <i>
                <SlSocialTwitter />
              </i>
            </div>
          </div>
        </div>

        <div className="bottom-header">
          <img src="logo.png" alt="logo" />
          <div className="bottom-header-right">
            <button>RESERVE</button>
            <i>
              <HiOutlineSearchCircle />
            </i>
            {/* ======MENU BAR====== */}

            <div className="menu-icon" onClick={handleClick}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>

            {/* ======END MENU BAR====== */}
          </div>
        </div>
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default Navbar;
