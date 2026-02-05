import ImportantLinks from "../ImportantLinks";
import Header from "../Header";
import Footer from "../Footer";
import reachBanner from "../../assets/images/reach-banner.jpg";

function GoldenTraingleTourPackage() {
  return (
    <>
      <Header />
      <div>
        {/* Header */}
        <header>
          <div>
            <img
              src={reachBanner}
              alt={`Banner for ${reachBanner}`}
              className="h-[40vh] w-full"
            />
            <h1 className="text-3xl md:text-4xl text-center font-bold my-2 text-amber-900">
              9-Day Golden Triangle & Wildlife Tour Package
            </h1>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          {/* Tour Days */}
          <section className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Day 1 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-amber-200">
                <div className="bg-amber-600 text-white px-4 py-3">
                  <h3 className="text-xl font-bold">
                    Day 01: Welcome to Delhi: The Heartbeat of India
                  </h3>
                </div>
                <div className="p-3">
                  <p className="mb-3">
                    When you arrive at Delhi International Airport, one of our
                    professional representatives will be there to greet you and
                    assist you with checking into the hotel you have already
                    booked. Take a break from your travels, relax, and get some
                    rest.
                  </p>
                  <p className="mb-3">
                    Walking about in the evening is a terrific way to find local
                    markets and try Delhi&apos;s famed street food. Think of
                    tasty chaats, masala chai, and crisp samosas.
                  </p>
                  <p className="font-semibold text-amber-700">
                    Staying the night in Delhi.
                  </p>
                </div>
              </div>

              {/* Day 2 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-amber-200">
                <div className="bg-amber-600 text-white px-4 py-3">
                  <h3 className="text-xl font-bold">
                    Day 02: Discovering Delhi: Old Charm & Modern Grace
                  </h3>
                </div>
                <div className="p-3">
                  <p className="mb-3">
                    After a filling breakfast, get ready for a busy day of
                    touring both Old Delhi and New Delhi. These two worlds live
                    together harmoniously in one city.
                  </p>
                  <p className="mb-3">
                    After that, the real fun begins: a rickshaw ride through
                    Chandni Chowk, the famed spice and silver market, where the
                    streets are full of colors, smells, and mayhem in the nicest
                    manner imaginable.
                  </p>
                  <p className="mb-3">
                    In the afternoon, head to New Delhi, which was built by the
                    British and has broad boulevards and grand buildings. See
                    famous places including India Gate, Rashtrapati Bhawan (the
                    Presidential Palace), Humayun&apos;s Tomb, the calm Lotus
                    Temple, and the peaceful Lakshmi Narayan Temple.
                  </p>
                  <p className="mb-3">
                    As the day comes to an end, you&apos;ll feel like
                    you&apos;ve been two separate times in the same city.
                  </p>
                  <p className="font-semibold text-amber-700">
                    Stay the night in Delhi.
                  </p>
                </div>
              </div>

              {/* Day 3 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-amber-200">
                <div className="bg-amber-600 text-white px-4 py-3">
                  <h3 className="text-xl font-bold">
                    Day 03: Delhi to Ranthambore: Journey to the Land of Tigers
                  </h3>
                </div>
                <div className="p-3">
                  <p className="mb-3">
                    Get up early, have breakfast, and get ready to board your
                    train to Sawai Madhopur, which is the closest station to
                    Ranthambore National Park. The train travel is part of the
                    adventure. You&apos;ll see little villages, lush fields, and
                    bits of everyday life along the way.
                  </p>
                  <p className="mb-3">
                    When you get there, you&apos;ll be taken to your resort,
                    which is close to the park. After lunch, relax. You may go
                    for a swim in the pool or go around the nearby village. You
                    may unwind in nature&apos;s tranquility tonight before the
                    fun starts tomorrow.
                  </p>
                  <p className="font-semibold text-amber-700">
                    Dinner and a place to sleep at the Ranthambore resort.
                  </p>
                </div>
              </div>

              {/* Day 4 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-amber-200">
                <div className="bg-amber-600 text-white px-4 py-3">
                  <h3 className="text-xl font-bold">
                    Day 04: Tracking the Royal Bengal Tiger: Ranthambore Safaris
                  </h3>
                </div>
                <div className="p-3">
                  <p className="mb-3 font-semibold text-amber-800">
                    Today is going to be exciting!
                  </p>
                  <p className="mb-3">
                    Get up early for your first jeep safari in Ranthambore
                    National Park. The park is famed for its tigers, and if
                    you&apos;re lucky, you could see one strolling gracefully
                    across your path or relaxing by the lakes.
                  </p>
                  <p className="mb-3">
                    In addition to tigers, the park has sloth bears, leopards,
                    sambar deer, and many more birds from other parts of the
                    world. The old Ranthambore Fort, which sits on top of a
                    hill, lends a historical touch to your safari background.
                  </p>
                  <p className="mb-3">
                    After breakfast and some time to relax, have lunch at your
                    resort. Then, go out again for your evening safari, which is
                    another chance to see the wild in the golden light of
                    sunset. Come back for a big meal and tell your safari
                    experiences around the fire.
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
                    Day 05: Ranthambore to Agra: From Jungles to Marble Wonder
                  </h3>
                </div>
                <div className="p-3">
                  <p className="mb-3">
                    Get up early and go on a Canter Safari, which is a bigger
                    open vehicle that allows you to see more of the park. The
                    mist in the early morning, the sound of birds singing, and
                    the rising light make for a great place to see animals.
                  </p>
                  <p className="mb-3">
                    After breakfast at the resort, check out and start your trip
                    to Agra. By nightfall, you&apos;ll be in your hotel and
                    ready to relax. Tonight, relax. Tomorrow&apos;s highlight is
                    going to be great.
                  </p>
                  <p className="font-semibold text-amber-700">
                    Stay in Agra for the night.
                  </p>
                </div>
              </div>

              {/* Day 6 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-amber-200">
                <div className="bg-amber-600 text-white px-4 py-3">
                  <h3 className="text-xl font-bold">
                    Day 06: Agra’s Timeless Beauty → Drive to Unchagaon
                  </h3>
                </div>
                <div className="p-3">
                  <p className="mb-3">
                    After breakfast, you should see the Taj Mahal, which is one
                    of the most beautiful things in the world. This beautiful
                    white marble building was built by Emperor Shah Jahan in
                    commemoration of his wife Mumtaz Mahal. It changes color
                    with the light: it is soft pink at dawn, bright white
                    throughout the day, and golden at night.
                  </p>
                  <p className="mb-3">
                    Then go to the majestic Agra Fort, where history and
                    architecture come together in perfect harmony.
                  </p>
                  <p className="mb-3">
                    After lunch, drive to Unchagaon, a historic village that
                    makes you feel like you&apos;ve gone back in time.
                    You&apos;ll stay at the picturesque Fort Unchagaon, which
                    was previously home to the Jat aristocracy. Walk about the
                    courtyards, examine the buildings, and soak up the royal
                    mood.
                  </p>
                  <p className="font-semibold text-amber-700">
                    Stay in Fort Unchagaon for the night.
                  </p>
                </div>
              </div>

              {/* Day 7 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-amber-200">
                <div className="bg-amber-600 text-white px-4 py-3">
                  <h3 className="text-xl font-bold">
                    Day 07: Unchagaon to Corbett: Into the Wilderness
                  </h3>
                </div>
                <div className="p-3">
                  <p className="mb-3">
                    After breakfast, head to Jim Corbett National Park,
                    India&apos;s oldest national park and a great place for
                    wildlife enthusiasts. The trip takes you through beautiful
                    scenery and tiny towns.
                  </p>
                  <p className="mb-3">
                    When you get to your resort, check in, have a freshly made
                    meal, and then spend the evening wandering the riverbanks or
                    resting by the pool. The sky at night is really clear here,
                    so it&apos;s a great place to look at the stars.
                  </p>
                  <p className="font-semibold text-amber-700">
                    Stay the night at Corbett.
                  </p>
                </div>
              </div>

              {/* Day 8 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-amber-200">
                <div className="bg-amber-600 text-white px-4 py-3">
                  <h3 className="text-xl font-bold">
                    Day 08: Safari Adventures in Corbett
                  </h3>
                </div>
                <div className="p-3">
                  <p className="mb-3">
                    Your first jeep safari in Corbett National Park starts at
                    daybreak, so get ready to get up early!
                  </p>
                  <p className="mb-3">
                    There are a lot of animals in this park, including Asiatic
                    elephants, deer, and the hard-to-find Royal Bengal Tiger.
                    The varied landscape of riverbanks, meadows, and thick
                    forests makes every moment feel like a scene from a nature
                    show.
                  </p>
                  <p className="mb-3">
                    Go back to the resort for breakfast and some relaxation.
                    After lunch, go back out for your evening safari. The forest
                    appears very different as the light fades and animals start
                    to move around. At night, relax with food and maybe a warm
                    campfire near the resort.
                  </p>
                  <p className="font-semibold text-amber-700">
                    Stay at Corbett for the night.
                  </p>
                </div>
              </div>

              {/* Day 9 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-amber-200">
                <div className="bg-amber-600 text-white px-4 py-3">
                  <h3 className="text-xl font-bold">
                    Day 09: Back to Delhi: Farewell with Memories
                  </h3>
                </div>
                <div className="p-3">
                  <p className="mb-3">
                    Take your time eating breakfast while you listen to the
                    sounds of nature. After checking out, start your drive back
                    to Delhi, where your trip ends.
                  </p>
                  <p className="mb-3">
                    You&apos;ll leave with more than just pictures. You&apos;ll
                    remember the tigers in the wild, the beautiful forts, the
                    regal stays, and the deep pulse of India.
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
                  What is included in the 9-Day Golden Triangle & Wildlife Tour
                  Package?
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">✓</span>
                    <span>
                      8 nights of pleasant lodging for two or three people
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">✓</span>
                    <span>
                      All resorts and hotels serve breakfast and supper every
                      day.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">✓</span>
                    <span>
                      4 Jeep Safaris and 1 Canter Safari with skilled
                      naturalists as guides
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">✓</span>
                    <span>
                      Free access to pools and other recreational amenities at
                      the resort
                    </span>
                  </li>
                </ul>
              </div>

              {/* Exclusions */}
              <div className="bg-gradient-to-b from-red-50 to-white px-3 py-2 rounded-lg shadow-md border border-red-200">
                <h2 className="text-2xl font-bold text-red-800 mb-6 pb-2 border-b border-red-300">
                  What&apos;s Not Included in Your 9-Day Golden Triangle &
                  Wildlife Tour Package?
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">✗</span>
                    <span>
                      Plane tickets, rail tickets, and local transportation for
                      sightseeing
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">✗</span>
                    <span>
                      Personal costs include laundry, beverages, tipping, camera
                      fees, and more
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">✗</span>
                    <span>Costs for medical care and emergencies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">✗</span>
                    <span>Fees for GST and payment gateways</span>
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
              9-Day Golden Triangle & Wildlife Tour Package: Terms and
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
                  </p>
                  <p>
                    <span className="font-bold">5. </span>
                    During{" "}
                    <span className="font-medium">
                      Ranthambore National Park Resort Booking
                    </span>
                    , ensure you enter the correct ages of all members.
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
                    If you wish to postpone or cancel your{" "}
                    <span className="font-medium">
                      9-Day Golden Triangle & Wildlife Tour Package
                    </span>{" "}
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

export default GoldenTraingleTourPackage;
