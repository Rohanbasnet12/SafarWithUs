import Header from "../Header";
import ImportantLinks from "../ImportantLinks";
import Footer from "../Footer";
import bestTimeBanner from "../../assets/images/main-banner.jpg";

const JeepSafari = () => {
  return (
    <>
      <Header />
      <div>
        <img
          src={bestTimeBanner}
          className="timeToVisit"
          alt="Best Time To Visit banner image"
        />
      </div>

      <div className="main">
        <h1 className="text-center text-amber-800 text-2xl md:text-3xl my-3">
          Jeep Safari in Ranthambore National Park
        </h1>
        <main className="container mx-auto px-4 py-8">
          <h4 className="text-xl font-semibold my-3 text-amber-800">
            Ranthambore National Park Jeep Safari Pricing & Safari Zones
          </h4>
          <div>
            <table className="w-full border border-gray-800 rounded-lg text-sm border-collapse">
              <tbody className="divide-y divide-gray-300">
                <tr className="border-b border-gray-400">
                  <td className="font-semibold p-3 bg-gray-100 border-r border-gray-400">
                    Pricing (Indian)
                  </td>
                  <td className="p-3">
                    INR 2000 / - Seat (one Jeep may hold a maximum of 6 people
                    and 2 children between the ages of 0 and 5)
                  </td>
                </tr>

                <tr className="border-b border-gray-400">
                  <td className="font-semibold p-3 bg-gray-100 border-r border-gray-400">
                    Pricing (Foreigner)
                  </td>
                  <td className="p-3">
                    INR 4200 per seat (maximum of six people and two children
                    between the ages of 0 and 5) are permitted in one Jeep.
                  </td>
                </tr>

                <tr className="border-b border-gray-400">
                  <td className="font-semibold p-3 bg-gray-100 border-r border-gray-400">
                    Safari Zones
                  </td>
                  <td className="p-3">
                    1/2/3/4/5/6/7/8/9/10 <br />
                    <span className="text-gray-600 text-xs block">
                      (1/2/3/4/5 is Closed on Wednesdays) and (6/7/8/9/10 is
                      Closed on Tuesdays)
                    </span>
                    Only 6 to 10 zones are open during the Monsoon season, which
                    runs from July to September.
                  </td>
                </tr>

                <tr className="border-b border-gray-400">
                  <td className="font-semibold p-3 bg-gray-100 border-r border-gray-400">
                    Timings for Safari
                  </td>
                  <td className="p-3">
                    Morning: 7:00 AM to 10:30 AM; Evening: 2:00 PM to 5:30 PM
                    (Safari times change with the seasons)
                  </td>
                </tr>

                <tr className="border-b border-gray-400">
                  <td className="font-semibold p-3 bg-gray-100 border-r border-gray-400">
                    Inclusion
                  </td>
                  <td className="p-3">
                    Fees and taxes for the Ranthambore, Jeep, Driver, Permit,
                    and Guide. Pick-up and drop-off facilities are not included
                    from hotels.
                  </td>
                </tr>

                <tr className="border-b border-gray-400">
                  <td className="p-3" colSpan={2}>
                    If not booked due to seat unavailability or technical issue,
                    full refund is provided.
                  </td>
                </tr>

                <tr>
                  <td className="p-3" colSpan={2}>
                    Safari entry/exit timings depend on sunrise & sunset.
                  </td>
                </tr>
              </tbody>
            </table>

            <h4 className="text-xl font-semibold my-3 text-amber-800">
              Jeep Safari Entry Timings
            </h4>

            <table className="w-full border border-gray-800 rounded-lg text-sm border-collapse">
              <tbody>
                <tr className="border-b border-gray-400">
                  <td className="p-3 border-r border-gray-400">
                    Starting from 1st October to 31st October
                  </td>
                  <td className="p-3">06.30–10.00 AM & 02.30–06.00 PM</td>
                </tr>

                <tr className="border-b border-gray-400">
                  <td className="p-3 border-r border-gray-400">
                    Starting from 1st November to 31st January
                  </td>
                  <td className="p-3">07.00–10.30 AM & 02.00–05.30 PM</td>
                </tr>

                <tr className="border-b border-gray-400">
                  <td className="p-3 border-r border-gray-400">
                    Starting from 1st April to 15th May
                  </td>
                  <td className="p-3">06.30–10.00 AM & 02.30–06.00 PM</td>
                </tr>

                <tr className="border-b border-gray-400">
                  <td className="p-3 border-r border-gray-400">
                    Starting from 16th May to 30th June
                  </td>
                  <td className="p-3">06.00–09.30 AM & 03.00–06.30 PM</td>
                </tr>

                <tr>
                  <td className="p-3 border-r border-gray-400">
                    16 May - 30 June
                  </td>
                  <td className="p-3">06.00–09.30 AM & 03.30–07.00 PM</td>
                </tr>
              </tbody>
            </table>
            <p className="mb-2">
              Ranthambore National Park, which lies in the Sawai Madhopur region
              of Rajasthan, is one of the most popular places in India to see
              wildlife. Rajasthan&apos;s kings used to hunt in this area, but
              now it is a protected area for some of the most beautiful wild
              animals, including the Royal Bengal Tiger, which lives here in
              large numbers.
            </p>
            <p className="mb-2">
              People from all over the world come to Ranthambore every year to
              go on exhilarating jeep and canter safaris, with the chance to see
              tigers being the best part.
            </p>
          </div>

          <div>
            <h5 className="text-xl text-amber-800 font-semibold mb-2">
              About the Jeep Safari Experience
            </h5>
            <p className="mb-2">
              The most common method to see Ranthambore is on a jeep safari.
              There are two safaris per day, one in the morning and one in the
              evening. The forest department lets a small number of cars in
              during each shift:
            </p>
            <ul className="mb-2 space-y-2">
              <li>20 Jeeps (maximum 6 people)</li>
              <li>20 Canters (20 seats)</li>
            </ul>
            <p className="mb-2">
              Canters are better for bigger groups, whereas jeeps are better for
              smaller groups. Both are open on all sides, so you can see the
              park&apos;s beautiful scenery and wildlife well.
            </p>
          </div>

          <div>
            <h5 className="text-xl text-amber-800 font-semibold mb-2">
              Safari Zones in Ranthambore
            </h5>
            <p className="mb-2">
              The Ranthambore National Park is divided into 10 safari zones to
              conserve the ecology and make the experience better for visitors.
              Each zone has its own unique landscapes, bodies of water, and
              chances to see wildlife. This zoning scheme also helps spread out
              tourists, which is better for the ecology and makes it more likely
              that you&apos;ll see tigers.
            </p>
            <p className="mb-2">
              The route can&apos;t be adjusted after your vehicle and zone have
              been assigned. You can only make a modification in very special
              cases, and it normally costs an extra price of about ₹1,000. The
              forest authority always makes the ultimate decision.
            </p>
          </div>

          <div>
            <h5 className="text-xl text-amber-800 font-semibold mb-2">
              Online Jeep Safari Booking Guide
            </h5>
            <p className="mb-2">
              The best way to plan your vacation to Ranthambore is to book your
              safari ahead of time. This is especially true during peak season
              when it&apos;s very hard to acquire last-minute openings.
            </p>
            <p className="mb-2">You may make a reservation through:</p>
            <ul className="mb-2 space-y-2">
              <li>The official website for booking, or</li>
              <li>
                Verified tour providers (like us) who offer full Ranthambore
                packages and wildlife trips.
              </li>
            </ul>
            <p className="mb-2">
              You can book your Ranthambore Safari adventure with us; we are
              well-known tour operators, arranging the best experience for you.{" "}
              <br />
              You should book up to 90 days in advance. Furthermore, you should
              book at least 30 to 60 days ahead of time during the hot season,
              which runs from November to March. When you book, you will need to
              give your ID and pay in full advance.
            </p>
          </div>

          <div>
            <h5 className="text-xl text-amber-800 font-semibold mb-2">
              Important Booking Guidelines
            </h5>
            <p className="mb-2">You may make a reservation through:</p>
            <ul className="mb-2 space-y-2">
              <li>Zones are distributed according to availability.</li>
              <li>
                There are two zone groups available to visitors: 1–6 and 7–10.
              </li>
              <li>
                Within the chosen group, a particular zone is assigned at
                random.
              </li>
              <li>
                Safari timings are rigorously controlled; entry is not permitted
                after the allotted time.
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-xl text-amber-800 font-semibold mb-2">
              Best Time to Visit Ranthambore for a Jeep Safari
            </h5>
            <p className="mb-2">
              The season you choose can have a significant impact on your safari
              experience:
            </p>
            <div>
              <h6 className="font-bold">Winter (November–February)</h6>
              <p>
                The most comfortable and well-liked time of year to go.
                Excellent weather, a large number of visitors, and a high
                likelihood of seeing wildlife.
              </p>
            </div>
            <div>
              <h6 className="font-bold">Summer (March-June)</h6>
              <p>
                Because there is little vegetation and animals congregate near
                water sources, it is hot but ideal for tigers and other wildlife
                sightings.
              </p>
            </div>
            <div>
              <h6 className="font-bold">Monsoon (July–September)</h6>
              <p>A portion of the park is closed.</p>
              <ul>
                <li>Zones 1–6 are still closed.</li>
                <li>
                  Zones 7–10 might stay open, but in the event of significant
                  rainfall, they might close. Refunds are given in these
                  situations.
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-amber-800">
                Why Ranthambore Safari Is a Must-Do?
              </h4>
              <p className="mb-2">
                It is highly advised to book safaris and lodging in advance
                because weekends and the winter months draw large crowds.
              </p>

              <div>
                <h5 className="font-bold text-amber-800 mb-3">
                  Highlights that leave a lasting impression of Ranthambore:
                </h5>
                <ul>
                  <li>
                    Jeep or canter safaris offer a high chance of seeing Royal
                    Bengal Tigers in their native environment.
                  </li>
                  <li>
                    Experienced drivers and guides who are knowledgeable about
                    tracking and wildlife behavior lead safaris.
                  </li>
                  <li>
                    Access to the revered Trinetra Ganesh Temple and the
                    UNESCO-designated Ranthambore Fort are available in certain
                    safari zones.
                  </li>
                  <li>
                    Lots of chances to take pictures of wildlife—cars stop at
                    safe spots so you have time to get the ideal shot.
                  </li>
                </ul>
                <p>
                  Apart from Ranthambore, you also explore the breathtaking
                  landscapes of other national parks with us. For example, Jim
                  Corbett National Park, Kaziranga National Park, Pench National
                  Park, Kanha National Park, etc.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>

      <ImportantLinks />
      <Footer />
    </>
  );
};

export default JeepSafari;
