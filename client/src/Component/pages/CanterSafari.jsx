import ImportantLinks from "../ImportantLinks";
import Header from "../Header";
import Footer from "../Footer";
import canterBanner from "../../assets/images/canter-banner.jpg";
import canter from "../../assets/images/canter.jpg";
function CanterSafari() {
  return (
    <>
      <Header />
      <section>
        <div>
          <img
            src={canterBanner}
            className="canterBanner"
            alt="Canter safari banner image"
          />
        </div>
      </section>
      <section className="pb-4 leaf">
        <div className="container">
          <h1 className="text-center text-amber-800 text-2xl md:text-3xl my-3">
            Ranthambore Canter Safari: Online Booking Guide
          </h1>

          <div className="row">
            <div>
              <table className="w-full border border-gray-800 rounded-lg text-sm border-collapse">
                <thead>
                  <tr>
                    <td
                      colSpan={2}
                      className="font-bold bg-amber-700 text-white p-2"
                    >
                      Ranthambore National Park Canter Safari Price & Zone
                    </td>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-300">
                  <tr className="border-b border-gray-400">
                    <td className="font-semibold p-3 bg-gray-100 border-r border-gray-400">
                      Pricing (Indian)
                    </td>
                    <td className="p-3">
                      INR 1400 per person (20 seats in one canter)
                    </td>
                  </tr>

                  <tr className="border-b border-gray-400">
                    <td className="font-semibold p-3 bg-gray-100 border-r border-gray-400">
                      Pricing (Foreigner)
                    </td>
                    <td className="p-3">
                      INR 3500 per person (one Canter has 20 seats)
                    </td>
                  </tr>

                  <tr className="border-b border-gray-400">
                    <td className="font-semibold p-3 bg-gray-100 border-r border-gray-400">
                      Safari Zones
                    </td>
                    <td className="p-3">
                      1/2/3/4/5/6/9/10 <br />
                      <span className="text-gray-600 text-xs block">
                        Every Tuesday, 6, 7, 8, 9, and 10 are closed, while
                        every Wednesday, 1, 2, 3, 4, and 5 are closed.
                      </span>
                      Only 6 to 10 zones are open during the Monsoon season,
                      which lasts from July to September.
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
                      and Guide. Pick-up and drop-off facilities are not
                      included from hotels.
                    </td>
                  </tr>

                  <tr className="border-b border-gray-400">
                    <td className="p-3" colSpan={2}>
                      If your safari isn&apos;t booked because of a technical
                      mistake or a lack of seats, we&apos;ll give you back the
                      whole cost in your bank account. The same would be said in
                      the right way.
                    </td>
                  </tr>

                  <tr>
                    <td className="p-3" colSpan={2}>
                      The times for entering and leaving the safari in
                      Ranthambore are usually depending on when the sun rises
                      and sets. Most of the time, you may enter the park for the
                      first time half an hour after sunrise and leave for the
                      final time half an hour before sunset.
                    </td>
                  </tr>

                  <tr>
                    <td className="p-3" colSpan={2}>
                      If you choose Safari for 1 to 6 Zone, your safari will
                      take place in any one Zone, just like it would for Zone 7
                      to 10.
                    </td>
                  </tr>
                </tbody>
              </table>

              <h4 className="text-xl font-semibold my-3 text-amber-800">
                Jeep Safari Entry Timings
              </h4>

              <table className="w-full border border-gray-800 rounded-lg text-sm border-collapse">
                <thead>
                  <tr>
                    <td
                      colSpan={2}
                      className="font-bold bg-amber-700 text-white p-2"
                    >
                      Canter Safari Entry Timings
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-400">
                    <td className="p-3 border-r border-gray-400">
                      Starting from 1st October to 31st October
                    </td>
                    <td className="p-3">
                      06.30 am - 10.00 am and 02.30 pm - 06.00 pm
                    </td>
                  </tr>

                  <tr className="border-b border-gray-400">
                    <td className="p-3 border-r border-gray-400">
                      Starting from 1st November to 31st January
                    </td>
                    <td className="p-3">
                      07.00 am - 10.30 am and 02.00 pm to 05.30 pm
                    </td>
                  </tr>

                  <tr className="border-b border-gray-400">
                    <td className="p-3 border-r border-gray-400">
                      Starting from 1st February to 31st March
                    </td>
                    <td className="p-3">
                      06.30 am - 10.00 am and 02.30 pm to 06.00 pm
                    </td>
                  </tr>

                  <tr className="border-b border-gray-400">
                    <td className="p-3 border-r border-gray-400">
                      Starting from 1st April to 15th May
                    </td>
                    <td className="p-3">
                      06.00 am - 09.30 am and 03.00 pm to 06.30 pm
                    </td>
                  </tr>

                  <tr>
                    <td className="p-3 border-r border-gray-400">
                      Starting from 16th May to 30th June
                    </td>
                    <td className="p-3">
                      06.00 am - 09.30 am and 03.30 pm to 07.00 pm
                    </td>
                  </tr>
                </tbody>
              </table>
              <p className="mb-2">
                Ranthambore National Park is a prime example of tiger
                conservation and one of India&apos;s most famous wildlife
                destinations. Renowned for its exceptional chances of seeing the
                magnificent Royal Bengal Tiger, Ranthambore welcomes millions of
                wildlife enthusiasts each year. The untamed wilderness and
                exhilarating jungle safaris draw tourists from all over the
                world.
              </p>
              <p className="mb-2">
                Within the park, only Jeep Safaris and Canter Safaris are
                permitted. These provide a great chance to see the varied
                wildlife of Ranthambore, which includes tigers, leopards, jungle
                cats, striped hyenas, and many other amazing creatures.
              </p>
            </div>

            <div className="col-sm-12 col-md-8 col-lg-8">
              <h4 className="font-semibold text-amber-800 mb-3 text-xl">
                {" "}
                What is a Canter Safari?
              </h4>
              <p className="mb-2">
                A Canter is a safari vehicle with an open top and room for 20
                people, making it perfect for group trips. Ranthambore lets:
              </p>
              <p className="mb-2">
                20 Canters every shift Two shifts a day, one in the morning and
                one in the afternoon, which adds up to 40 Canter safaris a day.
              </p>
              <p className="mb-2">
                Canter safaris go to the same places and last the same amount of
                time as Jeep safaris. In fact, the higher seats often give you a
                better view, which makes it easier to see animals.
              </p>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
              <img
                src={canter}
                className="imgCanter"
                alt="canter safari image"
              />
            </div>
          </div>

          <section>
            <h4 className="font-semibold mb-3 text-amber-800">
              Safari Zones in Ranthambore
            </h4>
            <p className="mb-2">
              There are 10 safari zones in the park to prevent people from
              crowding and to conserve the forest environment. A computer
              mechanism at the entrance gate puts each Canter in a zone at
              random. Important Points:
            </p>
            <ul className="mb-3 space-y-2">
              <li>Zone allocation is simply based on availability.</li>
              <li>
                Visitors can pick either Zone 1–6 or Zone 7–10, depending on
                what is available.
              </li>
              <li>
                You can&apos;t modify a zone after you&apos;ve allocated it.
              </li>
              <li>
                You have a decent possibility of spotting a tiger in any of the
                zones because each one has its own group of tigers.
              </li>
            </ul>
          </section>

          <div>
            <h4 className="font-semibold mb-3 text-amber-800">
              Online Canter Safari Booking: Step-by-Step
            </h4>
            <p className="mb-2">
              Canter Safari seats fill up fast since a lot of people go past
              them, especially on weekends, holidays, and during the busy season
              from October to April. You should absolutely make plans for your
              safari ahead of time. Most of the time, your online booking
              includes:
            </p>

            <ul className="mb-3 space-y-2">
              <li>Entry Permit</li>
              <li>Seat on the Canter safari</li>
              <li>Guide Fees</li>
              <li>Verification of ID Proof</li>
            </ul>
            <p className="mb-2">
              You may book your Ranthambore Safari trip with us. We are
              well-known tour operators that will make sure you have the finest
              time possible.
            </p>
            <p className="mb-2">
              You should book up to 90 days ahead of time. Also, during the hot
              season, which lasts from November to March, you should book at
              least 30 to 60 days in advance. You will need to show your ID and
              pay in full when you book.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-amber-800">
              Important Note
            </h4>
            <p className="mb-2">
              Last-minute safari availability is very unlikely during the
              busiest tourist months and holidays. Making a reservation early
              guarantees a smooth and easy experience.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-amber-800">
              Things to Do and Not Do on a Ranthambore Canter Safari
            </h4>
            <p className="mb-2">
              A wildlife safari can be fun, but you also need to be responsible
              and aware. Following the rules keeps you and the animals safe.
            </p>
          </div>

          <div className="space-y-8">
            {/* What to Do */}
            <div className="bg-amber-50 py-2 px-3">
              <h3 className="text-xl font-semibold text-green-700 mb-3">
                What you should do:
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  <strong>Follow your guide&apos;s instructions:</strong> Guides
                  and naturalists know what to do when they see wild animals, so
                  pay attention.
                </li>
                <li>
                  <strong>Stay in the vehicle:</strong> Do not step outside;
                  it&apos;s risky.
                </li>
                <li>
                  <strong>Wear earthy colors:</strong> These blend with
                  surroundings and don’t attract attention.
                </li>
                <li>
                  <strong>Stay calm and avoid noise:</strong> Loud sounds can
                  disturb wildlife and provoke danger.
                </li>
              </ul>
            </div>

            {/* What NOT to Do */}
            <div className="bg-amber-50 py-2 px-3">
              <h3 className="text-xl font-semibold text-red-700 mb-3">
                What not to do:
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  <strong>Do not feed the animals:</strong> It disturbs their
                  natural behavior and can make them dependent.
                </li>
                <li>
                  <strong>Do not get too close:</strong> Even calm-looking
                  animals like tigers, elephants, and bears can become
                  aggressive.
                </li>
                <li>
                  <strong>No camera flash:</strong> Flash can startle animals
                  and cause risk for both sides.
                </li>
                <li>
                  <strong>Do not litter:</strong> Respect the forest and keep it
                  clean.
                </li>
              </ul>
            </div>

            <p className="text-gray-700">
              Apart from Ranthambore, you can also explore other beautiful
              national parks like
              <span className="font-medium">
                {" "}
                Jim Corbett, Kaziranga, Pench, Kanha
              </span>{" "}
              and many more.
            </p>
          </div>
        </div>
      </section>
      <ImportantLinks />
      <Footer />
    </>
  );
}

export default CanterSafari;
