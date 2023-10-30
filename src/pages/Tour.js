import "../styles/Tour.css";
import { BiSearch } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import houses from "../assets/houses.jpg";
import { BiTimeFive } from "react-icons/bi";
import { MdGroup } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";

const Tour = () => {
  const [tourLists, setTourLists] = useState([
    {
      id: "1",
      country: "Italy",
      descriptionone:
        "Holiday Planners is a World Leading Online Tour Booking Platform",
      descriptiontwo:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
      duration: "2 days",
      groupsize: "6 people",
      amount: "$1200",
    },
    {
      id: "2",
      country: "Greece",
      descriptionone:
        "Holiday Planners is a World Leading Online Tour Booking Platform",
      descriptiontwo:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
      duration: "4 days",
      groupsize: "16 people",
      amount: "$2000",
    },
    {
      id: "3",
      country: "Japan",
      descriptionone:
        "Holiday Planners is a World Leading Online Tour Booking Platform",
      descriptiontwo:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
      duration: "5 days",
      groupsize: "12 people",
      amount: "$2000",
    },
    {
      id: "4",
      country: "Rwanda",
      descriptionone:
        "Holiday Planners is a World Leading Online Tour Booking Platform",
      descriptiontwo:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
      duration: "1 day",
      groupsize: "1 person",
      amount: "$800",
    },
  ]);

  return (
    <div className="tour-ct">
      <div className="tour-head">
        <h1>Tour List</h1>
      </div>
      <div className="tour-btm">
        <div className="tour-left">
          <div className="sort-form">
            <p>Sort By :</p>
            <select name="" id="">
              <option value="">DURATION</option>
              <option value="">TOUR DATE</option>
              <option value="">TITLE</option>
            </select>
            <select name="" id="">
              <option value="">ASCENDING</option>
              <option value="">DESCENDING</option>
            </select>
          </div>

          {/* ==================================================== */}

          <div className="tourCards">
            {tourLists.map((tour) => {
              return (
                <div className="tourCard">
                  <img src={houses} alt="" />
                  <div className="cardDescription">
                    <div className="country">{tour.country}</div>
                    <div className="descri">
                      <p>{tour.descriptionone}</p>
                      <p className="descr">{tour.descriptiontwo}</p>
                    </div>
                    <div className="time-size">
                      <span className="duration">
                        <h3>
                          <BiTimeFive className="cardcons" />
                          Duration
                        </h3>
                        <p className="smallp">{tour.duration} </p>
                      </span>
                      <span className="groupSize">
                        <h3>
                          <MdGroup className="cardcons" />
                          Group Size
                        </h3>
                        <p className="smallp">{tour.groupsize} </p>
                      </span>
                    </div>
                    <div className="footcards">
                      <p className="price">{tour.amount} </p>
                      <Link to="/tourdetail" className="butCard">
                        book now
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ==================================================== */}
        </div>
        <div className="tour-right">
          <form action="" className="right-form">
            <label htmlFor="" className="findd">
              FIND YOUR TOUR
            </label>
            <BiSearch className="srch-f" />
            <input type="text" placeholder="Search tour" />
            <MdLocationOn className="lct-f" />
            <input type="text" placeholder="Where to ?" />
            <FaCalendarAlt className="cld-f" />
            <select name="" id="">
              <option value="">Month</option>
            </select>
            <label htmlFor="" className="dra">
              Duration
            </label>
            <select name="" id="">
              <option value="">Any</option>
            </select>

            <div className="checkbox-item">
              <input type="checkbox" />
              <label for="cultural">Cultural</label>
            </div>

            <div className="checkbox-item">
              <input type="checkbox" />
              <label for="">Adventure</label>
            </div>

            <div className="checkbox-item">
              <input type="checkbox" />
              <label for="">Historical</label>
            </div>

            <div className="checkbox-item">
              <input type="checkbox" />
              <label for="">Seaside</label>
            </div>

            <div className="checkbox-item">
              <input type="checkbox" />
              <label for="">Discovery</label>
            </div>
            <input type="button" className="fnow" value="FIND NOW" />
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
                  <MdOutlineKeyboardArrowRight className="arrrw" /> Free travel
                  insurance
                </li>
                <li>
                  <MdOutlineKeyboardArrowRight className="arrrw" /> Hand-picked
                  tours & Activities
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
  );
};

export default Tour;
