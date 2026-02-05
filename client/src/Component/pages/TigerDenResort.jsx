import Header from "../Header";
import ImportantLinks from "../ImportantLinks";
import Footer from "../Footer";
import tadobaHotel from "../../assets/images/tadoba1.jpeg";

const TigerDenResort = () => {
  return (
    <>
      <Header />

      {/* Header */}
      <div>
        <img
          src={tadobaHotel}
          alt={`Banner for ${tadobaHotel}`}
          className="h-[40vh] w-full"
        />
        <h1 className="text-3xl md:text-4xl text-center font-bold my-2 text-amber-900">
          Tiger Den Resort in Ranthambore: <br />A Royal Escape Amidst the
          Wilderness
        </h1>
      </div>

      <main className="container mx-auto px-4 py-8">
        <div>
          <p className="mb-2">
            If you want to wake up to the sound of a tiger roaring in the
            distance and the peaceful sounds of the forest, Tiger Den Resort in
            Ranthambore is the place to go. This peaceful getaway lies on the
            edge of Ranthambore National Park and boasts the perfect mix of
            comfort, adventure, and real Rajasthani charm. Tiger Den is one of
            the best locations to stay in Ranthambore since it allows you to
            enjoy the jungle while enjoying all the conveniences of home and
            more.
          </p>
          <p className="mb-2">
            The resort is a terrific destination for anyone who loves nature,
            wishes to capture images of animals, or just wants to relax. The
            beautiful Aravalli Hills and lush trees surround it on all sides.
            Tiger Den&apos;s helpful staff and lovely settings will leave you
            speechless, whether you&apos;re on a family vacation, a romantic
            retreat, or just going to see tigers.
          </p>
        </div>

        <div>
          <h4 className="text-xl font-semibold my-3 text-amber-800">
            Accommodation: Comfort Wrapped in Nature’s Embrace
          </h4>
          <p className="mb-2">
            Tiger Den Resort is a nice mix of modern and picturesque cottages
            with air conditioning and luxury rooms. The inside is cozy and
            peaceful, with nice wooden furniture, gentle lighting, and colors
            that are similar to the earthy tones of the rainforest.
          </p>
          <p className="mb-2">
            Each cottage and suite has a tea and coffee machine, a writing desk,
            a private sit-out, a bathroom with hot and cold water, and free
            amenities. The grounds are well-kept, and the region is quiet. This
            makes it one of the greatest resorts in Ranthambore for people who
            want to rest and have fun at the same time.
          </p>
          <p className="mb-2">
            If you want to come in touch with nature while yet being pampered,
            Tiger Den is a great spot to stay. It features magnificent views,
            customized service, and a peaceful ambiance that make it a strong
            rival to several 7-star hotels in Ranthambore.
          </p>
        </div>

        <div>
          <h4 className="text-xl font-semibold my-3 text-amber-800">
            Dining: Flavors that Reflect the Spirit of Rajasthan
          </h4>
          <p className="mb-2">
            The food at Tiger Den Resort is great. The cooks at the resort are
            really talented at what they do, and they prepare dishes that show
            off both local and international delicacies. We take great care in
            making every meal here with fresh ingredients. You may choose from
            Indian, Continental, Chinese, and Rajasthani meals.
          </p>
          <p className="mb-2">
            The big, nicely designed dining room makes the property feel cozy
            and welcoming, which is perfect for family meals or romantic dinners
            after a walk to the woods. Guests may dine by the fire at night
            while listening to folk music and grilling meals. Anyone who stays
            at this hotel in Ranthambore will like this
          </p>
        </div>

        <div>
          <h4 className="text-xl font-semibold my-3 text-amber-800">
            Facilities: Everything You Need, and More
          </h4>
          <p className="mb-2">
            Tiger Den Resort does everything for visitors so they may rest. Here
            are some of its greatest features:
          </p>
          <ul>
            <li>A pool that sparkles and is surrounded by vegetation</li>
            <li>You can ask for a yoga class, a steam room, or a spa.</li>
            <li>
              Room service and valet service are provided all day and night.
            </li>
            <li>
              Nature walks and outings to see animals and take photographs of
              them
            </li>
            <li>A place to change money and a tour desk</li>
            <li>You can hire a car, get laundry done, and call a doctor.</li>
            <li>A business center and safe deposit boxes</li>
          </ul>
          <p className="mb-2">
            The resort is one of the best hotels in Ranthambore for business and
            leisure travelers since it is both easy to get to and friendly.
          </p>
        </div>
        <div>
          <h4 className="text-xl font-semibold my-3 text-amber-800">
            Why Choose Tiger Den Resort?
          </h4>
          <p className="mb-2">
            Tiger Den Resort is the greatest location to relax and look good.
            Visitors looking for luxury resorts in Ranthambore will find the
            correct level of luxury here, and visitors looking for budget hotels
            in Ranthambore will find the right price. Families and animal lovers
            adore it because the staff is pleasant, the atmosphere is peaceful,
            and the park is close by.
          </p>
          <p className="mb-2">
            At Tiger Den Resort, you don&apos;t just stay; you also experience
            the wild heart of Ranthambore in splendor and comfort. Many people
            who have been here believe that this is one of the best resorts in
            Ranthambore. Every morning appears beautiful, and every moment is
            unique.
          </p>
          <p className="mb-2">
            Apart from Ranthambore, you also explore the breathtaking landscapes
            of other national parks with us. For example, Jim Corbett National
            Park, Kaziranga National Park, Pench National Park, Kanha National
            Park, etc.
          </p>
        </div>
      </main>

      <ImportantLinks />
      <Footer />
    </>
  );
};

export default TigerDenResort;
