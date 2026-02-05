import ImportantLinks from "../ImportantLinks";
import Header from "../Header";
import Footer from "../Footer";
import bestTimeBanner from "../../assets/images/main-banner.jpg";
import besttime1 from "../../assets/images/besttime.jpg";
import besttime2 from "../../assets/images/besttime2.jpg";

function Birdwatching() {
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
            <h1>
              Birds of Ranthambore National Park: A Paradise for Birdwatchers
            </h1>
            <p>
              If you believe Ranthambore National Park is just for tigers, think
              again. Ranthambore is a birdwatcher&apos;s delight, with a wide
              variety of birds living there. It&apos;s also a great place to go
              on tiger safaris. The park is a lovely place for everyone who
              likes birds and nature. There are colorful peacocks dancing at
              dawn and majestic eagles flying over the fort&apos;s ruins.
              Ranthambore is a great place for both resident and migratory birds
              to live since it has dry deciduous trees, open grasslands, and
              peaceful lakes. It has around 320 documented species, making it
              one of the best places in North India to take pictures of and
              watch birds.
            </p>
          </div>
          <div className="thingsImgBox">
            <img src={besttime1} className="thingsImg" alt="things image" />
            <img src={besttime2} className="thingsImg" alt="things image" />
          </div>

          <div>
            <h4>Why is Ranthambore a Birdwatcher’s Dream?</h4>

            <p>
              Ranthambore is a great place for birds of all kinds since it has
              so many different types of habitats, from lakes and marshes to
              steep cliffs and scrublands. Water birds love to hang out in the
              park&apos;s main lakes, such as Padam Talao, Rajbagh Talao, and
              Malik Talao.
            </p>
            <p>
              TDuring the winter months (November to February), birds from
              Central Asia, Europe, and Siberia come to the park to stay. These
              periodic visitors add to the permanent species, making a bright,
              lively show that nature lovers love. Birds will always be around
              you, whether you&apos;re on a jeep safari, touring the remains of
              the Ranthambore Fort, or meandering along the fringes of the
              jungle.
            </p>

            <h4>Common Birds Found in Ranthambore</h4>
            <p>
              There are a lot of different kinds of birds at Ranthambore, from
              little songbirds to big birds of prey. These are some of the birds
              you are most likely to see in the park:
            </p>
            <div>
              <table className="table table-bordered text-center">
                <thead className="table-light">
                  <tr>
                    <th>Category</th>
                    <th>Bird Species</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Water Birds and Waders</td>
                    <td>
                      Painted Stork, Black Stork, Asian Openbill Stork, Egrets
                      and Herons, White-breasted Waterhen, Woolly-necked Stork,
                      Common Kingfisher, Pied Kingfisher, Indian Cormorant,
                      Darters (Snake Birds)
                    </td>
                  </tr>
                  <tr>
                    <td>Raptors (Birds of Prey)</td>
                    <td>
                      Crested Serpent Eagle, Changeable Hawk Eagle, Bonelli’s
                      Eagle, Laggar Falcon, Shikra, Osprey, Black-winged Kite
                    </td>
                  </tr>
                  <tr>
                    <td>Ground Birds and Forest Dwellers</td>
                    <td>
                      Indian Peafowl (Peacock), Grey Junglefowl, Painted
                      Spurfowl, Indian Pitta, White-throated Kingfisher, Treepie
                      (Rufous Treepie), Laughing Dove, Common Hoopoe, Green
                      Bee-eater
                    </td>
                  </tr>
                  <tr>
                    <td>Migratory Birds (Seasonal Visitors)</td>
                    <td>
                      Ruddy Shelduck, Bar-headed Goose, Demoiselle Crane,
                      Greater Flamingo, Black-tailed Godwit, Northern Shoveler,
                      Pintail Duck
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h4>Best Places for Bird Watching in Ranthambore</h4>
            <p>
              Here are some of the greatest places in and around the park to go
              birdwatching:
            </p>
            <ul>
              <li>
                <strong>Padam Talao and Rajbagh Talao: </strong>
                Great for seeing storks and aquatic fowl.
              </li>
              <li>
                <strong>Ranthambore Fort: </strong>
                Great for spotting raptors and birds that live in forests.
              </li>
              <li>
                <strong>Malik Talao: </strong>A peaceful spot where you may
                regularly watch kingfishers and jacanas.
              </li>
              <li>
                <strong>Jhalra Area and Kachida Valley: </strong>
                Good for little songbirds, peafowls, and parakeets.
              </li>
              <li>
                <strong>Surwal Lake (near the park): </strong>
                During the winter, a lot of migrating birds come here.
              </li>
            </ul>

            <h4>The Ideal Time for Birding</h4>
            <p>
              Bird viewing at Ranthambore is ideal from November to March, when
              the weather is nice and migratory birds come to stay with the
              locals. The best times to see and photograph birds are early in
              the morning and late in the afternoon.
            </p>

            <h4>A Paradise Beyond Tigers</h4>
            <p>
              Ranthambore is known for its beautiful tigers, but its birds are
              just as interesting. The splash of water birds, the flutter of
              wings, and the calls that resonate through the forest make every
              part of the park come alive. Ranthambore National Park guarantees
              an outstanding birdwatching experience that extends far beyond the
              big cats, whether you&apos;re a birdwatcher, a wildlife
              photographer, or just someone who loves nature.
              <br />
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

export default Birdwatching;
