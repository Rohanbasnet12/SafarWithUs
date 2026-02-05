import ImportantLinks from "../ImportantLinks";
import Header from "../Header";
import Footer from "../Footer";
import reachBanner from "../../assets/images/reach-banner.jpg";

function SevenDayHeritageTourPackage() {
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
            7-Day Delhi to Ranthambore Wildlife & Heritage Tour Package
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
                    Day 01: Welcome to Delhi: India’s Vibrant Capital
                  </h3>
                </div>
                <div className="p-3">
                  <p className="mb-3">Hello and welcome to Delhi!</p>
                  <p className="mb-3">
                    As soon as you get to the airport, one of our staff members
                    will be there to meet you and take you to your hotel. Take
                    it easy when you check in. You&apos;ve just arrived in one
                    of the most fascinating cities in the world!
                  </p>
                  <p className="mb-3">
                    Delhi is known for its street cuisine and diverse culinary
                    culture, so you might like to go for a walk near your hotel
                    or try some local food. If you don&apos;t want to do
                    anything, you may just relax at the hotel and get ready for
                    tomorrow&apos;s excursions.
                  </p>
                  <p className="font-semibold text-amber-700">
                    Stay the night in Delhi.
                  </p>
                </div>
              </div>

              {/* Day 2 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-amber-200">
                <div className="bg-amber-600 text-white px-4 py-3">
                  <h3 className="text-xl font-bold">
                    Day 02: Exploring Delhi: A Tale of Two Cities
                  </h3>
                </div>
                <div className="p-3">
                  <p className="mb-3">
                    Get ready to see all the sides of Delhi after breakfast. On
                    one side, there is historic Mughal majesty, while on the
                    other, there is colonial-era charm and modern
                    sophistication.
                  </p>
                  <p className="mb-3">
                    Your journey starts in Old Delhi, which was formerly the
                    capital of the Mughal Empire. Take a walk through the busy,
                    narrow streets of Chandni Chowk, see the great Red Fort, and
                    enjoy the peace of mind at Jama Masjid, India&apos;s biggest
                    mosque.
                  </p>
                  <p className="mb-3">
                    Then, the tone changes as you get to New Delhi, which the
                    British built in the early 1900s. Here you may see the
                    peaceful Lotus Temple, the tall Qutub Minar, the majestic
                    Rashtrapati Bhawan (Presidential Palace), and Humayun&apos;s
                    Tomb, which is a UNESCO World Heritage Site that inspired
                    the Taj Mahal. Last, stop for a picture at the famous India
                    Gate.
                  </p>
                  <p className="mb-3">
                    After a day full of history, color, and culture, go back to
                    your hotel for a well-deserved break.
                  </p>
                  <p className="font-semibold text-amber-700">
                    In Delhi for the night.
                  </p>
                </div>
              </div>

              {/* Day 3 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-amber-200">
                <div className="bg-amber-600 text-white px-4 py-3">
                  <h3 className="text-xl font-bold">
                    Day 03: Train to Ranthambore: Enter the Wild
                  </h3>
                </div>
                <div className="p-3">
                  <p className="mb-3">
                    Get up early to take a beautiful train ride from New Delhi
                    to Sawai Madhopur, the entrance of Ranthambore National
                    Park. The train trip itself is an adventure. You&apos;ll see
                    rural villages, lush fields, and bits of ordinary life in
                    North India.
                  </p>
                  <p className="mb-3">
                    When you arrive, our representative will meet you and take
                    you to your resort. It&apos;s time for your first jeep
                    safari in Ranthambore National Park after a tasty lunch.
                    This is an exciting trip where you never know what
                    you&apos;ll see around every bend. Watch out for deer,
                    peacocks, and, if you&apos;re lucky, the beautiful Royal
                    Bengal Tiger.
                  </p>
                  <p className="mb-3">
                    Go back to the resort for dinner and relax by the fire or
                    beneath the stars.
                  </p>
                  <p className="font-semibold text-amber-700">
                    Stay the night at Ranthambore.
                  </p>
                </div>
              </div>

              {/* Day 4 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-amber-200">
                <div className="bg-amber-600 text-white px-4 py-3">
                  <h3 className="text-xl font-bold">
                    Day 04: Morning & Evening Jeep Safaris: Into the Heart of
                    Ranthambore
                  </h3>
                </div>
                <div className="p-3">
                  <p className="mb-3 font-semibold text-amber-800">
                    Today is all about animals and the wild!
                  </p>
                  <p className="mb-3">
                    Begin your day with a morning safari in one of
                    Ranthambore&apos;s zones. The park&apos;s rough cliffs,
                    ancient ruins, and calm lakes make it a great place to see
                    wildlife, including leopards, sloth bears, sambar deer, and
                    langurs. There are more than 300 kinds of birds in
                    Ranthambore, therefore, it&apos;s also a great place for
                    birdwatchers.
                  </p>
                  <p className="mb-">
                    You may relax at the resort, swim in the pool, or just
                    listen to the sounds of nature after breakfast. After lunch,
                    get ready for another nighttime jeep safari. The beautiful
                    golden light of sunset provides for wonderful photos and
                    increases your chances of seeing animals.
                  </p>
                  <p className="mb-3">
                    Return for a big meal and tell other travelers about your
                    trip.
                  </p>
                  <p className="font-semibold text-amber-700">
                    Stay the night at Ranthambore.
                  </p>
                </div>
              </div>

              {/* Day 5 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-amber-200">
                <div className="bg-amber-600 text-white px-4 py-3">
                  <h3 className="text-xl font-bold">
                    Day 05: Canter Safaris: Discovering New Zones
                  </h3>
                </div>
                <div className="p-3">
                  <p className="mb-3">
                    A morning canter safari starts another day of fun. These
                    bigger, open vehicles are fantastic for exploring with a
                    group and let you see different parts of the area. There are
                    several different safari routes in Ranthambore, and each one
                    is special in its own way. Some take you by old watchtowers
                    and lakes, while others take you through thick forest
                    pathways where tigers are regularly seen.
                  </p>
                  <p className="mb-3">
                    When you get back to the resort, have breakfast and some
                    free time. You may go for a walk around the grounds or have
                    a brief nap.
                  </p>
                  <p className="mb-3">
                    In the afternoon, go out again for your sunset canter
                    safari. By now, you should know that every safari is
                    different because of the various sights, sounds, and people
                    you meet.
                  </p>
                  <p className="mb-3">
                    Enjoy the quiet forest setting back at the resort.
                  </p>
                  <p className="font-semibold text-amber-700">
                    Stay the night at Ranthambore.
                  </p>
                </div>
              </div>

              {/* Day 6 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-amber-200">
                <div className="bg-amber-600 text-white px-4 py-3">
                  <h3 className="text-xl font-bold">
                    Day 06: Chambal Boat Safari: A River Adventure
                  </h3>
                </div>
                <div className="p-3">
                  <p className="mb-3">
                    We will drive you to the Chambal River this morning after
                    breakfast. It is one of the most beautiful and untouched
                    rivers in India. The Chambal is peaceful and clean, unlike
                    the turmoil of city life. It is a safe place for uncommon
                    animals to live.
                  </p>
                  <p className="mb-3">
                    Your boat safari here is a completely different experience
                    from the jungle safaris. As you float along the river, keep
                    an eye out for Gharials (fish-eating crocodiles), Marsh
                    Crocodiles, and a wide range of migratory birds, including
                    flamingos, Indian skimmers, and storks. You could even see
                    river dolphins if you&apos;re lucky!
                  </p>
                  <p className="mb-3">
                    After this fun trip, go back to your resort in Ranthambore
                    for dinner and your last night in nature.
                  </p>
                  <p className="font-semibold text-amber-700">
                    Stay the night at Ranthambore.
                  </p>
                </div>
              </div>

              {/* Day 7 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-amber-200">
                <div className="bg-amber-600 text-white px-4 py-3">
                  <h3 className="text-xl font-bold">
                    Day 07: Departure: Back to Delhi
                  </h3>
                </div>
                <div className="p-3">
                  <p className="mb-3">
                    Check out of the resort after breakfast. You will be taken
                    to the station to catch your train back to Delhi. Take with
                    you the sounds of the forest as you leave Ranthambore. The
                    voices of birds, the rustling of leaves, and the unique
                    thrill of witnessing animals up close will stay with you.
                  </p>
                  <p className="mb-3">
                    Even though your trip is over, you&apos;ll always remember
                    it.
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
                  What is Included in Your 7-Day Delhi to Ranthambore Wildlife &
                  Heritage Tour Package?
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">✓</span>
                    <span>
                      6 nights of lodging with two or three people sharing a
                      room
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">✓</span>
                    <span>Breakfast and supper every day at the resort</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">✓</span>
                    <span>
                      Three Jeep Safaris, two Canter Safaris, and one Chambal
                      Boat Ride
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">✓</span>
                    <span>Guides who are experts in nature during safaris</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">✓</span>
                    <span>
                      Free use of the resort&apos;s swimming pool and other
                      entertainment areas
                    </span>
                  </li>
                </ul>
              </div>

              {/* Exclusions */}
              <div className="bg-gradient-to-b from-red-50 to-white px-3 py-2 rounded-lg shadow-md border border-red-200">
                <h2 className="text-2xl font-bold text-red-800 mb-6 pb-2 border-b border-red-300">
                  What’s Not Included in Your 7-Day Delhi to Ranthambore
                  Wildlife & Heritage Tour Package?
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">✗</span>
                    <span>
                      Airfare, train cost, and local transportation for
                      sightseeing
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">✗</span>
                    <span>
                      Personal costs include beverages, laundry, camera fees,
                      tipping, and so on.
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
              7-Day Delhi to Ranthambore Wildlife & Heritage Tour Package: Terms
              and Conditions
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
                      7-Day Delhi to Ranthambore Wildlife & Heritage Tour
                      Package{" "}
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

export default SevenDayHeritageTourPackage;
