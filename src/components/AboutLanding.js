import QuotesIcon from "./QuotesIcon";
import ServiceList from "./ServiceList";

function AboutLanding() {
  return (
    <div className="about-landing">
      <div className="about-text box1">
        <h2 className="about-headline ">
          I'm AYUB, A web developer and part-time supahero based in kenya.
        </h2>
        <div className="about-description">
          <p className="home-about-text">
            I have been building websites for near half a decade. I always
            thought that focusing on just one area was not much fun, so I
            learned the whole process: planning, building and launching
            websites. This allowed me to drive the user’s attention to the right
            places and create more engaging and memorable experiences. As a
            supahero, I fly around saving the trees, as I am a huge lover of
            nature.
          </p>
        </div>
      </div>
      <div className="about-image box2">
        <img src={require("../assets/nerd.png")} alt="Human with a computer as a head" />
      </div>
      <div className="about-testimonials box3">
        <div className="testimonial-icon">
          <QuotesIcon />
        </div>
        <div className="testimonial-list">
          <div className="testimonial-item">
            <div className="testimonial-item-wrapper">
              <div className="testimonial-text w-richtext">
                <p>
                  I hate introducing Ayub to my colleagues because he’s my best
                  kept secret, there’s only so much to go around 🤫
                </p>
              </div>
              <div className="testimonial-source">
                <p className="about-testimonial-name">Blaise Papa</p>
                <p className="about-testimonial-company">BP shareholdings</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ServiceList />

      <div className="about-email-box box7">
        <a href="mailto:iayub.mia@gmail.com" className="about-email-cta">
          <div className="message-pp">
            <img
              src={require("../assets/paper-plane.svg").default}
              alt="Paper plane"
            />
          </div>
          <div>
            <h3 className="about-email-text">Wanna talk? Send me a message.</h3>
            <p className="about-service-desc">iayub.mia@gmail.com</p>
          </div>
        </a>
      </div>

    </div>
  );
}

export default AboutLanding;
