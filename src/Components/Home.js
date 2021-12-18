import React from "react";
import "../styles/dist/Home.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
//import frail1 from "src/frailCare1.jpg";
import image1 from "../frailCare1.jpg";
import image2 from "../frailCare2.jpg";
import image3 from "../frailCare3.jpg";
import health from "../health.png";
function Home() {
  const slideImages = [
    {
      url: image1,
      caption: "slide 1",
    },
    { url: image2, caption: "slide 2" },
    { url: image3, caption: "slide 3" },
  ];
  return (
    <div className="home_main">
      <div className="home_container">
        <div className="home_container_image">
          <Slide>
            {slideImages.map((slideImage, index) => (
              <div
                className="each-slide"
                style={{ height: "500px" }}
                key={index}
              >
                <div
                  className="slide_image"
                  style={{
                    backgroundImage: `url(${slideImage.url})`,
                    height: "100%",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100%",
                  }}
                >
                  <div className="slide_caption">
                    <p>Our Quality care,Your Home</p>
                    <h3>Certified Care Givers</h3>
                    <button>BOOKINGS</button>
                  </div>
                </div>
              </div>
            ))}
          </Slide>
        </div>
        <div className="home_container_content">
          <div className="home_container_content_left">
            <div className="home_container_content_left_vid">
              <iframe
                height="280"
                width="480"
                src="https://www.youtube.com/embed/rokGy0huYEA"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              />
            </div>
            <div className="home_container_content_left_services">
              {/* <h1>Our Quality home care services,from R54/hr</h1>
              <ul>
                <li>
                  <img src={health} />
                  <p>service 1</p>
                </li>
                <li>
                  <img src={health} />
                  <p>service 2</p>
                </li>
                <li>
                  <img src={health} />
                  <p>service 3</p>
                </li>
                <li>
                  <img src={health} />
                  <p>service 4</p>
                </li>
                <li>
                  <img src={health} />
                  <p>service 5</p>
                </li>
                <li>
                  <img src={health} />
                  <p>service 6</p>
                </li>
                <li>
                  <img src={health} />
                  <p>service 7</p>
                </li>
                <li>
                  <img src={health} />
                  <p>service 8</p>
                </li>
                <li>
                  <img src={health} />
                  <p>service 9</p>
                </li>
                <li>
                  <img src={health} />
                  <p>service 10</p>
                </li>
                <li>
                  <img src={health} />
                  <p>service 11</p>
                </li>
              </ul> */}
            </div>
          </div>
          <div className="home_container_content_right">
            <div className="home_container_content_right-box">
              <div>
                {/* <h1>Our Quality Care, Your Home</h1>
                <p>
                  The word “home” is synonymous with love and feeling safe and
                  comfortable. It makes sense, then, that when we’re homesick,
                  we’re at a higher risk of stress-related illness. At
                  CareChamp, we’re all about longevity. We understand how
                  important it is for you or your loved one to be able to age or
                  recover in place—in a way that prioritises dignity, comfort,
                  and safety.
                </p>
                <p>
                  CareChamp is quality care in the comfort of your own home,
                  provided nationwide by our compassionate, empathetic, and
                  certified caregivers, registered nurses, and companions (aka
                  Champs).
                </p> */}
              </div>
              <div>
                <h1>Our Mission</h1>
                <p>
                  We at Companion Buddies we create relationships with our
                  clients. We give them a sense of purpose. Treat them as if
                  they were our family. The elderly has a wealth of knowledge
                  that they love to share about their life and their experience
                  which they sometimes don’t get to share. Here at Companion
                  Buddies We like working with the seniors because we like
                  helping them to become more independent and , helping them
                  make a positive difference to their day and the most of their
                  life that is left on earth be exciting, happy and the best it
                  can be by providing these service
                </p>
              </div>
            </div>
            <div className="home_container_content_right-box">
              {/* <h1>FROM CURE TO CARE</h1>
              <p>
                Every care plan is unique and we always tailor your plan to suit
                your or your loved one’s needs.{" "}
              </p>
              <p>
                This includes matching you with the perfect caregiver. We know
                that it’s a deeply personal decision who you allow into your
                home. That’s why part of our onboarding process for each new
                Champ includes setting up an online profile—complete with a
                video introduction.{" "}
              </p>
              <p>
                Our Champs are available to assist for both once-off and
                recurring reservations, as well as on either an hourly or daily
                basis. Expect weekly care reports and the option to rate your
                Champ. Plus, we take care of all the admin.
              </p> */}
            </div>
          </div>
        </div>
        <hr />
        <div className="home_container_hours">
          {/* <p>
            24/7 quality care provided nationwide Our regular office hours are
            Monday to Friday, from 7am - 4:30pm. National tel: +27 (0)87 944
            6299 Emergency number (weekends and public holidays): +27 (0)87 944
            6299 from 7am - 4:30pm. WhatsApp number: +27 (0)87 944 6299
          </p>
          <p>
            We operate out of our Head Office in Cape Town and provide quality
            care to homes throughout South Africa.
          </p>
          <p>
            We deliver quality care to your doorstep, starting from R54/hour.
          </p> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
