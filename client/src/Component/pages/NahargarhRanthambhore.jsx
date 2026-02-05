import Header from "../Header";
import ImportantLinks from "../ImportantLinks";
import Footer from "../Footer";
import tadobaHotel from "../../assets/images/tadoba1.jpeg";

const NahargarhRanthambhore = () => {
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
          Nahargarh Ranthambhore: <br />
          Where Royal Grandeur Meets Jungle Adventure
        </h1>
      </div>

      <main className="container mx-auto px-4 py-8">
        <div>
          <p className="mb-2">
            When you wake up in the morning, you can hear peacocks crowing all
            across the Aravalli Hills. The light shines into regal courtyards,
            and the wild heart of Ranthambore National Park is just outside your
            window. Take an amazing trip to Nahargarh Ranthambhore, a beautiful
            resort that perfectly blends the majesty of the Rajasthani royalty
            with the thrill of the wild.
          </p>
          <p className="mb-2">
            Among the several Ranthambore resorts, Nahargarh stands out. This
            Ranthambore hotel is fashioned like a 16th-century castle, with
            beautiful domes, intricate jharokhas, and large Mughal gardens. You
            may feel like royalty when you stay here. Even though it is quite
            fancy, it is warm, cozy, and connected to nature.
          </p>
        </div>

        <div>
          <h4 className="text-xl font-semibold my-3 text-amber-800">
            A Stay Fit for Royalty
          </h4>
          <p className="mb-2">
            There is grandeur in every aspect of Nahargarh. The resort has a
            combination of luxury rooms and large suites, all of which include
            exquisite Rajasthani art, antique furniture, and modern comforts.
            The spacious apartments on the first floor lead to courtyards with
            flowers and fountains. On the second floor, private terraces provide
            stunning views of the forest and hills. They are great for an
            evening cup of tea or a peaceful book after a safari.
          </p>
          <p className="mb-2">
            This castle provides the right blend between history and luxury,
            whether you&apos;re on a romantic honeymoon, a family holiday, or a
            wildlife expedition. Everything here is a sign of intentional
            luxury, from the luxurious beds to the high-end conveniences like
            Wi-Fi, air conditioning, and fancy bathrooms. It&apos;s no surprise
            that it&apos;s typically rated as one of the greatest resorts in
            Ranthambore and acclaimed as one of the most beautiful luxury
            resorts in Ranthambore.
          </p>
        </div>

        <div>
          <h4 className="text-xl font-semibold my-3 text-amber-800">
            Dining in Royal Style
          </h4>
          <p className="mb-2">
            Dining in Nahargarh is an experience in and of itself. The
            restaurant provides a regal range of food from all over the world,
            from traditional Rajasthani thalis that are full of local flavor to
            dishes that are sure to please everyone. Every meal is a flavor
            festival, and the vast dining hall is lit by candlelight and has
            gold inlay on the walls.
          </p>
          <p className="mb-2">
            Want to relax after dinner? Walk inside the classy Lancer&apos;s
            Bar, where quiet music, classic drinks, and the smell of the desert
            wind make it a great place to talk and laugh for a long time.
          </p>
        </div>

        <div>
          <h4 className="text-xl font-semibold my-3 text-amber-800">
            Facilities That Redefine Comfort
          </h4>
          <p className="mb-2">
            It&apos;s not just about how beautiful Nahargarh is; it&apos;s also
            about the memories you&apos;ll make there. The resort has a
            beautiful pool, a spa, a reading café, a business center, a poolside
            bar, and even yoga classes that you may ask for. The staff goes
            above and beyond to make sure families are comfortable and well
            cared for, which is something that sets it apart from many other top
            hotels in Ranthambore.
          </p>
          <p className="mb-2">
            Nahargarh is really welcoming, even if it is very grand. It has a
            wide range of rooms, so it&apos;s good for all kinds of guests,
            whether you&apos;re looking for the luxury of a 7-star hotel in
            Ranthambore or the charm of a budget hotel in Ranthambore. Apart
            from Ranthambore, you also explore the breathtaking landscapes of
            other national parks with us. For example, Jim Corbett National
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

export default NahargarhRanthambhore;
