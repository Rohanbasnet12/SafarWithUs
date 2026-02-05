import ImportantLinks from "../ImportantLinks";
import Header from "../Header";
import Footer from "../Footer";
import bestTimeBanner from "../../assets/images/main-banner.jpg";
import besttime1 from "../../assets/images/besttime.jpg";
import besttime2 from "../../assets/images/besttime2.jpg";

function RanthamboreHistory() {
  return (
    <>
      <Header></Header>

      <div>
        <img
          src={bestTimeBanner}
          className="timeToVisit"
          alt="Best Time To Visit banner image"
        />
      </div>
      <section className="leaf pb-4">
        <div className="container">
          <div>
            <h1>Ranthambore National Park Geography</h1>
            <p>
              Ranthambore National Park, which lies in the Sawai Madhopur region
              in southern Rajasthan, is one of the most famous wildlife
              sanctuaries in India. The park is very big, covering 1,334 square
              kilometers, which includes its core and buffer zones. The Aravalli
              and Vindhya hill ranges intersect here, making the terrain look
              unusual and rough.
              <br />
              The park has a wonderful combination of steep hills, dry deciduous
              trees, wide meadows, and tranquil lakes. There are also historic
              ruins all across the park that tell stories of how nature and
              history have lived together for hundreds of years. The park&apos;s
              diversified topography helps it seem better and gives homes to
              various flora and animals, including the famed Royal Bengal Tiger,
              which is known all over the globe.
            </p>
          </div>
          <div className="thingsImgBox">
            <img src={besttime1} className="thingsImg" alt="things image" />
            <img src={besttime2} className="thingsImg" alt="things image" />
          </div>

          <div>
            <h4>Topography and Landscape</h4>

            <p>
              Ranthambore has undulating hills, deep valleys, plateaus, and
              small canyons. The park&apos;s height goes from 215 to 505 meters
              above sea level, which changes the terrain and lets a lot of
              different flora and animals thrive there. The Ranthambore Fort is
              the park&apos;s most popular feature. It sits on top of a 700-foot
              hill and has amazing views of the whole forest. This fort is not
              only a historical relic; it is also a vital part of the
              park&apos;s ecosystem. Birds, bats, and even leopards sometimes
              live in its ruins. Padam Talab, Malik Talab, and Rajbagh Talab are
              just a few of the park&apos;s many gorgeous lakes. These lakes are
              highly vital for animals to drink from, especially when it&apos;s
              dry. You may see tigers, crocodiles, and a lot of other sorts of
              birds that live in water in these lakes all the time.
            </p>

            <h4>Climate and Vegetation</h4>
            <p>
              Ranthambore has a dry tropical climate with three seasons: summer,
              monsoon, and winter.
            </p>
            <ul>
              <li>
                From March to June, summers are hot and dry, with temperatures
                going up to 45°C.
              </li>
              <li>
                The rain is mild throughout the monsoon season (July to
                September), which keeps the forest green and lush.
              </li>
              <li>
                The weather is mild and nice in the winter, from October to
                February, which is the greatest time to go on safaris and see
                animals.
              </li>
            </ul>
            <p>
              Dhok trees (Anogeissus pendula) make up around 80% of the
              vegetation in the park. Other notable species are the banyan,
              peepal, neem, flame of the forest, and banyan fig trees. Deer,
              nilgai, and sambar are some of the herbivores that live in the
              grasslands and scrublands. The dense canopies give shade and keep
              predators from seeing them.
            </p>

            <h4>Rivers and Water Systems</h4>
            <p>
              The Chambal River flows along the southern boundary of
              Ranthambore, while the Banas River flows along the northern
              border. The park needs these two rivers very much. The park has a
              lot of small seasonal streams and ponds that give animals water
              all year round. The park has both natural and man-made lakes,
              which keep animals there even when it is dry. This is one of the
              best sites in India to watch animals all year round.
            </p>

            <h4>Wildlife and Ecosystem Diversity</h4>
            <p>
              The park has a lot of different types of terrain, which is why it
              has so many animals. There are more animals in Ranthambore than
              tigers. There are also jackals, caracals, marsh crocodiles, Indian
              foxes, and striped hyenas, as well as leopards and sloth bears.
              There are more than 300 types of birds that reside in the lakes
              and marshes, some of which come here in the winter. Ranthambore is
              an excellent example of a healthy semi-arid area in India since it
              features a mix of dry woodlands, marshes, and open grasslands.
            </p>

            <h4>The Living Landscape of Ranthambore</h4>
            <p>
              The geography of Ranthambore National Park isn&apos;t only about
              the land; it&apos;s also about how nature and history have come
              together in a beautiful way throughout time. The historic
              Ranthambore Fort, which rises above deep forests, and the tranquil
              lakes that reflect the golden sunset are only two examples of
              places in this area that have stories to tell. If you love
              animals, want to snap photographs, or are just interested in the
              region, learning about Ranthambore&apos;s geology will help you
              appreciate its beauty even more. There are towering cliffs, huge
              woodlands, and the roar of a tiger all in perfect harmony here.
              Apart from Ranthambore, you also explore the breathtaking
              landscapes of other national parks with us. For example, Jim
              Corbett National Park, Kaziranga National Park, Pench National
              Park, Kanha National Park, etc.
            </p>
          </div>
        </div>
      </section>

      <ImportantLinks />
      <Footer />
    </>
  );
}

export default RanthamboreHistory;
