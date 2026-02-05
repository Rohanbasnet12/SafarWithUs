import Header from "../Header";
import ImportantLinks from "../ImportantLinks";
import Footer from "../Footer";
import floraBanner from "../../assets/images/flora-banner.jpg";
import flora1 from "../../assets/images/flora1.jpg";
import flora2 from "../../assets/images/flora2.jpg";
import flora3 from "../../assets/images/flora3.jpg";
import { useEffect } from "react";
function TadobaFlora() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header></Header>
      <div>
        <img src={floraBanner} className="floraBanner" alt="" />
      </div>
      <section className="leaf">
        <div className="container">
          <div>
            <h1>Flora in Ranthambore National Park</h1>
            <p>
              When you think of Ranthambore National Park, you probably picture
              a beautiful tiger walking across the golden meadows. But when you
              get closer to the beautiful wilderness, you&apos;ll realise that
              it has a lot more than just creatures. Ranthambore has some of
              India&apos;s most beautiful ecosystems, which are helped by the
              park&apos;s many different plants. These include dry woodlands,
              patches of green grass, and empty spaces.
            </p>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-8 col-lg-8">
              <h5 className="text-xl font-medium my-2">
                A Forest of Many Moods
              </h5>
              <p>
                The landscape of Ranthambore is full of surprises. It includes
                the Aravalli and Vindhya hills, steep slopes, gentle valleys,
                deep ravines, and calm lakes. Even in the driest months of the
                year, the Banas and Chambal rivers that run through the park
                supply water and life.
                <br />
                Ranthambore is home to more than 300 plant species, even though
                it is in a semi-arid area near the Thar Desert. The park has
                1,300 square kilometres of grassland and tropical dry deciduous
                forest.
                <br />
                When the monsoon approaches, the park turns into a beautiful
                paradise with a rainbow of green colours. In the summer, when
                these trees lose their leaves, the view becomes more raw and
                gorgeous, with earthy and golden colours.
              </p>

              <h5 className="text-xl font-medium my-2">
                Meet the King of Ranthambore’s Flora: The Dhok Tree
              </h5>
              <p>
                The Dhok, or Anogeissus pendula, is the tree that represents
                Ranthambore National Park. This tough tree, which makes up
                approximately three-quarters of the forest, thrives well in
                places where few other plants can. It grows to a height of 15
                meters and helps keep the park&apos;s ecosystem in balance.
                Sambar deer, chital, and nilgai love to eat its leaves.
              </p>
              <p>
                There are many large patches of Dhok trees in the forest that
                you will see as you walk through it. The sound of their silver
                leaves moving in the wind makes a calming rhythm that echoes
                through the jungle.
              </p>

              <h5 className="text-xl font-medium my-2">
                Sacred and Useful Trees
              </h5>
              <p>
                Ranthambore is more than simply a wild place; it has a lot of
                cultural and natural beauty. The park has ancient Indian temples
                and water sources, as well as sacred trees like the Banyan
                (Ficus benghalensis), Peepal (Ficus religiosa), and Neem
                (Azadirachta indica).
              </p>
              <p>
                These trees are full of life, and they are also important to the
                spirit. People have known for a long time that these trees are
                important for their healing properties. Monkeys and birds find
                shelter in their thick branches. Neem leaves, for example, have
                healing and antibacterial properties.
              </p>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
              <img src={flora1} className="m-3 imgFlora" alt="" />
              <img src={flora2} className="m-3 imgFlora" alt="" />
              <img src={flora3} className="m-3 imgFlora" alt="" />
            </div>
          </div>

          <div>
            <h4>Fruity Delights and Bursts of Colour</h4>
            <p>
              Some of the fruit-bearing trees that grow in Ranthambore are mango
              (Mangifera indica), tamarind (Tamarindus indica), jamun (Syzygium
              cumini), and ber (Zizyphus mauritiana). When the trees&apos;
              fragrant fruits ripen, they attract a wide range of animals, such
              as peacocks, langurs, and even sloth bears.
            </p>
            <p>
              Then there&apos;s the Flame of the Forest (Butea monosperma),
              which, as its name suggests, bursts into stunning orange-red
              flowers in late winter that light up the dry ground. When these
              trees are in full bloom, the forest seems to come alive with
              colour, which is a beautiful sight.
            </p>
          </div>
          <div>
            <h5>Other Trees and Aquatic Plants</h5>
            <p>
              You can see the famous trees at Ranthambore, but you can also see
              many more that do well in the dry climate, like Babul, Khair,
              Ronj, Salar, Gurjan, and Kikar. The park&apos;s beautiful water
              features are surrounded by Khus grass, lotuses, and water lilies,
              which add to the area&apos;s peaceful charm. These water plants
              are also important for the survival of migrating birds, fish, and
              crocodiles.
            </p>
          </div>
          <div>
            <h4>Seasons of Change</h4>
            <p>
              One of the most beautiful things about Ranthambore&apos;s plants
              is how much they change with the seasons.
            </p>
            <ul>
              <li>
                <strong className="font-medium">
                  Monsoon (July–September):{" "}
                </strong>
                The forest comes to life; everything is green, lively, and full
                of energy.
              </li>
              <li>
                <strong className="font-medium">
                  Winter (October–February):{" "}
                </strong>
                The cool, crisp air and golden light make the trees sparkle,
                making them a great place to see wildlife.
              </li>
              <li>
                <strong className="font-medium">
                  Summer (March to June):{" "}
                </strong>
                The forest gets thinner, the waterholes get smaller, and animals
                gather around them. This makes it easier to see tigers and other
                creatures.
              </li>
            </ul>
          </div>
          <div className="mt-2">
            <h4>Nature’s Perfect Balance</h4>
            <p>
              Every tree, root, and leaf in Ranthambore has a role in keeping
              the ecosystem in balance. Trees have many roles, such as providing
              food for herbivores, shelter from predators, and a place for birds
              to build nests. They are crucial for keeping the soil healthy,
              keeping the temperature stable, and giving pollinators a place to
              live. You can&apos;t have a safari without stopping to take in the
              sights and sounds of the natural world, such as the tall Dhok
              trees, the twisting roots of banyans that cover the old walls of
              forts, and the sound of dry leaves crunching underfoot. The flora
              in Ranthambore are more than just gorgeous blooms; they are the
              heart of nature&apos;s wild beauty.
              <br />
              Apart from Ranthambore, you also explore the breathtaking
              landscapes of other national parks with us. For example, Jim
              Corbett National Park, Kaziranga National Park, Pench National
              Park, Kanha National Park, etc.
            </p>
          </div>
        </div>
      </section>
      <ImportantLinks></ImportantLinks>
      <Footer></Footer>
    </>
  );
}

export default TadobaFlora;
