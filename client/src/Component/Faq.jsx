import { useState } from "react";
import { ChevronDown, ChevronUp } from "react-feather";
import "../styles/Faq.css";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question:
        "Q. What is the best method to experience a safari in Ranthambore?",
      answer:
        "You can drive around the park in either a Jeep or a Canter. If you want a private, close-up experience, choose a Jeep. It can hold up to six passengers. Canters are bigger (around 20 seats) and work well for big gatherings. Both of them are great ways to see the wild side of Ranthambore.",
    },
    {
      question:
        "Q. How can I make a reservation for a Jeep safari in Ranthambore?",
      answer:
        "It's quite easy to book! You can do it online through the official website or with the help of a reliable tour company. Simply choose your safari date, time, and zone, enter your information, submit an ID, and pay. That's all there is to it. Your seat is set!",
    },
    {
      question: "Q. What documents do I need to book a safari?",
      answer:
        "You will require a valid photo ID, such as a passport, Aadhaar card, voter ID, or driving license. International tourists need to show their passport numbers. Also, make sure you know the names, ages, and sexes of everyone who will be going on the safari.",
    },
    {
      question: "Q. When should I book my safari?",
      answer:
        "If you're going during peak season (October to June), it's preferable to plan your safari at least a few weeks in advance, or even earlier. You can make a reservation up to 90 days before you go.",
    },
    {
      question:
        "Q. Is it okay for me to drive my own car into Ranthambore National Park?",
      answer:
        "Sadly, no. You can't drive your own car into the park. Only registered guides in authorized safari jeeps and canter are allowed, to keep the animals safe and the experience well-organized.",
    },
    {
      question: "Q. Where is the best zone to see tigers?",
      answer:
        "Every zone has its own appeal, to be honest! Zones 1–5 are great places to see tigers, and Zones 6–10 are beautiful because of their scenery and the variety of animals that live there. The experience is always exciting, no matter where you go.",
    },
    {
      question: "Q. Is it possible to cancel my safari after I book it?",
      answer:
        "You can't get your money back once you've booked a safari. Before you confirm, make sure all of your information is correct because the forest department doesn't let you amend or cancel your reservation.",
    },
    {
      question: "Q. Will I see a tiger for sure?",
      answer:
        "That's the question that gets asked the most! Ranthambore has a lot of tigers, but since it's still nature, nothing is certain. But don't worry, even if you don't see a tiger, the magnificent scenery, various creatures, and excitement of the jungle make it all worth it.",
    },
  ];

  return (
    <div className="faq-container">
      <div className="faq-header">
        <h2 className="text-left">Frequently Asked Questions (FAQs)</h2>
      </div>

      <div className="faq-grid">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
          >
            <div className="faq-question" onClick={() => toggleFaq(index)}>
              <h3>{faq.question}</h3>
              <span className="faq-icon">
                {activeIndex === index ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </span>
            </div>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
