import "../styles/TourDetails.css";
import { BsFillPersonFill } from "react-icons/bs";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillPhone } from "react-icons/ai";
import { RiCalendar2Fill } from "react-icons/ri";
import { FaUserTag } from "react-icons/fa";
import video from "../assets/video.mp4";
const Tourdetaills = () => {
  return (
    <div>
      <div className="tour-ct">
        <div className="dtour-head">
          <h1> ITALY </h1>
        </div>
        <div className="tour-btm">
          <div className="tour-left">
            {/* ==================================================== */}

            <ul className="nav nav-tabs wow ">
              <li className="nav-item">
                <a className="nav-link active">
                  <i className="fas fa-info-circle" aria-hidden="true"></i>
                  Information
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <i className="fas fa-book-open" aria-hidden="true"></i>Tour
                  Plan
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
                  Location
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <i className="fas fa-camera-retro" aria-hidden="true"></i>
                  Gallery
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <i className="fas fa-users" aria-hidden="true"></i>Review
                </a>
              </li>
            </ul>

            {/* ==================================================== */}

            <div className="tab-content ">
              <div className="tab-pane ">
                <div className="tab-box information-tab-box">
                  <span className="discount-label">22% Off</span>
                  <div className="row">
                    <div className="col-xl">
                      <div className="tour-title">
                        <h2 className="h2-title">
                          A wonderful serenity has taken possession of my entire
                          soul
                        </h2>
                      </div>
                    </div>
                    <div className="col-xl-3">
                      <div className="tour-price-wp">
                        <div className="tour-price">
                          <h3 className="h3-title">$200</h3>
                          <p>Per Person</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tour-short-info-box">
                    <ul>
                      <li>
                        <i className="fas fa-clock" aria-hidden="true"></i>
                        <span className="text">2 days</span>
                      </li>
                      <li>
                        <i
                          className="fas fa-user-friends"
                          aria-hidden="true"
                        ></i>
                        <span className="text">6 People</span>
                      </li>
                      <li>
                        <i className="fas fa-user-plus" aria-hidden="true"></i>
                        <span className="text">18</span>
                      </li>
                      <li>
                        <a href="destination-detail.html">
                          <i
                            className="fas fa-map-marker-alt"
                            aria-hidden="true"
                          ></i>
                          <span className="text">Greece</span>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <i className="fas fa-sun" aria-hidden="true"></i>
                          <span className="text">Discovery</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="tour-description">
                    <p>
                      {" "}
                      I should be incapable of drawing a single stroke at the
                      present moment; and yet I feel that I never was a greater
                      artist than now. When, while the lovely valley teems with
                      vapour around me, and the meridian sun strikes the upper
                      surface of the impenetrable foliage of my trees, and but a
                      few stray gleams.
                    </p>
                    <p>
                      {" "}
                      I should be incapable of drawing a single stroke at the
                      present moment; and yet I feel that I never was a greater
                      artist than now. When, while the lovely valley teems with
                      vapour around me, and the meridian sun strikes the upper
                      surface of the impenetrable foliage of my trees, and but a
                      few stray gleams steal into the inner sanctuary, I throw
                      myself down among the tall grass by the trickling stream;
                      and, as I lie close to the earth, a thousand unknown
                      plants are noticed by me: when I hear the buzz of the
                      little world among the stalks, and grow familiar with the
                      countless indescribable forms of the insects and flies,
                      then I feel the presence of the Almighty, who formed us in
                      his own image, and the breath
                    </p>
                  </div>
                  <div className="tour-video">
                    <video
                      width="840"
                      height="360"
                      muted
                      controls
                      loop
                      autoPlay
                    >
                      <source src={video} type="video/mp4" />
                    </video>
                  </div>
                  <div className="tour-timetable-schedule mt-40 mb-40">
                    <ul>
                      <li>
                        <div className="tts-label">
                          <h4 className="h4-title">Destination</h4>
                        </div>
                        <div className="tts-description">
                          <a href="#">Greece</a>
                        </div>
                      </li>
                      <li>
                        <div className="tts-label">
                          <h4 className="h4-title">Departure</h4>
                        </div>
                        <div cclassName="tts-description">Lorem Ipsum</div>
                      </li>
                      <li>
                        <div className="tts-label">
                          <h4 className="h4-title">Departure Time</h4>
                        </div>
                        <div className="tts-description">
                          9:15 AM To 9:30 AM.
                        </div>
                      </li>
                      <li>
                        <div className="tts-label">
                          <h4 className="h4-title">Return Time</h4>
                        </div>
                        <div className="tts-description">
                          Approximately 10:30 PM.
                        </div>
                      </li>
                      <li>
                        <div className="tts-label">
                          <h4 className="h4-title">Dress Code</h4>
                        </div>
                        <div className="tts-description">
                          comfortable clothing and light jacket.
                        </div>
                      </li>
                      <li>
                        <div className="tts-label">
                          <h4 className="h4-title">Price Included</h4>
                        </div>
                        <div className="tts-description">
                          <ul className="included">
                            <li>
                              <i
                                className="fas fa-check"
                                aria-hidden="true"
                              ></i>
                              5 Star Accommodation
                            </li>
                            <li>
                              <i
                                className="fas fa-check"
                                aria-hidden="true"
                              ></i>
                              Air fases
                            </li>
                            <li>
                              <i
                                className="fas fa-check"
                                aria-hidden="true"
                              ></i>
                              3 Nights Hotel Accomodation
                            </li>
                            <li>
                              <i
                                className="fas fa-check"
                                aria-hidden="true"
                              ></i>
                              All transportation in destination location
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <div className="tts-label">
                          <h4 className="h4-title">Price Not Included</h4>
                        </div>
                        <div className="tts-description">
                          <ul className="not-included">
                            <li>
                              <i
                                className="fas fa-times"
                                aria-hidden="true"
                              ></i>
                              Guide Service Fee
                            </li>
                            <li>
                              <i
                                className="fas fa-times"
                                aria-hidden="true"
                              ></i>
                              Any Private Expenses
                            </li>
                            <li>
                              <i
                                className="fas fa-times"
                                aria-hidden="true"
                              ></i>
                              Room Service Fees
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* <div class="row no-gutters tour-gallery-slider slick-initialized slick-slider"><button class="slide-arrow prev-arrow slick-arrow" style=""><span>Prev</span></button>
                                            
                                            
                                            
                                            
                                        <div class="slick-list draggable"><div class="slick-track" style="opacity: 1; width: 3050px; transform: translate3d(-1525px, 0px, 0px);"><div class="col-lg-4 p-0 slick-slide slick-cloned" tabindex="-1" style="width: 305px;" data-slick-index="-2" id="" aria-hidden="true">
                                                <div class="tour-gallery-slide-image back-image" data-fancybox="" data-src="assets/images/tour-gallery-slide-image3.jpg" style="background-image: url(assets/images/tour-gallery-slide-image3.jpg);"></div>
                                            </div><div class="col-lg-4 p-0 slick-slide slick-cloned" tabindex="-1" style="width: 305px;" data-slick-index="-1" id="" aria-hidden="true">
                                                <div class="tour-gallery-slide-image back-image" data-fancybox="" data-src="assets/images/tour-gallery-slide-image4.jpg" style="background-image: url(assets/images/tour-gallery-slide-image4.jpg);"></div>
                                            </div><div class="col-lg-4 p-0 slick-slide" tabindex="-1" style="width: 305px;" data-slick-index="0" aria-hidden="true">
                                                <div class="tour-gallery-slide-image back-image" data-fancybox="" data-src="assets/images/tour-gallery-slide-image1.jpg" style="background-image: url(assets/images/tour-gallery-slide-image1.jpg);"></div>
                                            </div><div class="col-lg-4 p-0 slick-slide" tabindex="-1" style="width: 305px;" data-slick-index="1" aria-hidden="true">
                                                <div class="tour-gallery-slide-image back-image" data-fancybox="" data-src="assets/images/tour-gallery-slide-image2.jpg" style="background-image: url(assets/images/tour-gallery-slide-image2.jpg);"></div>
                                            </div><div class="col-lg-4 p-0 slick-slide" tabindex="-1" style="width: 305px;" data-slick-index="2" aria-hidden="true">
                                                <div class="tour-gallery-slide-image back-image" data-fancybox="" data-src="assets/images/tour-gallery-slide-image3.jpg" style="background-image: url(assets/images/tour-gallery-slide-image3.jpg);"></div>
                                            </div><div class="col-lg-4 p-0 slick-slide slick-current slick-active" tabindex="0" style="width: 305px;" data-slick-index="3" aria-hidden="false">
                                                <div class="tour-gallery-slide-image back-image" data-fancybox="" data-src="assets/images/tour-gallery-slide-image4.jpg" style="background-image: url(assets/images/tour-gallery-slide-image4.jpg);"></div>
                                            </div><div class="col-lg-4 p-0 slick-slide slick-cloned slick-active" tabindex="-1" style="width: 305px;" data-slick-index="4" id="" aria-hidden="false">
                                                <div class="tour-gallery-slide-image back-image" data-fancybox="" data-src="assets/images/tour-gallery-slide-image1.jpg" style="background-image: url(assets/images/tour-gallery-slide-image1.jpg);"></div>
                                            </div><div class="col-lg-4 p-0 slick-slide slick-cloned" tabindex="-1" style="width: 305px;" data-slick-index="5" id="" aria-hidden="true">
                                                <div class="tour-gallery-slide-image back-image" data-fancybox="" data-src="assets/images/tour-gallery-slide-image2.jpg" style="background-image: url(assets/images/tour-gallery-slide-image2.jpg);"></div>
                                            </div><div class="col-lg-4 p-0 slick-slide slick-cloned" tabindex="-1" style="width: 305px;" data-slick-index="6" id="" aria-hidden="true">
                                                <div class="tour-gallery-slide-image back-image" data-fancybox="" data-src="assets/images/tour-gallery-slide-image3.jpg" style="background-image: url(assets/images/tour-gallery-slide-image3.jpg);"></div>
                                            </div><div class="col-lg-4 p-0 slick-slide slick-cloned" tabindex="-1" style="width: 305px;" data-slick-index="7" id="" aria-hidden="true">
                                                <div class="tour-gallery-slide-image back-image" data-fancybox="" data-src="assets/images/tour-gallery-slide-image4.jpg" style="background-image: url(assets/images/tour-gallery-slide-image4.jpg);"></div>
                                            </div></div></div><button class="slide-arrow next-arrow slick-arrow" style=""><span>Next</span></button></div> */}
                </div>
              </div>
            </div>

            {/* ==================================================== */}
          </div>
          <div className="tour-right">
            <form action="" className="right-form">
              <label htmlFor="" className="findd">
                BOOK THIS TOUR
              </label>

              <BsFillPersonFill className="srch-f" />
              <input type="text" placeholder="Full Name*" />

              <MdEmail className="mal" />
              <input type="email" placeholder=" Email*" />
              <MdEmail className="mal2" />
              <input type="email" placeholder="Comfirm Email*" />
              <AiFillPhone className="pne" />
              <input type="tel" placeholder="Phone*" />
              <RiCalendar2Fill className="clnd" />
              <input type="date" />
              <FaUserTag className="tper" />
              <input type="number" placeholder="Number Of Tickets*" />
              <textarea className="txt-a" placeholder="message"></textarea>
              <div className="checkbox-item">
                <input type="checkbox" />
                <label>Check Availability</label>
              </div>
              <button className="boo">BOOK NOW</button>
            </form>

            <div className="quest-topp">
              <div className="quest-top-titlee">
                <h1>WHY BOOK WITH US?</h1>
              </div>
              <div className="lssst">
                <ul>
                  <li>
                    <MdOutlineKeyboardArrowRight className="arrrw" /> Best Price
                    Guarantee
                  </li>
                  <li>
                    <MdOutlineKeyboardArrowRight className="arrrw" /> Customer
                    care Available 24/7
                  </li>
                  <li>
                    <MdOutlineKeyboardArrowRight className="arrrw" /> Free
                    travel insurance
                  </li>
                  <li>
                    <MdOutlineKeyboardArrowRight className="arrrw" />{" "}
                    Hand-picked tours & Activities
                  </li>
                </ul>
              </div>
            </div>

            <div className="quest-btm">
              <div className="questt-t">
                <div className="questt-top-tite">
                  <h1>GOT A QUESTION ?</h1>
                  <p>
                    Do not hesitate to give us a call. We are an expert team and
                    we are happy to talk to you.
                  </p>
                  <span className="sppd">
                    <MdEmail className="qsste" />
                    holidayplanners@gmail.com
                  </span>
                  <span className="sppd">
                    <BsFillTelephoneFill className="qsste" /> +0784998214
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tourdetaills;
