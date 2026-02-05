import ImportantLinks from "../ImportantLinks";
import Header from "../Header";
import Footer from "../Footer";
import reachBanner from "../../assets/images/reach-banner.jpg";

function ElevenDayGoldenTriangleWildlifeTour() {
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
            11-Day Golden Triangle & Wildlife Tour Package: Delhi - Jaipur -
            Ranthambore - Agra - Unchagaon - Corbett
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
                  <p className="mb-3">
                    As soon as you get to Delhi, one of our pleasant tour guides
                    will be ready to meet you. After that, someone will take you
                    to your hotel, where you may relax after your trip.
                  </p>
                  <p className="mb-3">
                    Delhi is a city of contrasts, where old customs and a busy
                    modern life come together. Depending on when you arrive, you
                    might wish to go for a short walk, have a cup of spiced
                    masala chai, or just rest and enjoy the city&apos;s pace.
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
                    Day 02: Delhi Sightseeing: A Tale of Two Cities
                  </h3>
                </div>
                <div className="p-3">
                  <p className="mb-3">
                    Today, you&apos;ll explore the core of Delhi, both its old
                    spirit and its new face.
                  </p>
                  <p className="mb-3">
                    In the morning, go to Old Delhi, which used to be the
                    capital of the Mughal rulers. Chandni Chowk&apos;s busy
                    streets are a great place to walk, and the Jama Masjid is a
                    beautiful mosque. You can also see the old Red Fort, which
                    is a UNESCO World Heritage Site.
                  </p>
                  <p className="mb-3">
                    After lunch, the setting moves to New Delhi, which was
                    created by British architect Edwin Lutyens. You will see the
                    India Gate, the Rashtrapati Bhavan (the Presidential
                    Palace), the peaceful Lotus Temple, and Humayun&apos;s Tomb,
                    which influenced the design of the Taj Mahal.
                  </p>
                  <p className="mb-3">
                    Don&apos;t forget your camera; every part of Delhi has a
                    tale to tell. Stay in Delhi for one night.
                  </p>
                </div>
              </div>

              {/* Day 3 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-amber-200">
                <div className="bg-amber-600 text-white px-4 py-3">
                  <h3 className="text-xl font-bold">
                    Day 03: Delhi to Jaipur: Journey to the Pink City
                  </h3>
                </div>
                <div className="p-3">
                  <p className="mb-3">
                    It&apos;s time to leave for Jaipur, which is affectionately
                    known as the &quot;Pink City,&quot; after breakfast. The
                    trip takes around 5 to 6 hours and goes through rural
                    Rajasthan, where you may see colorful turbans, camel carts,
                    and mustard fields along the route.
                  </p>
                  <p className="mb-3">
                    When you get there, check into your hotel and relax. If you
                    choose to, you may walk around the local markets at night.
                    Jaipur&apos;s bazaars are known for their bright
                    earthenware, block-printed fabrics, and handmade jewelry.
                  </p>
                  <p className="font-semibold text-amber-700">
                    Stay in Jaipur for the night.
                  </p>
                </div>
              </div>

              {/* Day 4 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-amber-200">
                <div className="bg-amber-600 text-white px-4 py-3">
                  <h3 className="text-xl font-bold">
                    Day 04: Jaipur Sightseeing: Palaces, Forts & Royal Tales
                  </h3>
                </div>
                <div className="p-3">
                  <p className="mb-3 font-semibold text-amber-800">
                    Today is all about the richness of culture and the majesty
                    of royalty!
                  </p>
                  <p className="mb-3">
                    Start at the Amber Fort, which is on a height that looks
                    down on Maota Lake. You may get to the fort gates in a short
                    ride on an elephant or vehicle. Inside, you can tour halls
                    and courtyards with mirrors that tell stories of Rajput
                    courage.
                  </p>
                  <p className="mb-3">
                    Next, go to the City Palace, where the royal family of
                    Jaipur still lives, and enjoy how it combines Mughal and
                    Rajasthani styles. The honeycombed front of Hawa Mahal
                    (Palace of Winds) is just down the street. It was once built
                    so that royal women could watch street activity in private.
                  </p>
                  <p className="mb-3">
                    Finish your journey to Jantar Mantar, an 18th-century
                    astronomical observatory that still works with amazing
                    accuracy.
                  </p>
                  <p className="font-semibold text-amber-700">
                    Stay in Jaipur overnight.
                  </p>
                </div>
              </div>

              {/* Day 5 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-amber-200">
                <div className="bg-amber-600 text-white px-4 py-3">
                  <h3 className="text-xl font-bold">
                    Day 05: Jaipur to Ranthambore: Into the Wild
                  </h3>
                </div>
                <div className="p-3">
                  <p className="mb-3">
                    After a relaxing breakfast, drive to Ranthambore National
                    Park, which will take around four hours. It used to be the
                    royal hunting grounds for the Maharajas of Jaipur, but now
                    it&apos;s one of India&apos;s most famous wildlife reserves.
                  </p>
                  <p className="mb-3">
                    Check into your jungle resort, have a big lunch, and get
                    ready for your first safari in the park. You can&apos;t beat
                    the thrill of seeing a tiger in the wild. Also, keep a
                    lookout for leopards, deer, and colorful birds.
                  </p>
                  <p className="font-semibold text-amber-700">
                    Stay at Ranthambore for the night.
                  </p>
                </div>
              </div>

              {/* Day 6 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-amber-200">
                <div className="bg-amber-600 text-white px-4 py-3">
                  <h3 className="text-xl font-bold">
                    Day 06: Exploring Ranthambore: Morning & Evening Safaris
                  </h3>
                </div>
                <div className="p-3">
                  <p className="mb-3">A whole day of exploring the outdoors!</p>
                  <p className="mb-3">
                    Start your day off right with a morning jeep safari in the
                    park. The rough terrain of lakes, cliffs, and ruins in
                    Ranthambore makes every turn a photographer&apos;s dream.
                    You could see sambar deer eating, crocodiles sunning, or, if
                    you&apos;re lucky, a beautiful Royal Bengal Tiger.
                  </p>
                  <p className="mb-3">
                    Go back to your resort for breakfast and some time to relax
                    by the pool. After lunch, head back to the park for a
                    nighttime safari in a different area. Every trip gives you a
                    different view of how the forest changes its mood.
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
                    Day 07: Morning Canter Safari & Drive to Agra
                  </h3>
                </div>
                <div className="p-3">
                  <p className="mb-3">
                    A Canter Safari is a great way to see more of the park in
                    the morning. After breakfast, check out and drive to Agra,
                    which takes about six hours.
                  </p>
                  <p className="mb-3">
                    When you get there, check into your hotel and relax. Agra
                    was formerly the capital of the Mughal Empire and is now
                    home to some of India&apos;s most famous buildings.
                  </p>
                  <p className="font-semibold text-amber-700">
                    Stay in Agra overnight.
                  </p>
                </div>
              </div>

              {/* Day 8 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-amber-200">
                <div className="bg-amber-600 text-white px-4 py-3">
                  <h3 className="text-xl font-bold">
                    Day 08: Agra to Unchagaon: A Royal Experience
                  </h3>
                </div>
                <div className="p-3">
                  <p className="mb-3">
                    Your first jeep safari in Corbett National Park starts at
                    daybreak, so get ready to get up early!
                  </p>
                  <p className="mb-3">
                    This morning, see the Taj Mahal at sunrise. Its white
                    marble, shimmering in pink and gold, is something
                    you&apos;ll never forget. Then, go to the impressive Agra
                    Fort, which is also a UNESCO site that tells stories of
                    monarchs and empires.
                  </p>
                  <p className="mb-3">
                    Then, drive to Unchagaon, a beautiful hamlet with a lot of
                    history. You will be staying in Fort Unchagaon, a
                    wonderfully renovated royal home that combines old-fashioned
                    decor with modern comfort. Take a history walk or just relax
                    in style.
                  </p>
                  <p className="font-semibold text-amber-700">
                    Stay the night in Fort Unchagaon.
                  </p>
                </div>
              </div>

              {/* Day 9 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-amber-200">
                <div className="bg-amber-600 text-white px-4 py-3">
                  <h3 className="text-xl font-bold">
                    Day 09: Unchagaon to Corbett National Park: Into the Forest
                  </h3>
                </div>
                <div className="p-3">
                  <p className="mb-3">
                    After breakfast, head to Jim Corbett National Park,
                    India&apos;s oldest and most famous tiger reserve. It is
                    named after the great environmentalist Jim Corbett.
                  </p>
                  <p className="mb-3">
                    Check into your resort, have a great meal, and then spend
                    the rest of the day resting or seeing the sights around. You
                    could even see deer or rare birds just outside your door!
                  </p>
                  <p className="font-semibold text-amber-700">
                    Stay in Corbett for the night.
                  </p>
                </div>
              </div>

              {/* Day 10 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-amber-200">
                <div className="bg-amber-600 text-white px-4 py-3">
                  <h3 className="text-xl font-bold">
                    Day 10: Safaris in Corbett: Nature at Its Best
                  </h3>
                </div>
                <div className="p-3">
                  <p className="mb-3">
                    Get up early and go on a jeep safari when the birds are
                    tweeting. Corbett&apos;s diversified scenery, which includes
                    thick woods, meadows, and riverbanks, is a great place to
                    observe elephants, wild pigs, and, if you&apos;re fortunate,
                    a tiger crossing the road.
                  </p>
                  <p className="mb-3">
                    Come back to the resort for breakfast and some free time.
                    Later in the afternoon, go on another twilight safari in a
                    different area. As the sun goes down behind the hills,
                    Corbett&apos;s forest lights up in a golden hue. This is the
                    best way to conclude your day of adventure.
                  </p>
                  <p className="font-semibold text-amber-700">
                    Stay in Corbett overnight.
                  </p>
                </div>
              </div>

              {/* Day 11 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-amber-200">
                <div className="bg-amber-600 text-white px-4 py-3">
                  <h3 className="text-xl font-bold">
                    Day 11: Back to Delhi: Farewell to the Wild
                  </h3>
                </div>
                <div className="p-3">
                  <p className="mb-3">
                    It&apos;s time to say farewell to the wild after breakfast.
                    You will be dropped off in Delhi, where you will catch your
                    next flight or trip. Bring home magnificent memories of
                    India&apos;s royal history, exotic animals, and kind
                    welcome.
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
                  What is Included in Your 11-Day Golden Triangle & Wildlife
                  Tour Package?
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">✓</span>
                    <span>10 nights of lodging for two or three people</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">✓</span>
                    <span>Breakfast and supper every day</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">✓</span>
                    <span>2 Jeep & 1 Canter safari in Ranthambore</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">✓</span>
                    <span>Two Jeep safaris in Corbett National Park</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">✓</span>
                    <span>A professional naturalist or guide on safaris</span>
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
                  What’s Not Included in Your 11-Day Golden Triangle & Wildlife
                  Tour Package?
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">✗</span>
                    <span>
                      Airfare, rail fare, or transfers within the city
                    </span>
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
              11-Day Golden Triangle & Wildlife Tour Package: Terms and
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

export default ElevenDayGoldenTriangleWildlifeTour;
