import { Link } from "react-router-dom";

function ImportantLinks() {
  return (
    <section className="links-container">
      <div className="links-wrapper">
        {/* Safari Zones */}
        <div className="link-section">
          <h6 className="link-heading">Ranthambore Tour Packages</h6>
          <ul className="link-list">
            <li>
              <Link to="/9-day-Golden-Triangle-Wildlife-Tour-Package">
                9-Day Golden Triangle & Wildlife Tour Package
              </Link>
            </li>
            <li>
              <Link to="/11-day-Golden-Triangle-Wildlife-Tour-Package">
                11-Day Golden Triangle & Wildlife Tour Package
              </Link>
            </li>
            <li>
              <Link to="/6-day-Golden-Triangle-Wildlife-Tour-Package">
                6-Day Golden Triangle & Wildlife Tour Package
              </Link>
            </li>
            <li>
              <Link to="/7-day-Heritage-Tour-Package">
                7-Day Heritage Tour Package
              </Link>
            </li>
            <li>
              <Link to="/weekend-Wildlife-Tour-Package">
                Weekend Wildlife Getaway Tour Package
              </Link>
            </li>
            <li>
              <Link to="/6-day-delhi-ranthambore-Wildlife-Tour-Package">
                6-Day Delhi & Wildlife Tour Package
              </Link>
            </li>
            <li>
              <Link to="/8-day-golden-Triangle-Tour-Package">
                8-Day Golden Triangle Tour Package
              </Link>
            </li>
          </ul>
        </div>

        {/* Safari Information */}
        <div className="link-section">
          <h6 className="link-heading">Ranthambore Safari</h6>
          <div className="link-list-wrapper">
            <ul className="link-list">
              <li>
                <Link to="/ranthambore-geography">Ranthambore Geography</Link>
              </li>
              <li>
                <Link to="/best-places-to-visit">Best Places To Visit</Link>
              </li>
              <li>
                <Link to="/raj-palace-resort">Raj Palace Resort</Link>
              </li>
              <li>
                <Link to="/chambal-boat-safari">Chambal Boat Safari</Link>
              </li>
              <li>
                <Link to="/ranthambore-fort">Ranthambore Fort</Link>
              </li>
              <li>
                <Link to="/nahargarh-ranthambhore">Nahargarh Ranthambhore</Link>
              </li>
              <li>
                <Link to="/ranthambore-safari">Ranthambore Safari</Link>
              </li>
            </ul>
            <ul className="link-list">
              <li>
                <Link to="/anuraga-palace">Anuraga Palace</Link>
              </li>
              <li>
                <Link to="/tiger-den-resort">Tiger Den Resort</Link>
              </li>
              <li>
                <Link to="/aman-i-khas">Aman I Khas</Link>
              </li>
              <li>
                <Link to="/best-tiger-zone">Best Tiger Zones</Link>
              </li>
              <li>
                <Link to="/how-to-reach">How to Reach</Link>
              </li>
              <li>
                <Link to="/best-time-to-visit">Best Time to Visit</Link>
              </li>
              <li>
                <Link to="/hotel-dev-vilas">Hotel Dev Vilas</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Jim Corbett Information */}
        <div className="link-section">
          <h6 className="link-heading">Jim Corbett Information</h6>
          <div className="link-list-wrapper">
            <ul className="link-list">
              <li>
                <Link to="/terms-conditions">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/refund">Refund Policy</Link>
              </li>
              <li>
                <Link to="/jeep-safari">Jeep Safari</Link>
              </li>
              <li>
                <Link to="/canter-safari">Canter Safari</Link>
              </li>
              <li>
                <Link to="/ranthambore-history">Ranthambore History</Link>
              </li>
            </ul>
            <ul className="link-list">
              <li>
                <Link to="/faq">Ranthambore FAQs</Link>
              </li>
              <li>
                <Link to="/birdwatching">Bird Watching</Link>
              </li>
              <li>
                <Link to="/flora">Ranthambore Flora</Link>
              </li>
              <li>
                <Link to="/fauna">Ranthambore Fauna</Link>
              </li>
              <li>
                <Link to="/ranthambore-permit-tips">
                  Ranthambore Permit Tips
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImportantLinks;
