import Header from "../Header";
import ImportantLinks from "../ImportantLinks";
import Footer from "../Footer";
import faunaBanner from "../../assets/images/fauna-banner.jpg";
import fauna1 from "../../assets/images/fauna2.jpg";
import fauna2 from "../../assets/images/fauna3.jpg";
import fauna3 from "../../assets/images/fauna1.jpg";
import { useEffect } from "react";
function TadobaFauna() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <div>
        <img
          src={faunaBanner}
          className="faunaBanner"
          alt="Fauna banner image"
        />
      </div>
      <section style={{ width: "99%" }}>
        <div className="container">
          <div>
            <h1>Fauna in Ranthambore National Park</h1>
            <p className="mb-4">
              The trees of Ranthambore are its soul, and the wildlife is its
              throbbing heart. Every sound, from a deer alarm call to a
              tiger&apos;s roar, conveys a story about life and death. People
              from all over the world come to Ranthambore National Park to see
              its animals, take pictures, and enjoy nature.
            </p>
          </div>
          <div>
            <div className="row">
              <div className="col-sm-12 col-md-8 col-lg-8">
                <h5 className="text-2xl mb-2 font-medium">
                  The Royal Bengal Tiger: Pride of Ranthambore
                </h5>
                <p>
                  The Royal Bengal Tiger is the main attraction. Ranthambore is
                  one of the best spots in India to see tigers in the wild. What
                  makes them unusual here is that they are diurnal, which means
                  you can often observe them during the day. Seeing a tiger walk
                  along the track or lie down by a lake is something you&apos;ll
                  never forget.
                </p>
                <p>
                  Every tiger has its own tale. The famed Machli, who was
                  formerly the Queen of Ranthambore, became known around the
                  world for her beauty and strength. Her offspring still
                  dominate different parts of the park, which keeps her memory
                  alive.
                </p>

                <h5 className="text-xl font-medium my-2">
                  Other Big Cats and Carnivores
                </h5>
                <p>
                  Of course, tigers aren&apos;t the only ones. Leopards,
                  caracals, fisher cats, jungle cats, and desert cats all live
                  in Ranthambore. Leopards want to be alone most of the time,
                  and you can usually find them in rocky and mountainous places.
                  A caracal is a rare and hard-to-find cat with beautiful tufted
                  ears. If you&apos;re lucky, you could glimpse one. There are
                  also foxes, jackals, striped hyenas, and sloth bears that live
                  in the park. You can clearly tell sloth bears apart from other
                  bears because they have shaggy coats and love honey. They are
                  often seen in the early morning or late evening.
                </p>

                <h5 className="text-xl font-medium my-2">
                  Herbivores: The Gentle Inhabitants
                </h5>
                <p>
                  There are a lot of prey animals in the Ranthambore grasslands,
                  just like there are in other places where predators live.
                  Chinkara, sambar, chital, and nilgai are the most prevalent
                  types of deer in India. Watching a calm herd of deer or nilgai
                  go down a dusty trail is just as exciting as seeing a wild
                  tiger. Keep an eye out for jumping langurs and interested
                  mongooses as you walk through the woods. Every part of the
                  food chain is important for it to stay alive.
                </p>
              </div>
              <div className="col-sm-12 col-md-4 col-lg-4">
                <img src={fauna1} className="m-3 imgFlora" alt="" />
                <img src={fauna2} className="m-3 imgFlora" alt="" />
                <img src={fauna3} className="m-3 imgFlora" alt="" />
                {/* <img src={fauna3} className="m-3 imgFlora" alt="" /> */}
              </div>
            </div>
            <div>
              <h5 className="text-xl font-medium my-2">
                Birdlife: A Paradise for Birdwatchers
              </h5>
              <p>
                If you love birds, you should travel to Ranthambore. The park is
                a great place for birdwatchers because it has more than 300
                different kinds of birds. The park&apos;s constantly changing
                streams and sky are home to many different kinds of birds, such
                as the dignified sarus crane, the beautiful kingfisher, and the
                majestic Indian eagle.
              </p>
              <p>
                When birds migrate from Europe and Siberia to the lakes in the
                winter, they come alive. If you love birds, bring your
                binoculars and be ready for a great time at Padam Talao and
                Rajbagh Lake.
              </p>

              <h5 className="text-xl font-medium my-2">
                Reptiles and Amphibians
              </h5>
              <p>
                There are a lot of various kinds of snakes, turtles, monitor
                lizards, Indian pythons, and mugger crocodiles that live in the
                marshes and lakes of Ranthambore. During the monsoon season,
                frogs and toads croak, making a symphony of sounds throughout
                the jungle.
              </p>

              <h5 className="text-xl font-medium my-2">The Circle of Life</h5>
              <p>
                The fact that Ranthambore is related to other places is what
                makes it unique. Trees feed deer, which in turn feed tigers.
                This keeps the ecosystem in balance. Birds that spread seeds,
                insects that pollinate flowers, and even reptiles all help keep
                the order of nature. Going on a safari here isn&apos;t just
                about seeing animals; it&apos;s also about feeling that
                connection and seeing nature at its best. So, every moment in
                Ranthambore reminds you that the wild is alive, beautiful, and
                perfectly balanced. You might see a crocodile basking in the
                sun, a peacock flowing gracefully through the golden light, or a
                tiger chasing its prey. Apart from Ranthambore, you also explore
                the breathtaking landscapes of other national parks with us. For
                example, Jim Corbett National Park, Kaziranga National Park,
                Pench National Park, Kanha National Park, etc.
              </p>
            </div>
          </div>
        </div>
      </section>
      <ImportantLinks />
      <Footer />
    </>
  );
}

export default TadobaFauna;
