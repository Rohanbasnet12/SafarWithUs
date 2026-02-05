import React from "react";
import map from "../assets/images/map.jpg";
import wild from "../assets/images/tour-package2.webp";
function GeographicalDetails() {
  return (
    <>
      <section id="geographicalsection">
        <div className="container geographical">
          <div className="row">
            <h3 style={{ textDecoration: "underline" }}>Geographical Details about Tadoba</h3>
            <div className="col-lg-6 col-md-6 col-sm-12" style={{ placeContent: "center" }}>
              <ul>
                <li><b>Total Forest Area</b> – 1536 Square Kilometres</li>
                <li><b>Core Area</b> – 716 square kilometres</li>
                <li>
                  <b>Type of Forest</b> – tropical moist, deciduous forests with sal,
                  mixed forest.
                </li>
                <li>
                  <b>Rivers</b> – Johilla, janadh, charanganga, Damnar, Banbei,
                  Ambanala and Andhiyari Jhiria
                </li>
                <li><b>Hills</b> – Tadoba hill, rising 811 meters above sea level</li>
                <li>
                  <b>Temperature</b> – maximum 40 degree Celsius in summer and 8 degree
                  in winter
                </li>
                <li>
                  <b>Annual Rainfall</b> – The average rainfall of Tadoba National Park
                  is 1133mm
                </li>
              </ul>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12">
              <img className="map" src={map} alt="" />
            </div>
          </div>

          <h3 className="roadData" style={{ textAlign: "right", textDecoration: "underline" }}>
            Road Distance from Tadoba to following Cities
          </h3>
          <div className="row geographicalData">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <img className="wildImg" src={wild} alt="" />
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12" style={{ placeContent: "center" }}>
              <ul>
                <li>Distance from Nagpur <b>140 km</b></li>
                <li>Distance from Pune <b>742 km</b></li>
                <li>Distance from Mumbai <b>856 km</b></li>
                <li>Distance from Gwalior <b>850 km</b></li>
                <li>Distance from Navi Mumbai <b>858 km</b></li>
                <li>Distance from Indore <b>856 km</b></li>
                <li>Distance from Indore <b>856 km</b></li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12" style={{ placeContent: "center" }}>
              {" "}
              <ul>
                <li>Distance from Nagpur <b>140 km</b></li>
                <li>Distance from Pune <b>742 km</b></li>
                <li>Distance from Mumbai <b>856 km</b></li>
                <li>Distance from Gwalior <b>850 km</b></li>
                <li>Distance from Navi Mumbai <b>858 km</b></li>
                <li>Distance from Indore <b>856 km</b></li>
                <li>Distance from Indore <b>856 km</b></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default GeographicalDetails;
