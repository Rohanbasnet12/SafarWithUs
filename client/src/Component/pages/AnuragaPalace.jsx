import Header from "../Header";
import ImportantLinks from "../ImportantLinks";
import Footer from "../Footer";
import tadobaHotel from "../../assets/images/tadoba1.jpeg";

const AnuragaPalace = () => {
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
          Anuraga Palace, Ranthambore:
          <br /> Where Royal Heritage Meets Jungle Luxury
        </h1>
      </div>

      <main className="container mx-auto px-4 py-8">
        <div>
          <p className="mb-2">
            If you want to observe animals and stay at one of the best resorts
            in Ranthambore, Anuraga Palace should be at the top of your list.
            This lovely hotel is situated in the middle of Sawai Madhopur, only
            a few minutes from the gates of Ranthambore National Park. It has
            the charm of regal Rajasthan while also giving you all the comforts
            of modern hospitality.
          </p>
          <p className="mb-2">
            IThe Anuraga Palace appears like a huge Rajasthani haveli. It has a
            stunning white facade, intricate jaali work, and quiet gardens.
            It&apos;s not just another hotel in Ranthambore; it&apos;s an
            experience that mixes modern flair with old-world charm. Whether
            you&apos;re here for a tiger safari, a family holiday, or a relaxing
            weekend break, this resort has the kind of warmth and attention to
            detail that will make your stay unforgettable.
          </p>
        </div>

        <div>
          <h4 className="text-xl font-semibold my-3 text-amber-800">
            Stay Options
          </h4>
          <p className="mb-2">
            There are 40 luxury rooms and 4 premium suites at Anuraga Palace.
            These rooms and suites are aimed to merge the beauty of the past
            with the comfort of the present. The architectural style is typical
            of Rajasthan, with floral patterns, elegant arches, and ornaments
            crafted by hand that are akin to the art of the Meena people who
            dwell there.
          </p>
          <p className="mb-2">
            Every room offers a view of green grass or a courtyard, which makes
            it easier to connect with nature. Ranthambore boasts all the luxury
            resort features you could wish for, like air conditioning, Wi-Fi,
            plush bedrooms, elegant bathrooms, and lovely lounge places.
          </p>
          <p className="mb-2">
            The suites, on the other hand, make your stay even better by
            offering you extra room, carefully designed furnishings, and a regal
            ambiance. This site is special since it provides something for
            everyone, whether they are on their honeymoon, with their family, or
            traveling alone. It is located between budget hotels and high-end
            boutique resorts in Ranthambore, making it a great place to stay for
            a fair price.
          </p>
        </div>

        <div>
          <h4 className="text-xl font-semibold my-3 text-amber-800">
            Dining Facilities
          </h4>
          <p className="mb-2">
            Another great thing about Anuraga Palace is the dining. The
            restaurant provides a wide range of dishes, including real
            Rajasthani food, classic Indian food, and some of the best food from
            across the world. They use fresh, local ingredients to make each
            meal and serve it with style.
          </p>
          <p className="mb-2">
            After a long safari in the bush, relax with a cup of masala chai in
            the courtyard or enjoy a candlelit dinner beneath the stars. The
            eating experience is both elegant and informal, so you&apos;ll feel
            perfectly at home. This hotel really does provide the greatest meals
            in Ranthambore if you&apos;re a foodie seeking the top
            accommodations.
          </p>
        </div>

        <div>
          <h4 className="text-xl font-semibold my-3 text-amber-800">
            Beyond the Stay
          </h4>
          <p className="mb-2">
            Anuraga Palace has more than just accommodations and meals. Guests
            may use a lot of different amenities, such as a dazzling swimming
            pool, a spa that makes you feel better, yoga classes on request,
            play areas for youngsters, and even movie nights outside. If
            you&apos;re traveling with kids, childcare and other services that
            are good for kids make it even easier.
          </p>
          <p className="mb-2">
            Business travelers and people who plan events adore it too. The
            hotel has a well-equipped conference room, big banquet halls, and
            even wedding plans with a royal touch. It&apos;s one of the top
            resorts in Ranthambore for both business and pleasure trips since it
            can be used for both.
          </p>
        </div>
        <div>
          <h4 className="text-xl font-semibold my-3 text-amber-800">
            Why Travelers Love Anuraga Palace
          </h4>
          <ul className="mb-2 space-y-2">
            <li>
              A beautiful vintage design in a peaceful area with lots of trees.
            </li>
            <li>
              Thoughtful hospitality that seems like a personal touch, not a
              process.
            </li>
            <li>
              Close to Ranthambore National Park for quick access to safaris.
            </li>
            <li>A mix of traditional beauty and modern comfort.</li>
            <li>
              A great deal that gives you a taste of what many people term the
              &quot;7-star experience&quot; in Ranthambore, but without the
              expensive rates.
            </li>
          </ul>
          <p className="mb-2">
            Anuraga Palace is where your dream of waking up in a palace and then
            going on a tiger safari comes true. It&apos;s everything you would
            expect from a real luxury resort in Ranthambore, plus a little bit
            more. It&apos;s warm, friendly, and extremely Rajasthani. Apart from
            Ranthambore, you also explore the breathtaking landscapes of other
            national parks with us. For example, Jim Corbett National Park,
            Kaziranga National Park, Pench National Park, Kanha National Park,
            etc.
          </p>
        </div>
      </main>

      <ImportantLinks />
      <Footer />
    </>
  );
};

export default AnuragaPalace;
