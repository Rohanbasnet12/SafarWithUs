import Header from "../Header";
import ImportantLinks from "../ImportantLinks";
import Footer from "../Footer";
import tadobaHotel from "../../assets/images/tadoba1.jpeg";

const HotelDevVilas = () => {
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
          Hotel Dev Vilas
        </h1>
      </div>

      <main className="container mx-auto px-4 py-8">
        <div>
          <p className="mb-1">
            If Ranthambore is where nature displays its most beautiful side,
            then Hotel Dev Vilas is where that wildness meets comfort, charm,
            and a touch of royal hospitality. Dev Vilas is only a few minutes
            from the main entrance to Ranthambore National Park. It combines the
            excitement of adventure with the peace of a real Rajasthani retreat.
            When you first step there, you realize how spacious and airy it is,
            with its open lawns, heritage-inspired buildings, and the smell of
            the Aravalli breeze. It was made not simply to be a place to sleep,
            but also to be a destination. You may hear the distant sounds of
            peacocks at dawn, but you&apos;re also surrounded by luxury that
            reminds you you&apos;re on holiday.
          </p>
        </div>

        <div>
          <h4 className="text-xl font-semibold my-3 text-amber-800">
            Heritage Charm Meets with Modern Facilities
          </h4>
          <p>
            There is a distinct narrative in each room at Dev Vilas. Unlike many
            resorts, which have the same look and feel, each suite is unique,
            with colors, furniture, and decor that are influenced by Rajasthani
            culture. The high ceilings, old tiles, and handmade furnishings give
            the place a royal feel, while the contemporary conveniences like air
            conditioning, a mini-bar, and en-suite bathrooms make it quite
            comfortable. Some accommodations even have two bathrooms, which is
            great for getting ready for a safari in the morning without having
            to rush.
          </p>
        </div>

        <div>
          <h4 className="text-xl font-semibold my-3 text-amber-800">
            After Safari Relaxation
          </h4>
          <p>
            Tracking pugmarks, seeing sambar deer, and waiting for that
            heart-stopping glimpse of the tiger may make morning safaris in
            Ranthambore quite exciting. Dev Vilas provides you with the
            tranquility you need to relax when you come back. You may swim in
            the blue pool, relax in the sun with a cold drink, or tell stories
            at the bar, which is appropriately named Fateh&apos;s after the
            famous nature writer Fateh Singh Rathore. Dining here is another
            great thing. The cooks provide a great blend of Rajasthani, Indian,
            and Continental cuisine that is delivered hot and fresh, just like
            at home.
          </p>
        </div>

        <div>
          <h4 className="text-xl font-semibold my-3 text-amber-800">
            Thoughtfully Sustainable
          </h4>
          <p>
            Dev Vilas was created keeping the environment in mind. It is one of
            the more eco-friendly places to stay in the area since it uses
            rainwater, local materials, and technologies that recycle water.
            Also, it was carefully planned such that it is easy for visitors
            with restricted mobility to go about, which is something that not
            many jungle lodges do.
          </p>
        </div>

        <div>
          <h4 className="text-xl font-semibold my-3 text-amber-800">
            Why You’ll Love Staying Here?
          </h4>
          <ul className="mb-3">
            <li>It is conveniently located near the park&apos;s main gate.</li>
            <li>Heritage-world charm with contemporary comfort.</li>
            <li>
              After a safari, you may relax by the pool, in the bar, or at a
              superb restaurant.
            </li>
            <li>Sustainable and inclusive design.</li>
          </ul>
          <p>
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

export default HotelDevVilas;
