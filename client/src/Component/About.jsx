import "../App.css";
import "../styles/About.css";
import aboutImg from "../assets/images/agarzar-banner2.jpg";

function About() {
  return (
    <>
      <div>
        <section id="about-corbett">
          <div id="about-corbett-title">
            <h1>Discover Ranthambore: India’s Royal Tiger Reserve</h1>
            <div className="about-container">
              {/* Top Section */}
              <div className="about-top">
                {/* Left Image */}
                <div className="about-left">
                  <img
                    src={aboutImg}
                    alt="Jim Corbett National Park"
                    className="about-img"
                  />
                </div>

                {/* Right Text */}
                <div className="about-right">
                  <p>
                    Ranthambore National Park is one of India’s largest and most
                    renowned national Parks. Located in Rajasthan’s Sawai
                    Madhopur district, it offers a thrilling wildlife experience
                    that you simply don’t want to miss. This national park is
                    the perfect mix of natural beauty, rich history, and
                    adventurous wildlife encounters.
                  </p>
                  <p className="mt-2">
                    Initially, it was established as a wildlife sanctuary in
                    1955. Then, in 1973, it was proclaimed as one of India’s
                    Project Tiger reserves. Later, this wildlife sanctuary was
                    designated as a national park in 1980. This beautiful
                    national park is named after the historic Ranthambore Fort.
                    Ranthambore Fort is a UNESCO World Heritage Site that
                    impressively overlooks the park. It adds a royal charm to
                    the wilderness.
                  </p>
                  <p className="mt-2">
                    Rathambore is widely known as the land of tigers. Hence, it
                    offers an enchanting opportunity to spot the incredible
                    Royal Bengal Tiger in its natural habitat. Along with
                    tigers, this national park is also home to a diverse array
                    of wildlife. This includes sloth bears, striped hyenas,
                    leopards, Indian foxes, nilgai, langurs, and sambar deer.
                    Furthermore, it is nothing less than a paradise for bird
                    lovers. Here, you can spot more than 300 bird species,
                    encompassing peacocks and kingfishers, to crested serpent
                    eagles.
                  </p>
                </div>
              </div>

              {/* Bottom Paragraph */}
              <div className="about-bottom">
                <p className="mt-2">
                  This national park’s landscape is a fantastic mix of dense
                  forests, vast grasslands, ancient banyan trees, serene lakes,
                  and rugged hills of the Aravali and Vidhya ranges. It supports
                  more than 500 species of flora. This includes dhok trees,
                  mango, and banyan. Altogether, it offers a charming glance
                  into Rajasthan’s heritage.
                </p>
                <p className="mt-1">
                  It doesn’t matter whether you are an adventure enthusiast, a
                  nature lover, or a wildlife photographer; you will enjoy this
                  park. Ranthambore guarantees an excellent experience loaded
                  with thrill, exploration, and beauty. Wanna be the park for
                  our next wildlife adventure at Ranthambore National Park?
                  Check out our tour packages, hotel bookings, and adventurous
                  safari experiences right now. Grab an opportunity to spot the
                  royal wilderness like never before!
                </p>
              </div>
              <div>
                <h3 className="text-2xl text-left font-bold mb-3 text-amber-800">
                  Your Gateway to Ranthambore Adventures
                </h3>
                <p className="mb-2 text-left">
                  Are you planning a trip to Ranthambore? We are here to make
                  your trip smooth, comfortable, and unforgettable. At Seven
                  Safar, our job is to understand exactly what you are expecting
                  from your vacation. And after that, make it happen. We begin
                  by listening to your travel goal and what your dream
                  exploration looks like. As we gather enough information, our
                  dedicated team designs your personalised itinerary and
                  allocates the best deals for you. Consider us as your travel
                  partners. We will help you explore Ranthambore comfortably
                  without any stress. It doesn’t matter whether it&apos;s your
                  first wildlife adventure or you are a seasoned traveller, we
                  will make your Ranthambore experience really special. This is
                  because your Ranthambore adventure with Seven Safar deserves
                  nothing less than excellence.
                </p>
              </div>
            </div>
          </div>
          {/* 4 Card Layout */}
          <div className="rc-wrapper">
            <div className="rc-container">
              <div className="rc-grid" role="list">
                <article className="rc-card" role="listitem">
                  <img
                    className="rc-card-image"
                    src="https://images.unsplash.com/photo-1591081658714-f576fb7ea3ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                    alt="Safari Booking"
                  />
                  <div className="rc-card-body">
                    <h3 className="rc-title">Safari Booking</h3>
                    <p className="rc-description">
                      Experience the thrill of wildlife with our expertly guided
                      safari tours. See exotic animals in their natural habitat.
                    </p>
                    <div className="rc-footer">
                      <button
                        className="rc-btn"
                        aria-label="Book Safari Booking"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </article>

                <article className="rc-card" role="listitem">
                  <img
                    className="rc-card-image"
                    src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                    alt="Canter Booking"
                  />
                  <div className="rc-card-body">
                    <h3 className="rc-title">Canter Booking</h3>
                    <p className="rc-description">
                      Explore the beautiful landscapes with our comfortable
                      canter rides. Perfect for group excursions.
                    </p>
                    <div className="rc-footer">
                      <button
                        className="rc-btn"
                        aria-label="Book Canter Booking"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </article>

                <article className="rc-card" role="listitem">
                  <img
                    className="rc-card-image"
                    src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                    alt="Hotel Booking"
                  />
                  <div className="rc-card-body">
                    <h3 className="rc-title">Hotel Booking</h3>
                    <p className="rc-description">
                      Find the perfect accommodation for your stay. We offer a
                      wide range of hotels to suit every budget.
                    </p>
                    <div className="rc-footer">
                      <button
                        className="rc-btn"
                        aria-label="Book Hotel Booking"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </article>

                <article className="rc-card" role="listitem">
                  <img
                    className="rc-card-image"
                    src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                    alt="Tour Booking"
                  />
                  <div className="rc-card-body">
                    <h3 className="rc-title">Tour Booking</h3>
                    <p className="rc-description">
                      Discover new places with our guided tours. We take care of
                      everything so you can enjoy your journey.
                    </p>
                    <div className="rc-footer">
                      <button className="rc-btn" aria-label="Book Tour Booking">
                        Book Now
                      </button>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default About;
