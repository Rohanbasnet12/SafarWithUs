import ImportantLinks from "../ImportantLinks";
import Header from "../Header";
import Footer from "../Footer";
import reachBanner from "../../assets/images/reach-banner.jpg";

function SixDayGoldenTriangleWildlifeTour() {
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
            6-Day Golden Triangle with Ranthambore Wildlife Tour Package
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
                    Day 1: Welcome to Delhi : Your Journey Begins!
                  </h3>
                </div>
                <div className="p-3">
                  <p className="mb-3">
                    When you arrive in Delhi, our representative will be there
                    to meet you with a warm grin and assist you get settled into
                    your hotel room.
                  </p>
                  <p className="mb-3">
                    Delhi is a city of contrasts, with historic Mughal buildings
                    next to shiny shops and busy eateries. Depending on when you
                    arrive, you might want to take a short walk nearby or just
                    rest at your hotel following your trip. Get a good
                    night&apos;s sleep tonight because your sightseeing trip
                    starts tomorrow!
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
                    Day 2: Discovering Delhi: From Old-World Charm to Modern
                    Grandeur
                  </h3>
                </div>
                <div className="p-3">
                  <p className="mb-3">
                    Get ready to see both Old Delhi and New Delhi, the two sides
                    of India&apos;s capital, after a nice breakfast. Each has
                    its own personality.
                  </p>
                  <p className="mb-3">
                    We&apos;ll begin at Old Delhi, which is the city&apos;s
                    historic center. You may go back in time by seeing the great
                    Red Fort, Jama Masjid (India&apos;s largest mosque), and
                    Chandni Chowk, a bazaar that has been alive with color and
                    noise for over 300 years. A rickshaw ride here is an
                    adventure in itself, with small streets, fragrant spices,
                    and lots of chances to take pictures!
                  </p>
                  <p className="mb-3">
                    The British planned New Delhi in the early 1900s, and you
                    may go there in the afternoon. You will view the peaceful
                    Lotus Temple, India Gate, Rashtrapati Bhavan (the
                    Presidential Palace), Qutub Minar, and Humayun&apos;s Tomb.
                    Return to your accommodation in the evening and unwind. You
                    might have a great meal and think about all the history and
                    color you&apos;ve seen.
                  </p>
                  <p className="font-semibold text-amber-700">
                    Stay overnight in Delhi.
                  </p>
                </div>
              </div>

              {/* Day 3 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-amber-200">
                <div className="bg-amber-600 text-white px-4 py-3">
                  <h3 className="text-xl font-bold">
                    Day 3: Delhi to Ranthambore: Into the Land of Tigers
                  </h3>
                </div>
                <div className="p-3">
                  <p className="mb-3">
                    After breakfast, get your luggage ready for the next part of
                    your trip: the wilds of Ranthambore National Park. This is
                    one of India&apos;s greatest wildlife reserves and one of
                    the best sites in the world to see Bengal tigers.
                  </p>
                  <p className="mb-3">
                    You will board a train from Delhi to Sawai Madhopur, which
                    is the closest station to the park. When you get there, our
                    local crew will take you to your resort, which is in a
                    peaceful and natural setting. You might relax in the pool or
                    take a peaceful walk around the resort grounds to conclude
                    your day. Pay great attention; you could perhaps hear a
                    peacock&apos;s cry or the sound of the forest nearby.
                  </p>
                  <p className="font-semibold text-amber-700">
                    Ranthambore is where you spend the night.
                  </p>
                </div>
              </div>

              {/* Day 4 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-amber-200">
                <div className="bg-amber-600 text-white px-4 py-3">
                  <h3 className="text-xl font-bold">
                    Day 4: A Day in the Wild: Ranthambore Safari Adventure
                  </h3>
                </div>
                <div className="p-3">
                  <p className="mb-3 font-semibold text-amber-800">
                    Today is all about animals and adventure! Get up early for
                    your morning jeep safari in Ranthambore National Park. There
                    are more than 250 kinds of birds, as well as tigers,
                    leopards, sloth bears, hyenas, deer, crocodiles, and more.
                    Every safari is different, and your knowledgeable naturalist
                    guide will help you find and learn about the park&apos;s
                    interesting environment.
                  </p>
                  <p className="mb-3">
                    Go back to your resort for breakfast and some time to rest.
                    Later in the afternoon, you&apos;ll go back into the jungle
                    for another safari in a different part of the park. This
                    will give you a better opportunity of seeing wildlife and
                    enjoying more of the forest&apos;s splendor.
                  </p>
                  <p className="mb-3">
                    Come back to the resort by night and tell your safari
                    adventures over supper.
                  </p>
                  <p className="font-semibold text-amber-700">
                    Ranthambore is where you will stay overnight.
                  </p>
                </div>
              </div>

              {/* Day 5 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-amber-200">
                <div className="bg-amber-600 text-white px-4 py-3">
                  <h3 className="text-xl font-bold">
                    Day 5: From Ranthambore to Agra: Tracing the Mughal
                    Footsteps
                  </h3>
                </div>
                <div className="p-3">
                  <p className="mb-3">
                    After breakfast, it&apos;s time to go to Agra, the city of
                    love and home of the iconic Taj Mahal.
                  </p>
                  <p className="mb-3">
                    On your route, you’ll stop at Fatehpur Sikri, a wonderfully
                    preserved ghost city established by Emperor Akbar in the
                    16th century. It was the capital of the Mughal Empire, but
                    it was suddenly abandoned after just a few years. Its red
                    sandstone palaces and courtyards still tell stories of the
                    past.
                  </p>
                  <p className="mb-3">
                    By the afternoon, you should be in Agra and ready to check
                    into your hotel. Later, go to the spectacular Agra Fort,
                    which is another UNESCO World Heritage Site that shows off
                    the amazing architecture of the Mughal dynasty. Don’t miss
                    the view of the Taj Mahal from the fort’s balcony - it’s
                    stunning, especially near sunset.
                  </p>
                  <p className="font-semibold text-amber-700">
                    Overnight stay at Agra.
                  </p>
                </div>
              </div>

              {/* Day 6 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-amber-200">
                <div className="bg-amber-600 text-white px-4 py-3">
                  <h3 className="text-xl font-bold">
                    Day 6: The Taj Mahal at Sunrise & Return to Delhi
                  </h3>
                </div>
                <div className="p-3">
                  <p className="mb-3">
                    Get ready for a once-in-a-lifetime experience: seeing the
                    Taj Mahal at dawn. When the first rays of the light contact
                    the white marble, the whole monument shines in pink and
                    gold. It&apos;s a sight you&apos;ll never forget, and
                    it&apos;s the ideal end to your trip.
                  </p>
                  <p className="mb-3">
                    After seeing the Taj Mahal and hearing the love tale behind
                    it, go back to your hotel for breakfast. After that, drive
                    back to Delhi, where your unforgettable Golden Triangle and
                    Ranthambore Wildlife Tour ends.
                  </p>
                  <p className="mb-3">
                    You won&apos;t just take pictures home with you; you&apos;ll
                    also take memories of India&apos;s history, culture, and
                    wild places that will last a lifetime.
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
                  What is Included in Your 6-Day Golden Triangle with
                  Ranthambore Wildlife Tour Package?
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">✓</span>
                    <span>5 nights of lodging for two or three people</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">✓</span>
                    <span>
                      The resort serves breakfast and dinner every day.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">✓</span>
                    <span>1 Jeep Safari in the Ranthambore National Park</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">✓</span>
                    <span>A professional naturalist leads the safari</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">✓</span>
                    <span>
                      Free usage of the resort&apos;s recreational amenities and
                      swimming pools
                    </span>
                  </li>
                </ul>
              </div>

              {/* Exclusions */}
              <div className="bg-gradient-to-b from-red-50 to-white px-3 py-2 rounded-lg shadow-md border border-red-200">
                <h2 className="text-2xl font-bold text-red-800 mb-6 pb-2 border-b border-red-300">
                  What’s Not Included in Your 6-Day Golden Triangle with
                  Ranthambore Wildlife Tour Package?
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
              6-Day Golden Triangle with Ranthambore Wildlife Tour Package:
              Terms and Conditions
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
                      6-Day Golden Triangle with Ranthambore Wildlife Tour
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

export default SixDayGoldenTriangleWildlifeTour;
