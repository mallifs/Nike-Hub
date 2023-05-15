import Clips from "../utils/Clips";
import Vid1 from "../assets/video/vcover1.png";
import Vid2 from "../assets/video/vcover2.png";
import Vid3 from "../assets/video/vcover3.png";

function Hero({ heroapi: { btntext, img } }) {
  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div className="hero-c">
            <div className="hero-c__title">
              {/* title */}
              <h1>
                Play With Electric Nike <br /> Adapt 2.0 Sneakers
              </h1>
              <a href="#collection">{btntext}</a>
            </div>
            {/* vids img socials */}
            <div className="hero-c__content">
              <div className="hero-c__content__vid">
                <Clips clipimg={Vid1} />
                <Clips clipimg={Vid2} />
                <Clips clipimg={Vid3} />
              </div>

              <div className="hero-c__content__img">
                <img src={img} alt="hero-img" />
              </div>

              {/* <div className="hero-c__content__socials"></div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
