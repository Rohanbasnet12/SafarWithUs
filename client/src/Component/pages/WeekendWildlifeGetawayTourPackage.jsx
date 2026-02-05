import ImportantLinks from "../ImportantLinks";
import Header from "../Header";
import Footer from "../Footer";
import reachBanner from "../../assets/images/reach-banner.jpg";

function WeekendWildlifeGetawayTourPackage() {
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
            Weekend Ranthambore Wildlife Getaway from Delhi Tour Package
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
                    Day 1: Delhi - Sawai Madhopur (Ranthambore Arrival & Local
                    Exploration)
                  </h3>
                </div>
                <div className="p-3">
                  <p className="mb-3">
                    Your experience starts early in the morning when you get on
                    a train from New Delhi Railway Station to Sawai Madhopur,
                    which is the route to go to the famed Ranthambore National
                    Park.
                  </p>
                  <p className="mb-3">
                    When you arrive, one of our representatives will meet you
                    and help you get to your pre-booked wildlife lodge without
                    any problems. Check in, unwind, and have a tasty meal at the
                    resort.
                  </p>
                  <p className="mb-3">
                    After a brief break, go outside and see what there is to do
                    in Ranthambore. You might visit neighboring temples, artisan
                    shops, or the beautiful Ranthambore Fort for a great
                    perspective of the reserve.
                  </p>
                  <p className="mb-3">
                    Go back to your resort for a pleasant meal and relax in
                    nature. Before you go to bed, you may also use the
                    resort&apos;s pool or play games inside.
                  </p>
                  <p className="font-semibold text-amber-700">
                    Stay at the resort for the night.
                  </p>
                </div>
              </div>

              {/* Day 2 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-amber-200">
                <div className="bg-amber-600 text-white px-4 py-3">
                  <h3 className="text-xl font-bold">
                    Day 2: Jungle Safari in Ranthambore - Return to Delhi
                  </h3>
                </div>
                <div className="p-3">
                  <p className="mb-3">
                    Get up early for the greatest part of your trip: a thrilling
                    Jeep Safari inside Ranthambore National Park, which is one
                    of the best spots in India to see the beautiful Royal Bengal
                    Tiger.
                  </p>
                  <p className="mb-3">
                    With the help of a knowledgeable naturalist, you&apos;ll
                    walk through thick woods, beautiful lakes, and grasslands,
                    looking for leopards, sloth bears, and many kinds of birds.
                  </p>
                  <p className="mb-3">
                    After your exciting morning safari, return to the resort for
                    a big breakfast and some time to relax. Later, have a tasty
                    meal before you go.
                  </p>
                  <p className="mb-3">
                    In the afternoon, you&apos;ll be taken to the Sawai Madhopur
                    Railway Station, where you&apos;ll get on your train back to
                    Delhi. Come return in the evening with memories of animals,
                    adventure, and peace.
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
                  What is Included in Your Weekend Ranthambore Wildlife Getaway
                  from Delhi Tour Package?
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">✓</span>
                    <span>
                      1 night of lodging with two or three people sharing
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">✓</span>
                    <span>The resort serves breakfast and supper.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">✓</span>
                    <span>
                      1 Jeep Safari in the National Park of Ranthambore
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">✓</span>
                    <span>
                      An expert wildlife guide will be with you on the tour.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">✓</span>
                    <span>
                      Free use of the resort&apos;s pool and other recreational
                      facilities
                    </span>
                  </li>
                </ul>
              </div>

              {/* Exclusions */}
              <div className="bg-gradient-to-b from-red-50 to-white px-3 py-2 rounded-lg shadow-md border border-red-200">
                <h2 className="text-2xl font-bold text-red-800 mb-6 pb-2 border-b border-red-300">
                  What’s Not Included in Your Weekend Ranthambore Wildlife
                  Getaway from Delhi Tour Package?
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">✗</span>
                    <span>
                      Train/airfare, transportation, and more sightseeing
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
              Weekend Ranthambore Wildlife Getaway from Delhi Tour Package:
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
                      Weekend Ranthambore Wildlife Getaway from Delhi Tour
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

export default WeekendWildlifeGetawayTourPackage;
