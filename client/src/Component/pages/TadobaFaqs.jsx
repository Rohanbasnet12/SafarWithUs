import { useState } from "react";
import Header from "../Header";
import ImportantLinks from "../ImportantLinks";
import Footer from "../Footer";
import faqBanner from "../../assets/images/faq-banner.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const faqsData = [
  {
    question: "Q. How much does a Ranthambore safari cost?",
    answer:
      "The price of a Ranthambore safari varies depending on the season, the safari zone, and whether you pick a shared canter or a private vehicle. If you're on a tight budget, shared canters are the best choice. If you want a more personal wildlife encounter, private jeeps are the way to go. Most of the time, prices are between ₹1,700 and ₹15,000. It's usually a good idea to reserve ahead of time because seats fill up quickly, especially during busy months.",
  },
  {
    question: "Q. In which state is Ranthambore National Park?",
    answer:
      "Ranthambore National Park is close to Sawai Madhopur in Rajasthan. The region is known for wildlife, royal heritage, culture, and the historic Ranthambore Fort, offering nature, history, and adventure together.",
  },
  {
    question: "Q. What is the best time to visit Ranthambore?",
    answer:
      "October to June is the best time to visit. October–February offers pleasant weather, while April–June provides higher tiger sighting chances near water bodies. The park remains closed from July–September due to monsoon.",
  },
  {
    question: "Q. Which is better, Corbett or Ranthambore?",
    answer:
      "Ranthambore offers better tiger sighting chances with historic ruins and scenic landscapes. Corbett is wider, wilder and great for birdwatching, rivers and forests. Ranthambore is better for tiger spotting; Corbett for lush landscapes and biodiversity.",
  },
  {
    question: "Q. Why is Ranthambore so famous?",
    answer:
      "Ranthambore is one of the best places in India to spot tigers in the wild. Lakes, cliffs, old ruins including Ranthambore Fort make it visually stunning. Wildlife, nature, heritage and photography experience make it popular.",
  },
  {
    question: "Q. Which is the 2nd largest National Park in India?",
    answer:
      "Desert National Park in Rajasthan is the second-largest national park, spanning over 3,000 sq km, home to the Great Indian Bustard, desert foxes and unique arid wildlife.",
  },
  {
    question: "Q. What is the 3rd largest national park?",
    answer:
      "Gangotri National Park in Uttarakhand is the third-largest. It hosts glaciers, meadows, deep valleys and wildlife including snow leopards and blue sheep.",
  },
  {
    question: "Q. What are the top 5 national parks?",
    answer:
      "Top 5 include Ranthambore, Jim Corbett, Kaziranga, Bandhavgarh and Kanha — famous for biodiversity and wildlife experiences including tigers, rhinos, forests and meadows.",
  },
  {
    question: "Q. Which is the top 1 national park in India?",
    answer:
      "Jim Corbett National Park is widely considered the top park due to being the oldest and richest in biodiversity. But Ranthambore and Kaziranga excel for tiger and rhino sightings respectively.",
  },
  {
    question: "Q. Where are the Big 5 national parks?",
    answer:
      "India informally refers to Ranthambore, Kaziranga, Gir, Jim Corbett and Kanha as the ‘Big 5’, across Rajasthan, Assam, Gujarat, Uttarakhand and Madhya Pradesh.",
  },
  {
    question: "Q. What are the top 10 largest national parks?",
    answer:
      "India's largest parks are: Hemis, Desert, Gangotri, Namdapha, Khangchendzonga, Guru Ghasidas, Sundarban, Indravati, Great Himalayan, Simlipal.",
  },
  {
    question: "Q. Which is the best way to visit Ranthambore National Park?",
    answer:
      "Reach Sawai Madhopur (nearest railway). From Jaipur it's a 3–4 hr drive. Safaris must be booked officially through operators.",
  },
  {
    question: "Q. When is the best time to visit Ranthambore National Park?",
    answer:
      "Same as earlier: October–June. Winter (Oct–Feb) is pleasant, Summer (Mar–Jun) best for tiger sightings. Closed in monsoon.",
  },
  {
    question: "Q. What to carry while visiting Ranthambore?",
    answer:
      "Neutral clothing, hat, sunglasses, sunscreen, jacket (winter), camera/binoculars, reusable water bottle, snacks, medication.",
  },
  {
    question: "Q. Which is the best safari zone for tiger sighting?",
    answer:
      "Zones 1–6 are best; Zone 3 is most popular for lakes and frequent sightings. Tigers roam freely so sightings vary, and zones are assigned randomly.",
  },
  {
    question: "Q. Which is better – Jeep or Canter?",
    answer:
      "Jeep offers privacy, better maneuverability and photography experience. Canter suits budget or larger groups.",
  },
  {
    question: "Q. Which is better – Morning Safari or Afternoon Safari?",
    answer:
      "Morning is cooler and better for photography; afternoon is good for summer tiger sightings near water. Both offer unique experiences.",
  },
  {
    question: "Q. What are the chances of tiger sighting?",
    answer:
      "Ranthambore offers high chances due to open terrain and tiger population, especially in summer and tiger-dense zones. Sightings depend on natural movement.",
  },
  {
    question: "Q. What are the Safari timings?",
    answer:
      "Timings vary seasonally. Morning begins after sunrise, evening ends before sunset. Forest department updates schedules monthly.",
  },
  {
    question: "Q. What are the requirements for booking a safari online?",
    answer:
      "Valid ID (Aadhaar/Passport/Driving License), full name, age, nationality, and date required. Booking fills fast; book early.",
  },
  {
    question: "Q. How much payment must be made in advance?",
    answer:
      "Full payment is generally required at the time of booking. Safari bookings are non-refundable and non-modifiable.",
  },
];

function TadobaFaqs() {
  const [openIndex, setOpenIndex] = useState(null); // Store the index of the open FAQ

  const toggleVisible = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle open state
  };
  return (
    <>
      <Header></Header>
      <div>
        <img className="faqBanner" src={faqBanner} alt="refund banner image" />
      </div>
      <section className="leaf pb-5">
        <div className="container">
          <div>
            <h1 className="text-3xl text-center font-bold text-amber-800 my-3">
              Ranthambore National Park Frequently Asked Questions (FAQs)
            </h1>

            <div>
              {faqsData.map((faq, index) => (
                <div className="my-2" key={index}>
                  <div className="faqs" onClick={() => toggleVisible(index)}>
                    <h6 className="questionFaq">{faq.question}</h6>
                    <div
                      onClick={() => toggleVisible(index)}
                      style={{ cursor: "pointer" }}
                    >
                      {openIndex === index ? (
                        <FontAwesomeIcon
                          className="questionFaq"
                          icon={faCircleXmark}
                        />
                      ) : (
                        <FontAwesomeIcon
                          className="questionFaq"
                          icon={faCheck}
                        />
                      )}
                    </div>
                  </div>
                  {openIndex === index && (
                    <div className="faqanswer">
                      <p className="">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ImportantLinks></ImportantLinks>
      <Footer></Footer>
    </>
  );
}

export default TadobaFaqs;
