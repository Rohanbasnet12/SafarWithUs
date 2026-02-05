import aboutImg from "../assets/images/agarzar-banner2.jpg";
import "../styles/Tourism.css";

function Tourism() {
  return (
    <section id="bestTimeToVisit">
      <div id="bestTimeToVisit-wrapper" className="best-time-grid">
        <div className="best-time-img-container">
          <div className="img">
            <img src={aboutImg} alt="Ranthambore National Park" />
          </div>
        </div>
        <div className="best-time-content">
          <div>
            <h3 className="best-time-title">
              Geographical Details About Ranthambore National Park
            </h3>

            <p className="best-time-text">
              Ranthambore National Park is a well-known and beautiful wildlife
              reserve in India. It lies in the Sawai Madhopur district of
              Rajasthan. The park is famous for its wide range of sceneries,
              which include meadows, lakes, deep forests, and rocky hills. It is
              also home to the beautiful Bengal tiger and a wide range of plants
              and animals.
            </p>
            <p className="mb-3">
              Here’s a quick look at some key geographical details about
              Ranthambore:
            </p>
            <ul className="space-y-2 mb-3">
              <li>Total Forest Area: 1,536 square kilometers.</li>
              <li>Core Important: 716 square kilometers</li>
              Types of Forest: Sal, mixed vegetation, open grasslands, and
              tropical moist deciduous forests
              <li>
                Major Rivers: Johilla, Janadh, Charanganga, Damnar, Banbei,
                Ambanala, and Andhiyari Jhiria
              </li>
              <li>
                Main Hill: Ranthambore Hill is 811 meters above sea level.
              </li>
              <li>
                Temperature Ranges: Maximum 40 degrees Celsius in summer and a
                maximum of 10 degrees Celsius in winter.
              </li>
              <li>Rainfall: About 1,133 mm a year on average</li>
            </ul>
          </div>
        </div>
      </div>
      <p>
        Ranthambore is a beautiful place where nature and wilderness can live
        together in peace. Its rolling hills and many ecosystems make it a great
        example of this. Photographers and ecotourists will love this park
        because it has a lot of lakes and wooded slopes that attract migratory
        birds.
      </p>
    </section>
  );
}

export default Tourism;
