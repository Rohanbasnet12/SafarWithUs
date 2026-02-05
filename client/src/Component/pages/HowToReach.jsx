import Header from "../Header";
import Footer from "../Footer";
import reachBanner from "../../assets/images/reach-banner.jpg";
import reach1 from "../../assets/images/reach.jpg";
import reach2 from "../../assets/images/reach2.jpg";
import ImportantLinks from "../ImportantLinks";
function HowToReach() {
  return (
    <>
      <Header />
      <div>
        <img
          src={reachBanner}
          className="reachBanner"
          alt="things banner image"
        />
      </div>
      <section className="pb-4 leaf">
        <div className="container">
          <div>
            <h1>
              How to Get to Ranthambore National Park: By Air, Rail, and Road
            </h1>
            <p>
              Ranthambore National Park is one of India&apos;s most famous
              wildlife preserves. It is in the Sawai Madhopur area of Rajasthan.
              People come from all over the world to Ranthambore to observe the
              many animals that live there, and maybe even the rare Royal Bengal
              Tiger. Getting to the park is easy by any form of transportation
              because it is close to many major Indian cities. Let&apos;s take a
              closer look at the different methods to go to this amazing
              wildlife destination.
            </p>
          </div>
          <div className="thingsImgBox">
            <img src={reach1} className="thingsImg" alt="things image" />
            <img src={reach2} className="thingsImg" alt="things image" />
          </div>

          <div>
            <h4>By Air: The Nearest Airports to Ranthambore</h4>
            <p>
              If you&apos;re flying to Ranthambore, the closest airport is Kota
              Airport, which is about 143 miles away. That said, the Jaipur
              International Airport is the best choice for most travelers
              because it is approximately 167 km distant from the park. Not only
              people from India, but also people from all over the world like to
              start their trips in Jaipur because it is easy to get to and has a
              lot of flight alternatives. There are regular flights to many big
              cities, such as Delhi, Mumbai, Kolkata, Bengaluru, and Chennai.
              You can take a cab or a train from Jaipur International Airport to
              Sawai Madhopur, which is the gateway to Ranthambore.
            </p>
            <p>
              Another great option for international travelers is Indira Gandhi
              International Airport in Delhi. The rest of the route, which is
              about 350 km, can be done by road or train.
            </p>

            <div>
              <h3>Airports Near Ranthambore:</h3>
              <div>
                <table className="table table-bordered text-center">
                  <thead className="table-light">
                    <tr>
                      <th>Airport</th>
                      <th>Distance</th>
                      <th>Type</th>
                    </tr>
                  </thead>
                  <tdody>
                    <tr>
                      <td>Jaipur International Airport</td>
                      <td>167 km</td>
                      <td>International</td>
                    </tr>
                    <tr>
                      <td>Kota Airport</td>
                      <td>143 km</td>
                      <td>Domestic</td>
                    </tr>
                    <tr>
                      <td>Indira Gandhi International Airport (Delhi)</td>
                      <td>350 km</td>
                      <td>International</td>
                    </tr>
                    <tr>
                      <td>Gwalior Airport</td>
                      <td>274 km</td>
                      <td>Domestic & Air Force Base</td>
                    </tr>
                    <tr>
                      <td>Maharana Pratap Airport (Udaipur)</td>
                      <td>386 km</td>
                      <td>Domestic</td>
                    </tr>
                    <tr>
                      <td>Jodhpur Airport</td>
                      <td>440 km</td>
                      <td>Domestic</td>
                    </tr>
                    <tr>
                      <td>
                        Sardar Vallabhbhai Patel International Airport
                        (Ahmedabad)
                      </td>
                      <td>651 km</td>
                      <td>International</td>
                    </tr>
                    <tr>
                      <td>Jaisalmer Airport</td>
                      <td>732 km</td>
                      <td>Civil/Domestic</td>
                    </tr>
                  </tdody>
                </table>
              </div>
            </div>
            <p>
              If you want the easiest travel, Jaipur is the place to go. You can
              get to Ranthambore by car or train in 3 to 4 hours from there.
            </p>

            <h4>By Rail: The Most Convenient Option</h4>
            <p>
              TTaking the train to Ranthambore is one of the most pleasant and
              economical methods to get to the park. The Sawai Madhopur Railway
              Station is the closest railhead to the park, only eleven
              kilometers away from the entrance. This station is well-connected
              to major cities such as Delhi, Jaipur, Mumbai, and Surat, with
              several trains running daily. Not only that, but it is one of the
              most tourist-friendly train stations in all of India and a
              historic site.
            </p>
            <p>
              Visitors can board one of India&apos;s many luxury trains that
              stop here on their way to Ranthambore for a truly royal
              experience. The Palace on Wheels, royal Rajasthan on Wheels,
              Maharaja Express, and The Indian Maharaja are some of them. You
              may take a train to Jaipur Junction, which is 175 km distant, and
              then continue by road if you can&apos;t locate a direct train to
              Sawai Madhopur.
            </p>

            <h4>Important Railway Stations near Ranthambore:</h4>
            <ul>
              <li>Sawai Madhopur Railway Station: 11.3 km</li>
              <li>Jaipur Junction: 175 kilometers</li>
              <li>New Delhi Railway Station: 364 km</li>
            </ul>
            <p>
              Due to the popularity of Ranthambore safaris, travelers make
              advance plans to purchase train tickets during the
              November–February peak wildlife season. If you are unable to find
              a direct train to Sawai Madhopur, you can take one to Jaipur
              Junction, which is 175 km away, and then continue by road.
            </p>
          </div>
          <div>
            <h4>By Road: A Scenic Drive Through Rajasthan</h4>
            <p>
              If you like to see new places, driving to Ranthambore is a great
              way to do it. A network of national and state roads connects the
              park to major cities like Jaipur, Delhi, Agra, Kota, and Ajmer,
              making it easy to get there.
            </p>
            <p>
              Two choices are available to you: private cabs and the Rajasthan
              State Road Transport Corporation (RSRTC) buses. It&apos;s fun to
              drive through cute little towns and beautiful rural areas, and the
              roads are usually in good shape.
            </p>
            <div>
              <h3 className="text-lg font-semibold mb-3">
                Road Distances from Major Cities:
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full border border-gray-300 text-center">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border p-2">City</th>
                      <th className="border p-2">Distance</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border p-2">Jaipur</td>
                      <td className="border p-2">160 kilometers</td>
                    </tr>
                    <tr>
                      <td className="border p-2">Agra</td>
                      <td className="border p-2">239 kilometers</td>
                    </tr>
                    <tr>
                      <td className="border p-2">Gwalior</td>
                      <td className="border p-2">264 kilometers</td>
                    </tr>
                    <tr>
                      <td className="border p-2">Delhi</td>
                      <td className="border p-2">381 kilometers</td>
                    </tr>
                    <tr>
                      <td className="border p-2">Udaipur</td>
                      <td className="border p-2">388 kilometers</td>
                    </tr>
                    <tr>
                      <td className="border p-2">Jodhpur</td>
                      <td className="border p-2">456 kilometers</td>
                    </tr>
                    <tr>
                      <td className="border p-2">Ahmedabad</td>
                      <td className="border p-2">659 kilometers</td>
                    </tr>
                    <tr>
                      <td className="border p-2">Vadodara</td>
                      <td className="border p-2">667 kilometers</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <p>
              NH 148N, SH 122, Bikaner-Agra Road (NE 4), and NH 48 are some of
              the roadways that go to Ranthambore. If you want to take a relaxed
              three- to four-hour drive through gorgeous rural Rajasthan, the
              Jaipur–Tonk–Sawai Madhopur road is a good choice.
            </p>
          </div>
          <div>
            <h4>Your Pathway to the Land of Tigers</h4>
            <p>
              No matter where you’re coming from, accessing Ranthambore National
              Park is uncomplicated and hassle-free. You can simply organize
              your trip to this tiger paradise since it is easy to get there by
              air, train, or road. Your experience really starts when you start
              your trip to Ranthambore, whether you fly into Jaipur, ride a
              train into the desert, or drive along Rajasthan&apos;s roads.
              Apart from Ranthambore, you also explore the breathtaking
              landscapes of other national parks with us. For example, Jim
              Corbett National Park, Kaziranga National Park, Pench National
              Park, Kanha National Park, etc.
            </p>
          </div>
        </div>
      </section>
      <ImportantLinks />
      <Footer />
    </>
  );
}

export default HowToReach;
