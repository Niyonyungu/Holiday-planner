import "../styles/Footer.css";
import { SlSocialTwitter } from "react-icons/sl";
import { PiInstagramLogo } from "react-icons/pi";
import { SlSocialFacebook } from "react-icons/sl";
const Footer = () => {
  return (
    <div className="foooter">
      <div className="container">
        <div className="left">
          <img src="white-logo.png" alt="" />
          <p>
            {" "}
            Holiday Planners sit amet consectetur <br /> adipisicing elit.
            Perferendis sapiente tenetur officiis <br /> explicabo fugit, sit
            mollitia eum atque excepturi quaerat autem.{" "}
          </p>
          <span>
            <input type="text" placeholder="Enter your Email" />
            <button type="submit">SAVE</button>
          </span>
          <div className="paye">
            <img src="payment.png" alt="" />
          </div>
        </div>
        <div className="middle">
          <h1>Navigation</h1>
          <div className="line"></div>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div className="right">
          <h1>Need Help ?</h1>
          <div className="line"></div>
          <div className="part1">
            <span className="spn">
              <div className="part-1-left"></div>
              <div className="part-1-right">
                {" "}
                <h2>Call Us</h2>
                <p>+250784998214</p>
              </div>
            </span>
          </div>

          <div className="part1">
            <span className="spn">
              <div className="part-1-left"></div>
              <div className="part-1-right">
                {" "}
                <h2>Email for Us</h2>
                <p>holidayplanners@gmail.com</p>
              </div>
            </span>
          </div>

          <div className="part1">
            <span className="spn">
              <div className="part-1-left"></div>
              <div className="part-1-right">
                {" "}
                <h2>Location</h2>
                <p>Rwanda-Kigali-Gatsata</p>
              </div>
            </span>
          </div>

          <div className="part1">
            <span className="spn">
              <div className="part-1-left"></div>
              <div className="part-1-right">
                {" "}
                <h2> Follow US </h2>
                <span className="follow">
                  {" "}
                  <SlSocialTwitter className="tl" />
                  <PiInstagramLogo className="ist" />
                  <SlSocialFacebook className="fcb" />
                </span>
              </div>
            </span>
          </div>
        </div>
      </div>
      <div className="line-ft"></div>
      <div className="down">
        <div className="d-left">
          <p> Copyright © 2023 K-Lab. All Rights Reserved.</p>
        </div>
        <div className="d-right">
          <ul>
            <li className="yp">Privacy Policy</li>
            <li className="yp">Terms Of use</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
