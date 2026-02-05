import Footer from "../Footer";
import Header from "../Header";
import ImportantLinks from "../ImportantLinks";
import bestTimeBanner from "../../assets/images/main-banner.jpg";

export default function RanthamborePermitTips() {
  return (
    <>
      <Header />
      <div>
        <img
          src={bestTimeBanner}
          className="timeToVisit"
          alt="Best Time To Visit banner image"
        />
      </div>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl text-center font-bold text-amber-700 my-3">
          Ranthambore National Park: Permit Tips
        </h1>

        <p className="mb-2">
          If you wish to view a Royal Bengal Tiger roaming through the forest in
          all its glory, Ranthambore National Park is definitely on your list of
          places to visit. Ranthambore seems like a scene from a nature
          documentary since it features a lot of animals, beautiful trees, calm
          lakes, and mountains.
        </p>
        <p className="mb-2">
          But before you go on this crazy trip, you need one thing: a safari
          permit. <br />
          Don&apos;t worry; the process isn&apos;t as hard as it looks. Once you
          know how it works, booking your safari will be really straightforward.
          This is a useful guide that shows you how to do things step by step.
        </p>

        <div className="space-y-3">
          {[
            {
              title: "1. Who manages the safari?",
              text: "The Rajasthan Forest Department is in charge of everything in the park, including the safari vehicles and the paths. This keeps the tigers secure, the visitors safe, and the environment in balance. The restrictions may seem severe at times, but they are really important.",
            },
            {
              title: "2. When do safaris happen?",
              text: "Ranthambore offers: A morning safari, when the jungle is awake and animals are moving around more An afternoon safari, when the odds of seeing a tiger are just as exciting Both time slots are lovely in their own way.",
            },
            {
              title: "3. How many vehicles are allowed?",
              text: "To protect the park from being too crowded, there are limited seats: 17 Jeeps, each with 6 personnel 20 Canters (20 persons on each canter) This implies that seats sell out quite quickly, especially during the winter or festival seasons.",
            },
            {
              title: "4. Advance or same-day: what to choose?",
              text: "It's best to book your permit online ahead of time. You may book a seat on the same day at the official counter, but only if there are still seats left, which is quite unusual during high season. Online advance booking is the greatest way to avoid stress at the last minute.",
            },
            {
              title: "5. When is Ranthambore open?",
              text: "From October 1 to June 30, safaris are available. During the monsoon season (July to September), the park is closed.",
            },
            {
              title: "6. Book early — really early",
              text: "Safari reservations fill up months in advance, particularly for weekends and holidays. Good news? Reservations can be made up to 365 days in advance. Don't wait if your dates are set; reserve your seats and chill.",
            },
            {
              title: "7. Provide accurate visitor details",
              text: "You will need to submit the following when you book online: The full name of each guest A valid ID Both of them should be the same as the ID you show at the entrance. Even a tiny difference might cause problems, and forest inspectors have the power to take away your permission.",
            },
            {
              title: "8. Which IDs are valid?",
              text: "Indians are able to: Aadhaar, Voter Identity Card, A PAN card, Documentation, Driving License, College or School ID, Any government-issued identification. Foreign guests are required to use: Passport only",
            },
            {
              title: "9. Pick your safari preferences",
              text: "When you book, you will be asked for: The day you want to go Safari in the morning or afternoon, Canter or Jeep, The name of your hotel or resort in Ranthambore (so we can arrange for pickup)",
            },
            {
              title: "10. Payment rules",
              text: "You have to pay the full amount online. This includes the: Fee to get into the park, Charge for the vehicle, Charge for guidance. Furthermore, once verified, the permit is:  Non-refundable, Non-transferable, & Non-changeable. Therefore, before you make that payment, just make sure your dates are correct.",
            },
            {
              title: "11. No private vehicles allowed",
              text: "Personal vehicles are not permitted in Ranthambore. For the sake of safety and conservation, only registered safari jeeps and canters are permitted past the gate.",
            },
            {
              title: "12. You can’t choose your zone",
              text: "Many tourists wish for 'a good zone,' but in reality, the forest system assigns zones at random. You are not allowed to select your: Zone, Guide, Safari automobile. Don't worry, though; tigers roam freely between areas, and each zone has its own unique charm.",
            },
            {
              title: "13. Want to change your zone?",
              text: "Zone changes are normally not allowed. You can, however, ask for a change by paying an additional ₹1000 if you have a compelling reason. However, keep in mind that the forest authorities have final say over approval. It's not a given. It can seem like a hassle to get a safari permit for Ranthambore, but once you're in the forest, listening to the leaves rustle, looking for movement in the trees, and feeling your heart race when you glimpse a tiger, every minute of preparation is worth it. Furthermore, we at Seven Safar offer you an excellent opportunity to explore Ranthambore with ease. We are a reputed tour operator who will assist you at every step of your Ranthambore exploration. Apart from Ranthambore, you also explore the breathtaking landscapes of other national parks with us. For example, Jim Corbett National Park, Kaziranga National Park, Pench National Park, Kanha National Park, etc.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 border border-gray-300 p-3 rounded-lg"
            >
              <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <ImportantLinks />
      <Footer />
    </>
  );
}
