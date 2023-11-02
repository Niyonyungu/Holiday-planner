import "../styles/TourDetails.css";
import { BsFillPersonFill } from "react-icons/bs";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillPhone } from "react-icons/ai";
import { RiCalendar2Fill } from "react-icons/ri";
import { FaUserTag } from "react-icons/fa";
import video from "../assets/video.mp4";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Tourdetaills = () => {
  /*    ================BOOKING FORM FETCHING==============      */

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const [bookFormName, setBookFormName] = useState();
  const [bookFormEmail, setBookFormEmail] = useState();
  const [bookFormPhone, setBookFormPhone] = useState();
  const [bookFormDate, setBookFormDate] = useState();
  const [bookFormTicketsNumber, setBookFormTicketsNumber] = useState();

  const params = useParams();
  let tourId = params.id;

  const submitBooking = (e) => {
    e.preventDefault();
    setIsLoading(true);
    let data = new FormData();
    data.append("tourID", tourId);
    data.append("fullname", bookFormName);
    data.append("email", bookFormEmail);
    data.append("phone", bookFormPhone);
    data.append("date", bookFormDate);
    data.append("numberOfTickets", bookFormTicketsNumber);

    let token = localStorage.getItem("token");

    console.log(token);

    axios({
      method: "POST",
      url: "https://holiday-planner-4lnj.onrender.com/api/v1/booking/create",
      data: data,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    })
      .then((Response) => {
        console.log(Response);
        toast.success(Response.data.message);
        setIsLoading(false);
        setTimeout(() => {
          navigate("/tour");
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  /*    ================ END BOOKING FORM FETCHING==============      */

  /*    ===============TOUR DETAILS FETCHING===============      */

  const [destinationImage, setDestinationImage] = useState();
  const [destination, setDestination] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [duration, setDuration] = useState();
  const [groupSize, setGroupSize] = useState();
  const [price, setPrice] = useState();

  const fetchTour = () => {
    let token = localStorage.getItem("token");
    axios({
      method: "GET",
      url: `https://holiday-planner-4lnj.onrender.com/api/v1/tour/getElement?fieldName=_id&value=${tourId}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        setDestinationImage(response?.data?.backdropImage);
        setDestination(response?.data?.destination);
        setTitle(response?.data?.Title);
        setDescription(response?.data?.Description);
        setDuration(response?.data?.Duration);
        setGroupSize(response?.data?.GroupSize);
        setPrice(response?.data?.Price);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchTour();
  }, []);

  /*    ==============END TOUR DETAILS FETCHING================      */

  return (
    <div>
      <div className="tour-ct">
        <div
          className="dtour-head"
          style={{ backgroundImage: `url(${destinationImage})` }}
        >
          <h1>{destination}</h1>
        </div>
        <div className="tour-btmo">
          <div className="tour-leftt">
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
            {/* ====================================================================== */}
            <div className="tab-content ">
              <div className="tab-pane ">
                <div className="tab-box information-tab-box">
                  <span className="discount-label">22% Off</span>
                  <div className="row">
                    <div className="col-xl">
                      <div className="tour-title">
                        <h2 className="h2-title">{title}</h2>
                      </div>
                    </div>
                    <div className="col-xl-3">
                      <div className="tour-price-wp">
                        <div className="tour-price">
                          <h3 className="h3-title">$ {price}</h3>
                          <p>Per Person</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tour-short-info-box">
                    <ul>
                      <li>
                        <i className="fas fa-clock" aria-hidden="true"></i>
                        <span className="text">{duration} Days</span>
                      </li>
                      <li>
                        <i
                          className="fas fa-user-friends"
                          aria-hidden="true"
                        ></i>
                        <span className="text"> {groupSize}People</span>
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
                          <span className="text">{destination}</span>
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
                  <div className="tour-description">{description}</div>
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
                          <a href="#">{destination}</a>
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
                </div>
              </div>
            </div>

            {/* ==================================================== */}
          </div>
          <div className="tour-righht">
            <form action="" className="right-formo">
              <label htmlFor="" className="findd">
                BOOK THIS TOUR
              </label>

              <BsFillPersonFill className="srch-f" />
              <input
                type="text"
                placeholder="Full Name*"
                onChange={(e) => {
                  e.preventDefault();
                  setBookFormName(e.target.value);
                }}
              />

              <MdEmail className="mal" />
              <input
                type="email"
                placeholder=" Email*"
                onChange={(e) => {
                  e.preventDefault();
                  setBookFormEmail(e.target.value);
                }}
              />
              <MdEmail className="mal2" />
              <input type="email" placeholder="Comfirm Email*" />
              <AiFillPhone className="pne" />
              <input
                type="tel"
                placeholder="Phone*"
                onChange={(e) => {
                  e.preventDefault();
                  setBookFormPhone(e.target.value);
                }}
              />
              <RiCalendar2Fill className="clnd" />
              <input
                type="date"
                onChange={(e) => {
                  e.preventDefault();
                  setBookFormDate(e.target.value);
                }}
              />
              <FaUserTag className="tper" />
              <input
                type="number"
                placeholder="Number Of Tickets*"
                onChange={(e) => {
                  e.preventDefault();
                  setBookFormTicketsNumber(parseInt(e.target.value));
                }}
              />
              <textarea className="txt-a" placeholder="message"></textarea>
              <div className="checkbox-item">
                <input type="checkbox" />
                <label>Check Availability</label>
              </div>
              <button className="boo" onClick={submitBooking}>
                {isLoading ? " Booking..." : "BOOK NOW"}
              </button>
              <ToastContainer />
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
              <div className="questt-tt">
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
