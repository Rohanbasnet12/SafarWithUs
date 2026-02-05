import Header from "../Header";
import ImportantLinks from "../ImportantLinks";
import Footer from "../Footer";
import tadobaHotel from "../../assets/images/tadoba1.jpeg";

const AmanIKhas = () => {
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
          Aman I Khas Ranthambore: <br />
          Where Wilderness Meets Royal Luxury
        </h1>
      </div>

      <main className="container mx-auto px-4 py-8">
        <div>
          <p className="mb-2">
            Aman I Khas is an excellent place to stay near Ranthambore National
            Park if you want to spend the day in the wild and the night in
            luxury. While a lot of resorts in Ranthambore claim to show you the
            tigers, this hotel in Ranthambore lets you explore the wild at its
            own pace, with beauty and peace.
          </p>
          <p className="mb-2">
            Aman I Khas is different from regular &qout;budget hotels in
            Ranthambore&qout; or even regular &qout;luxury resorts in
            Ranthambore.&qout; It&apos;s an immersive experience where every
            aspect is about connecting with nature without giving up comfort.
            Your &qout;room&qout; here is a canvas pavilion, which is a raised
            tent that looks like a Mughal hunting camp. It sits on the edge of a
            thick forest and the Aravalli hills.
          </p>
          <p className="mb-2">
            Under a six-meter-high canopy, you&apos;ll discover a peaceful
            sitting space, a big bedroom, and a bathroom with a standalone tub
            or big shower. What about the furniture? Teak writing tables, soft
            daybeds, luxurious linens, and big outside decks make this place
            seem both refined and relaxing. This is luxury camping done with
            style.
          </p>
        </div>

        <div>
          <h4 className="text-xl font-semibold my-3 text-amber-800">
            Why It Stands Out Among the Best
          </h4>
          <p className="mb-2">
            Aman I Khas is not just another lodge; it&apos;s one of the best
            hotels in Ranthambore since it gives such a unique experience. You
            can easily see the benefit: you&apos;re near tiger territory, yet
            you can also walk back to tranquil, well-kept neighborhoods. It
            looks a lot like what &qout;7-star hotels in Ranthambore&qout; would
            look like, and it doesn&apos;t seem too far away.
          </p>
        </div>

        <div>
          <h4 className="text-xl font-semibold my-3 text-amber-800">
            Dining & Moments You’ll Remember
          </h4>
          <p className="mb-2">
            Aman I Khas takes great care in the meals they provide. The dining
            tent is softly lit, the food is cooked with materials grown on the
            land, and there&apos;s no rush; each dish makes you want to stay for
            a long time. You have dinner outside by the fire pit some nights,
            with the forest behind you. People who desire more than just a bed
            and four walls will remember this resort as one of the best in
            Ranthambore.
          </p>
        </div>

        <div>
          <h4 className="text-xl font-semibold my-3 text-amber-800">
            Beyond the Tent
          </h4>
          <p className="mb-2">
            Aman I Khas boasts a step-well-style pool that fits in with the
            scenery, a tent for spa treatments, and field safaris into the park
            twice a day. It honors the notion of wildness by letting as little
            interference as possible and being as real as possible. That
            involves things like going on walks in nature, observing birds, or
            just sitting on your terrace and watching deer go by.
          </p>
        </div>
        <div>
          <h4 className="text-xl font-semibold my-3 text-amber-800">
            Who Will Love It
          </h4>
          <ul className="mb-2 space-y-2">
            <li>
              Couples looking for a romantic getaway with nature just outside
              their door.
            </li>
            <li>
              People who go alone or enjoy nature and seek both luxury and
              peace.
            </li>
            <li>
              Anyone who doesn&apos;t want to stay at &quot;just another hotel
              in Ranthambore&quot; and wants something special.
            </li>
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

export default AmanIKhas;
