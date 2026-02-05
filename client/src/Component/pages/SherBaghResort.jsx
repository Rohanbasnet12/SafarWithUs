import Header from "../Header";
import ImportantLinks from "../ImportantLinks";
import Footer from "../Footer";
import tadobaHotel from "../../assets/images/tadoba1.jpeg";

const SherBaghResort = () => {
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
          Sher Bagh Resort, Ranthambore: <br />
          Where Wilderness Meets Royal Luxury
        </h1>
      </div>

      <main className="container mx-auto px-4 py-8">
        <div>
          <p className="mb-2">
            The Sher Bagh Resort in Ranthambore makes your dream of waking up to
            the sound of a tiger in the distance while having your morning tea
            in style come true. This modest tented lodge is placed on the edge
            of Ranthambore National Park and brilliantly captures the spirit of
            the wild by mixing a safari with traditional Rajput hospitality.
          </p>
          <p className="mb-2">
            Sher Bagh is a distinct kind of hotel than the others in Ranthambore
            since it is more intimate and spiritual. Every corner portrays the
            heritage of Rajasthan&apos;s royal forest traditions while also
            making sure that modern tourists have all they need.
          </p>
        </div>

        <div>
          <h4 className="text-xl font-semibold my-3 text-amber-800">
            Stay Experience
          </h4>
          <p className="mb-2">
            When you go into one of Sher Bagh&apos;s beautifully made tents,
            it&apos;s like stepping back in time to a time when elegance and
            adventure coexisted. Each of the 12 tented rooms has Edwardian
            campaign furniture, warm lighting, and rich wood accents that make
            them feel like a 1920s safari camp. Each tent has a comfortable bed,
            a separate veranda where you can relax and watch nature, and an en
            suite bathroom with a vintage bathtub and rain shower. This resort
            is a peaceful getaway from busy city life. It&apos;s perfect for
            travelers, honeymooners, and those who love animals.
          </p>
          <p className="mb-2">
            People often compare Sher Bagh to the seven-star hotels in
            Ranthambore because of its distinctive, detail-oriented service. It
            is also commonly listed as one of the best resorts in Ranthambore.
          </p>
        </div>

        <div>
          <h4 className="text-xl font-semibold my-3 text-amber-800">
            Dining Experience
          </h4>
          <p className="mb-2">
            At night, Sher Bagh is a beautiful place to be. Visitors gather
            around the campfire to have a supper they won&apos;t forget beneath
            the stars and lantern-lit trails. The resort&apos;s private garden
            grows fresh vegetables and herbs that are beautifully cooked in the
            restaurant. Whether you&apos;re eating a delicious Indian thali
            served on traditional brassware, continental classics, or live BBQ
            nights, you&apos;ll taste the local flavor with every meal. You may
            even ask for a private meal under the stars that looks like a royal
            safari. Foodies who want real, fancy dining experiences think Sher
            Bagh is one of the best hotels in Ranthambore because of this sort
            of food.
          </p>
        </div>

        <div>
          <h4 className="text-xl font-semibold my-3 text-amber-800">
            Facilities & Ambience
          </h4>
          <p className="mb-2">
            Sher Bagh is one of the most luxurious lodges in Ranthambore, yet it
            still has a natural feel that pays attention to its surroundings.
            After a day of safaris, visitors may rest in the jungle spa, swim in
            the outdoor pool, or go through the large library and bar selection,
            which is great for evening conversations.
          </p>
          <p className="mb-2">
            The resort has laundry facilities, Wi-Fi, nature trails, guided
            safaris, and a store where you can buy one-of-a-kind souvenirs
            handcrafted by local artists. Enjoy some peaceful sophistication as
            you read a nice book or get ready for your next trip to see tigers.
          </p>
        </div>
        <div>
          <h4 className="text-xl font-semibold my-3 text-amber-800">
            Why Sher Bagh is a Must-Stay in Ranthambore?
          </h4>
          <ul className="mb-2 space-y-2">
            <li>It&apos;s easy to get there from the park&apos;s entrance.</li>
            <li>A quiet, private place with individual service</li>
            <li>
              Design that is good for the environment and sustainable operations
            </li>
            <li>Real food made using local ingredients</li>
            <li>Unmatched safari trips with famous guides</li>
          </ul>
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

export default SherBaghResort;
