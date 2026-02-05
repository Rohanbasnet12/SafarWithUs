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
            <h1>Ranthambore National Park History</h1>
            <p>
              The beautiful Ranthambore National Park in Rajasthan&apos;s Sawai
              Madhopur district is known not just for its large number of tigers
              but also for its long history that goes back more than a thousand
              years. The park gets its name from the famous Ranthambore Fort,
              which stands in the center of the forest and calmly watches as
              this area changes from royal hunting grounds to a world-famous
              tiger reserve.
            </p>
          </div>
          <div className="thingsImgBox">
            <img src={besttime1} className="thingsImg" alt="things image" />
            <img src={besttime2} className="thingsImg" alt="things image" />
          </div>

          <div>
            <h4>The Royal Era: From Fort to Hunting Ground</h4>

            <p>
              The Jaipur royal family hunted in the Ranthambore jungles long
              before India became independent. The Maharajas of Jaipur owned the
              forest directly, but the kingdom&apos;s hunting department took
              care of it. The people who lived near the forest might collect
              anything from it as long as they paid a tiny annual fee to the
              royal treasury.
            </p>
            <p>
              The forest was mostly untouched because there weren&apos;t many
              people living there and they didn&apos;t bother it much. Even
              though it was utilized for royal hunts, the huge area of green
              space and abundant animals persisted for hundreds of years. The
              Chauhan monarchs erected the Ranthambore Fort in the 10th century,
              and it made the area very important in history. It was both a
              symbol of Rajput bravery and the center of this thick jungle.
            </p>

            <h4>The Shift from Exploitation to Conservation</h4>
            <p>
              As India&apos;s population and industry grew, the amount of
              deforestation across the country surged quickly. The thick forests
              that used to go on forever started to get smaller. By the middle
              of the 20th century, the loss of trees and animals in the forest
              was so bad that it led to the creation of legislation to preserve
              them.
              <br />
              The Rajasthan Forest Act went into effect in 1953. It made several
              forest regions, including Ranthambore, legally protected. In 1955,
              two years later, the area was designated the Sawai Madhopur
              Sanctuary, which meant that no businesses could operate there to
              protect the wildlife that was still there. Tiger populations, on
              the other hand, kept going down, which made the authorities take
              harsher measures.
            </p>

            <h4>Project Tiger and the Birth of the National Park</h4>
            <p>
              The Project Tiger initiative, which was India&apos;s main effort
              to conserve tigers from extinction, chose Ranthambore in 1973.
              This was the turning moment. At first, a core area of around 60
              square miles was set aside as a Tiger Reserve. More than 12
              communities had to move by 1980, and 282.03 square kilometers were
              set aside as Ranthambore National Park. Later, to make
              conservation even stronger, nearby areas were added. The Kela Devi
              Sanctuary (647 sq km) was added in 1983, and the Sawai Mansingh
              Sanctuary (130 sq km) was added in 1984. Together, these areas
              make up the bigger Ranthambore Tiger Reserve we know today.
            </p>

            <h4>Ranthambore Today</h4>
            <p>
              Today, Ranthambore is a great example of how to protect wildlife.
              Since the 1970s, the number of tigers has increased substantially,
              and the park is now known as one of the greatest sites in the
              world to watch tigers in the wild. Ranthambore National Park is a
              timeless emblem of India&apos;s strong ties between its beautiful
              past and its dynamic wilderness. It combines regal heritage,
              natural beauty, and conservation success. Apart from Ranthambore,
              you also explore the breathtaking landscapes of other national
              parks with us. For example, Jim Corbett National Park, Kaziranga
              National Park, Pench National Park, Kanha National Park, etc.
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
