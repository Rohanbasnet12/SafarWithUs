import ImportantLinks from "../ImportantLinks";
import Header from "../Header";
import Footer from "../Footer";
import reachBanner from "../../assets/images/reach-banner.jpg";

function FourteenDayGoldenTriangleWildlifeTour() {
  return (
    <>
      <Header />
      <div>
        {/* Header */}
        <div>
          <img
            src={reachBanner}
            alt={`Banner for ${reachBanner}`}
            className="h-[40vh] w-full"
          />
          <h1 className="text-3xl md:text-4xl text-center font-bold my-2 text-amber-900">
            14-Day India Wildlife & Heritage Tour Package
          </h1>
        </div>

        <main className="container mx-auto px-4 py-8">
          {/* Tour Days */}
          <section className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Day 1 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-amber-200">
                <div className="bg-amber-600 text-white px-4 py-3">
                  <h3 className="text-xl font-bold">
                    Day 01: Welcome to Delhi: The Gateway to India
                  </h3>
                </div>
                <div className="p-3">
                  <p className="mb-3">
                    When you arrive at Delhi airport, one of our representatives
                    will be there to meet you with a grin. After your flight,
                    you&apos;ll be taken straight to your hotel so you can
                    relax. You might have a cup of spiced Indian chai or a light
                    meal at your hotel&apos;s restaurant. It&apos;s your first
                    night in India, so relax and get ready for the fun things
                    that are coming up!
                  </p>
                </div>
              </div>

              {/* Day 2 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-amber-200">
                <div className="bg-amber-600 text-white px-4 py-3">
                  <h3 className="text-xl font-bold">
                    Day 02: Exploring Old & New Delhi
                  </h3>
                </div>
                <div className="p-3">
                  <p className="mb-3">
                    After breakfast, go see the many different sides of Delhi.
                    Go to the Red Fort, the Jama Masjid, and the busy Chandni
                    Chowk. After that, visit Humayun&apos;s Tomb, the
                    President&apos;s House, India Gate, and Qutub Minar. Go back
                    to your hotel for dinner and the night.
                  </p>
                </div>
              </div>

              {/* Day 3 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-amber-200">
                <div className="bg-amber-600 text-white px-4 py-3">
                  <h3 className="text-xl font-bold">
                    Day 03: Delhi to Jaipur: The Pink City
                  </h3>
                </div>
                <div className="p-3">
                  <p className="mb-3">
                    After breakfast, drive to Jaipur. When you get there, check
                    in and then go to the City Palace, Jantar Mantar, and Hawa
                    Mahal. Before going back to your accommodation, check out
                    Jaipur&apos;s colorful markets. Stay the night in Jaipur.
                  </p>
                </div>
              </div>

              {/* Day 4 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-amber-200">
                <div className="bg-amber-600 text-white px-4 py-3">
                  <h3 className="text-xl font-bold">
                    Day 04: Jaipur Sightseeing
                  </h3>
                </div>
                <div className="p-3">
                  <p className="mb-3 font-semibold text-amber-800">
                    Go to the beautiful Amber Fort, which is famous for its
                    royal halls and mirror palace. Take pictures at Jal Mahal,
                    then go to the City Palace Museum and Jantar Mantar. Have
                    some spare time to shop for fabrics and handicrafts. Stay
                    the night in Jaipur.
                  </p>
                </div>
              </div>

              {/* Day 5 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-amber-200">
                <div className="bg-amber-600 text-white px-4 py-3">
                  <h3 className="text-xl font-bold">
                    Day 05: Jaipur to Ranthambore
                  </h3>
                </div>
                <div className="p-3">
                  <p className="mb-3">
                    After breakfast, go to the national park of Ranthambore.
                    Check in, relax, and get ready for your evening jeep safari.
                    Look out for tigers, deer, and birds that aren&apos;t
                    common. Dinner and a night at the resort.
                  </p>
                </div>
              </div>

              {/* Day 6 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-amber-200">
                <div className="bg-amber-600 text-white px-4 py-3">
                  <h3 className="text-xl font-bold">
                    Day 06: Wildlife Safaris in Ranthambore
                  </h3>
                </div>
                <div className="p-3">
                  <p className="mb-3">
                    Early morning jeep safari across the wilds of Ranthambore.
                    See Royal Bengal Tigers, Sloth Bears, and other animals.
                    Take it easy at the resort after breakfast. Later, go on an
                    evening canter safari. Stay the night at Ranthambore.
                  </p>
                </div>
              </div>

              {/* Day 7 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-amber-200">
                <div className="bg-amber-600 text-white px-4 py-3">
                  <h3 className="text-xl font-bold">
                    Day 07: Ranthambore to Bharatpur
                  </h3>
                </div>
                <div className="p-3">
                  <p className="mb-3">
                    After breakfast, drive to the Bharatpur Bird Sanctuary.
                    Check in, relax, then go on an evening birding walk through
                    the wetlands, where you may see pelicans, cranes, and more.
                    Stay the night at Bharatpur.
                  </p>
                </div>
              </div>

              {/* Day 8 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-amber-200">
                <div className="bg-amber-600 text-white px-4 py-3">
                  <h3 className="text-xl font-bold">
                    Day 08: Bharatpur to Agra
                  </h3>
                </div>
                <div className="p-3">
                  <p className="mb-3">
                    This morning, take a quiet rickshaw ride around the
                    sanctuary, then travel to Agra. Check in and take it easy.
                    You can see the Taj Mahal at dusk from across the Yamuna
                    River. Stay in Agra for the night.
                  </p>
                </div>
              </div>

              {/* Day 9 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-amber-200">
                <div className="bg-amber-600 text-white px-4 py-3">
                  <h3 className="text-xl font-bold">
                    Day 09: Visit Agra and then go to Khajuraho.
                  </h3>
                </div>
                <div className="p-3">
                  <p className="mb-3">
                    A great thing to do is see the Taj Mahal at sunrise. Before
                    going on to Khajuraho, stop by Agra Fort. Check in and relax
                    for the night. Stay overnight at Khajuraho.
                  </p>
                </div>
              </div>

              {/* Day 10 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-amber-200">
                <div className="bg-amber-600 text-white px-4 py-3">
                  <h3 className="text-xl font-bold">
                    Day 10: From Khajuraho to Bandhavgarh
                  </h3>
                </div>
                <div className="p-3">
                  <p className="mb-3">
                    Visit the beautiful Khajuraho Temples, which are known for
                    their sculptures and paintings. After that, go to
                    Bandhavgarh National Park. Check in at your hotel. Dinner
                    and a night in Bandhavgarh.
                  </p>
                </div>
              </div>

              {/* Day 11 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-amber-200">
                <div className="bg-amber-600 text-white px-4 py-3">
                  <h3 className="text-xl font-bold">
                    Day 11: Bandhavgarh safaris
                  </h3>
                </div>
                <div className="p-3">
                  <p className="mb-3">
                    Bandhavgarh is one of India&apos;s best tiger reserves, and
                    you may go on jeep safaris in the morning and evening. In
                    the thick jungle, you can see tigers, leopards, and deer.
                    Stay at the resort for the night.
                  </p>
                </div>
              </div>

              {/* Day 12 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-amber-200">
                <div className="bg-amber-600 text-white px-4 py-3">
                  <h3 className="text-xl font-bold">
                    Day 12: From Bandhavgarh to Kanha
                  </h3>
                </div>
                <div className="p-3">
                  <p className="mb-3">
                    After breakfast, drive to Kanha National Park, which is
                    famous for being the setting for The Jungle Book. Check in
                    and relax in the middle of the wilderness. Stay in Kanha for
                    the night.
                  </p>
                </div>
              </div>

              {/* Day 13 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-amber-200">
                <div className="bg-amber-600 text-white px-4 py-3">
                  <h3 className="text-xl font-bold">
                    Day 13: Wildlife in Kanha
                  </h3>
                </div>
                <div className="p-3">
                  <p className="mb-3">
                    Jeep safaris in Kanha in the morning and evening. Be on the
                    lookout for tigers, wild dogs, and barasingha (swamp deer).
                    At the resort, you may enjoy meals and a quiet evening. Stay
                    the night in Kanha.
                  </p>
                </div>
              </div>

              {/* Day 14 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-amber-200">
                <div className="bg-amber-600 text-white px-4 py-3">
                  <h3 className="text-xl font-bold">
                    Day 14: Go back to Delhi
                  </h3>
                </div>
                <div className="p-3">
                  <p className="mb-3">
                    After breakfast, check out and drive or fly back to Delhi to
                    continue your trip. The tour closes with memories of
                    India&apos;s culture and wildlife that will last a lifetime.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Inclusions & Exclusions */}
          <section className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Inclusions */}
              <div className="bg-gradient-to-b from-green-50 to-white py-2 px-3 rounded-lg shadow-md border border-green-200">
                <h2 className="text-2xl font-bold text-green-800 mb-6 pb-2 border-b border-green-300">
                  What is Included in Your 14-Day India Wildlife & Heritage Tour
                  Package?
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">✓</span>
                    <span>
                      13 nights of lodging (sharing a room with two or three
                      other people)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">✓</span>
                    <span>Breakfast and supper every day</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">✓</span>
                    <span>7 Jeep Safaris and 1 Canter Safari</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">✓</span>
                    <span>Guides who are experts in nature on safaris</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">✓</span>
                    <span>
                      Free access to the resort&apos;s swimming pool and other
                      activities
                    </span>
                  </li>
                </ul>
              </div>

              {/* Exclusions */}
              <div className="bg-gradient-to-b from-red-50 to-white px-3 py-2 rounded-lg shadow-md border border-red-200">
                <h2 className="text-2xl font-bold text-red-800 mb-6 pb-2 border-b border-red-300">
                  What’s Not Included in Your 14-Day India Wildlife & Heritage
                  Tour Package?
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">✗</span>
                    <span>Tickets for flights, trains, or tours</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">✗</span>
                    <span>
                      Personal costs include laundry, beverages, tips, camera
                      fees, and so on
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">✗</span>
                    <span>Costs for medical care or emergencies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">✗</span>
                    <span>GST and payment gateway fees that apply</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Quick Heads-Up */}
          <section className="mb-12 bg-amber-50 border border-amber-300 rounded-lg px-3 py-2 shadow-md">
            <h2 className="text-2xl font-bold text-amber-800 mb-3">
              A Quick Heads-Up for Travelers:
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-amber-700 font-bold mr-2">•</span>
                <span>
                  The aforementioned package is not valid for long weekends or
                  any festive and national holidays, such as Diwali, New Year,
                  Republic Day, etc.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-700 font-bold mr-2">•</span>
                <span>
                  Please ensure you book the above package at least two days
                  before your scheduled travel date.
                </span>
              </li>
            </ul>
          </section>

          {/* Terms and Conditions */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-amber-800 mb-8 pb-2 border-b-2 border-amber-300">
              14-Day India Wildlife & Heritage Tour Package: Terms and
              Conditions
            </h2>

            <div className="bg-white px-3 py-2 rounded-lg shadow-md">
              <div className="space-y-6">
                <div>
                  <p>
                    <span className="font-bold">1. </span>
                    All hotels will provide base category accommodation rooms.
                  </p>
                  <p>
                    <span className="font-bold">2. </span>
                    If you want to upgrade your rooms and services, it can be
                    easily done by paying additional charges directly at the
                    hotel in Ranthambore National Park.
                  </p>
                </div>
                <div>
                  <p>
                    <span className="font-bold">3. </span>
                    Resorts in Ranthambore have standard check-in and check-out
                    timings, i.e., check-in at 12:00 PM (afternoon) and
                    check-out at 11:00 AM (morning).
                  </p>
                </div>

                <div>
                  <p>
                    <span className="font-bold">4. </span>
                    You must ensure to input the ages of all members correctly
                    while
                  </p>
                  <p>
                    <span className="font-bold">5. </span>
                    During
                    <span className="font-medium">
                      Ranthambore National Park Resort Booking
                    </span>
                    ensure you enter the correct ages of all members.
                    Inaccurately presented age may lead to fines and penalties
                    while travelling.
                  </p>
                </div>

                <div>
                  <p>
                    <span className="font-bold">6. </span>
                    If the rooms at the hotel you booked are not available, we
                    will find you a hotel of the same standard.
                  </p>
                  <p>
                    <span className="font-bold">7. </span>
                    For accommodating three persons, one room will be allotted
                    along with one extra mattress.
                  </p>
                </div>

                <div>
                  <p>
                    <span className="font-bold">8. </span>
                    If there are any changes to government taxes, safari
                    charges, or resort fees, we will inform you via phone call
                    or email before your scheduled travel date.
                  </p>
                </div>

                <div>
                  <p>
                    <span className="font-bold">9. </span>
                    The company will not be responsible for damage, loss, or
                    theft of luggage.
                  </p>
                </div>

                <div>
                  <p>
                    <span className="font-bold">10. </span>
                    The timing and dates of safaris may change depending on
                    operations or other circumstances.
                  </p>
                </div>

                <div className="bg-red-50 px-3 py-2 rounded-lg border border-red-200">
                  <h3 className="text-xl font-bold text-red-800 mb-4">
                    Reservation Cancellation / No Show / Early Departure Policy
                  </h3>
                  <p className="mb-4">
                    If you wish to postpone or cancel your
                    <span className="font-medium">
                      {" "}
                      11-Day Golden Triangle & Wildlife Tour Package{" "}
                    </span>
                    due to any unforeseen circumstances, please inform us by
                    providing a written document. Please consider that
                    cancellation charges will be applicable from the date we
                    receive your written cancellation application by mail. The
                    following are the rules regarding package cancellations:
                  </p>

                  <ul className="space-y-2">
                    <li>
                      If you submit a cancellation request 30 days before
                      arrival, 10% of the tour cost will be deducted.
                    </li>
                    <li>
                      If you submit a cancellation request 15 to 29 days before
                      arrival, 30% of the tour cost will be deducted.
                    </li>
                    <li>
                      If you submit a cancellation request 07 to 14 days before
                      arrival, 40% of the tour cost will be deducted.
                    </li>
                    <li>
                      If you submit a cancellation request 02 to 06 days before
                      arrival, 50% of the tour cost will be deducted.
                    </li>
                    <li>
                      If you submit a cancellation request in less than 48 hours
                      or don’t appear on the scheduled date, no refund will be
                      provided.
                    </li>
                    <li>
                      The charges for Jeep Safaris and Canter Safaris are
                      non-refundable.
                    </li>
                    <li>
                      For accommodating three persons, one room will be allotted
                      along with one extra mattress.
                    </li>
                    <li>
                      If there are any changes to government taxes, safari
                      charges, or resort fees, we will inform you via phone call
                      or email before your scheduled travel date.
                    </li>
                    <li>
                      There are certain circumstances beyond our control, such
                      as strikes, fairs, festivals, bad weather, traffic, hotel
                      overbooking, attraction closures or restrictions, etc.
                      Although we will make every effort to find an appropriate
                      replacement, we cannot be held responsible for any claims
                      for compensation or refunds that may arise as a result of
                      this.
                    </li>
                    <li>
                      If your safari is unable to be reserved for any reason,
                      such as a technical issue or unavailability, our team will
                      refund your complete amount to the provided bank account.
                      And, accordingly, the same will be conveyed to you.
                    </li>
                    <li>
                      During peak seasons (weekends or weekdays), including
                      Diwali, Holi, New Year, Christmas, etc. A separate
                      cancellation policy is applicable to hotels/resorts/
                      forest rest house cancellations. It will be advised when
                      the requirement is there.
                    </li>
                    <li>
                      It is important to note that once the tour or service cost
                      has been finalized, any increases in permit fees for
                      safaris or museums, taxes, fuel costs, or guide charges
                      imposed by the Indian government will be charged extra.
                    </li>
                    <li>
                      There are certain circumstances beyond our control, such
                      as strikes, fairs, festivals, bad weather, traffic, hotel
                      overbooking, attraction closures or restrictions, etc.
                      Although we will make every effort to find an appropriate
                      replacement, we cannot be held responsible for any claims
                      for compensation or refunds that may arise as a result of
                      this.
                    </li>
                  </ul>
                </div>
                <div className="font-bold">
                  <p>
                    In case of any dispute between the two parties, the courts
                    in New Delhi will have exclusive authority to provide
                    jurisdiction.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Payment Guidelines */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-amber-800 mb-8 pb-2 border-b-2 border-amber-300">
              Payment Guidelines for Your Booking
            </h2>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="space-y-4">
                <ul>
                  <li>
                    Seven Safar accepts all major banks’ credit and debit cards,
                    PayPal, and direct bank deposits.
                  </li>
                  <li>
                    It is recommended to make payments to company accounts only.
                  </li>
                  <li>
                    Get additional discounts on your tour packages by booking
                    with full amount.
                  </li>
                  <li>
                    Click here to pay with a debit or credit card or through net
                    banking.
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
          </section>
        </main>
      </div>
      <ImportantLinks />
      <Footer />
    </>
  );
}

export default FourteenDayGoldenTriangleWildlifeTour;
