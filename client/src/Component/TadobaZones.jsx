import bandhav from "../assets/images/tadobazone.jpg";
import "../styles/CorbettZones.css";

function TadobaZones() {
  return (
    <>
      <section id="ranthambore-zones">
        <div id="zone-top-content-wrapper">
          {/* Header */}
          <div className="header mb-4 text-left">
            <h3 className="mb-2 text-2xl font-semibold">
              History The Legacy of Satpura National Park
            </h3>

            <p>
              It is said that in the 15th century the Gond kings ruled this area
              that makes the park have a great history of kings and queens. But
              also some locals say that there was a person named Taru who was
              killed by a tiger and in his honour near the Lake a temple was
              built. This is still worshipped and visited by the locals. The
              park was established in 1955, and later joined with Andhari
              Wildlife Sanctuary in 1995 to create the Satpura Andhari Tiger
              Reserve. You can still see ancient stone pillars built by the Gond
              kings along old routes which were once used for communication
              through bell signals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <img
              src={bandhav}
              alt="Tadoba Zone"
              className="zone-image h-full object-cover"
            />
            <div className="md:col-span-2">
              <p>
                Satpura National Park holds a special place when you unfold its
                history, longevity, and heritage story. Set away from the hustle
                and bustle of the city and experience wildlife landscape at its
                best. This tiger reserve has huge popularity due to the presence
                of the king and the queen of tigers. The safari holiday brings a
                lot of fun, and there is a huge story behind this scenic
                landscape, which will be true excitement for a history lover.
                Raw natural surroundings never fail to impress in the nearby
                Andhari part of the reserve named as Andhari River. The name
                Satpura is taken from the name of the god &quot;Satpura&quot; or
                &quot;Taru&quot;, worshiped by the tribal locals who live in the
                dense forests of the Satpura. Satpura National Park is also
                known as the Tiger capital of India. The forest is divided into
                three ranges: Satpura North Range, Kolsa South and Mohurli
                Range.
              </p>
              <p>
                Satpura Tiger Reserve Forest is divided into a core zone and a
                buffer zone, and in the core zone, no locals are allowed. There
                are also Tourism zones and Non-Tourism zones and in the Tourism
                zone only 20% tourists are allowed, while the 80 % area is
                Non-Tourism zone where the forest authorities are allowed to
                enter. The jungle has a good water resource where animals often
                come to quench their thirst. Satpura jungle is beyond Tiger, as
                it seems like almost a different world altogether with majestic
                sightings of greater courcal, goose, songbirds, and many more.
                Satpura Lake is spread over 45 km and the place was declared a
                sanctuary in 1935.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TadobaZones;
