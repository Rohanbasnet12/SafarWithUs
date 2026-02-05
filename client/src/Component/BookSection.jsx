import bandhav from "../assets/images/tadobazone.jpg";
import "../styles/BookSection.css";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

function BookSection() {
  return (
    <>
      <div id="bookSection">
        <div id="bookSection-bannerImg">
          <img src={bandhav} alt="Bandhavgarh" />
        </div>
        <div id="bookSection-content">
          <h2>Ranthambore National Park</h2>
          <div>
            <p>
              Ranthambore National Park is a wildlife reserve in the Sawai
              Madhopur district of Rajasthan, India. It was established in 1981
              and covers an area of approximately 1,334 square kilometers. The
              park is known for its large population of Bengal tigers, as well
              as other wildlife such as leopards, sloth bears, and several
              species of deer and birds. It is also home to the historic
              Ranthambore Fort.
            </p>
          </div>
          <button id="bookNowBtn" className="about-explore-btn">
            <Link to="/safari-booking" className="flex items-center gap-2">
              Book Now{" "}
              <span>
                <FaChevronRight style={{ transform: "scale(0.9)" }} />
              </span>
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default BookSection;
