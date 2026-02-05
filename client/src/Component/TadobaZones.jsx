import bandhav from "../assets/images/tadobazone.jpg";
import "../styles/CorbettZones.css";

function TadobaZones() {
  return (
    <>
      <section id="ranthambore-zones">
        <div id="zone-top-content-wrapper">
          {/* Header */}
          <div className="header mb-4 text-left">
            <h3
              className="mb-2 text-2xl font-semibold"
              style={{ color: "#853100ff" }}
            >
              Ranthambore’s Famous Tigers and Their Stories
            </h3>

            <p>
              Ranthambore National Park is one of India’s most famous wildlife
              destinations. It is known for its great population of Bengal
              Tigers. Many of these majestic big cats have achieved legendary
              status throughout the years. The tales of these beasts never cease
              to fascinate nature enthusiasts worldwide.
            </p>
          </div>

          <div id="core-zone" className="grid grid-cols-3 gap-5">
            {/* Left */}
            <img src={bandhav} alt="bandhav image" className="core-img" />
            {/* Right */}
            <div className="col-span-2">
              <div>
                <h5 className="text-amber-800 mb-2 text-amber-900 font-semibold text-2xl">
                  Machli (T-16)
                </h5>
                <p>
                  Famous as the Queen of Ranthambore, Machli remains the park’s
                  most iconic tiger. It was born in 1997 and lived an excellent
                  life of nearly 19 years. It is a great age for a wild tiger.
                  Machli was known for her fearlessness and hunting prowess.
                  Machli once famously fought and killed a crocodile. Moreover,
                  she was also a devoted mother; she raised several cubs. These
                  cubs went on to rule different territories in the Ranthambore
                  forest.
                </p>
              </div>

              <div className="mt-3">
                <h5 className="text-amber-800 mb-2 text-amber-900 font-semibold text-2xl">
                  Ustad (T-24)
                </h5>
                <p>
                  People knew Ustad for his strong presence and power. He was
                  one of the strongest males in the park and commanded his
                  domain with ease. But in 2015, he was moved to a zoo after a
                  few bad fights with people.
                </p>
              </div>
            </div>
          </div>

          <div id="buffer-zone" className="grid grid-cols-3 gap-5 mt-4">
            {/* Left */}
            <div className="col-span-2">
              <h5 className="text-amber-800 mb-2 text-amber-900 font-semibold text-2xl">
                Sultan (T-72)
              </h5>
              <p>
                People liked Sultan because he was big and looked like a king.
                He was a real warrior of the jungle, but sadly, he died in 2018
                after fighting with another tiger over land.
              </p>
              <div className="mt-3">
                <h5 className="text-amber-800 mb-2 text-amber-900 font-semibold text-2xl">
                  Broken Tail (T-17)
                </h5>
                <p>
                  Broken Tail was a park favorite since everyone knew him by his
                  broken tail. Sadly, he went missing in 2010 and was eventually
                  found dead in a village nearby.
                </p>
                <p>
                  These famous tigers not only made Ranthambore&apos;s wildlife
                  history famous, but they also motivated many tourists to
                  admire and protect India&apos;s natural beauty.
                </p>
              </div>
            </div>
            {/* Right */}
            <img src={bandhav} alt="bandhav image" className="core-img" />
          </div>
        </div>
      </section>
    </>
  );
}

export default TadobaZones;
