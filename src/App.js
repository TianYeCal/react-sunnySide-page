import styled from "styled-components";
import {
  IconArrowDown,
  IconFacebook,
  IconHamburger,
  Instagram,
  Pinterest,
  Twitter,
  Emily,
  Jennie,
  Thomas,
  DesktopCone,
  DesktopMilkBottle,
  DesktopOrange,
  DesktopSugarCubes,
  DesktopDesign,
  DesktopHeader,
  DesktopPhoto,
  DesktopStandOut,
  DesktopTransform,
  MobilCone,
  MobilMilkBottle,
  MobilOrange,
  MobilSugarCubes,
  MobilDesign,
  MobilHeader,
  MobilPhoto,
  MobilStandOut,
  MobilTransform,
  logo,
} from "./images/index";
import { useState } from "react";
function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <Wrapper>
      <header>
        <nav>
          <h4>
            <img src={logo} alt="logo" />
          </h4>
          <div className="nav-buttons desktop">
            <button className="nav-btn">About</button>
            <button className="nav-btn">Services</button>
            <button className="nav-btn">Projects</button>
            <button className="nav-btn contact">CONTACT</button>
          </div>
          <button
            className="mobil btn open-hamburger"
            onClick={() => setOpenModal(!openModal)}
          >
            <img src={IconHamburger} alt="open menu" />
          </button>
        </nav>
        <h2 className="title">We are creatives</h2>
        <img src={IconArrowDown} alt="arrow down" className="arrow-down" />
      </header>
      {openModal && (
        <div className="modal">
          <div className="nav-buttons-mobil">
            <button className="nav-btn">About</button>
            <button className="nav-btn">Services</button>
            <button className="nav-btn">Projects</button>
            <button className="nav-btn contact">CONTACT</button>
          </div>
        </div>
      )}

      <section className="gallery">
        <div className="transform-text">
          <div>
            <h5 className="article-title">Transform your brand</h5>
            <p className="article-desc">
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>
            <a href="/#" className="article-link transform-link">
              Learn more
            </a>
          </div>
        </div>

        <div className="transform-img egg">
          <img
            src={DesktopTransform}
            alt="transform img"
            className="img desktop"
          />
          <img src={MobilTransform} alt="transform img" className="img mobil" />
        </div>
        <div className="transform-img">
          <img
            src={DesktopStandOut}
            alt="stand out img"
            className="img desktop"
          />
          <img src={MobilStandOut} alt="stand out img" className="img mobil" />
        </div>
        <div className="transform-text">
          <div>
            <h5 className="article-title">Stand out to the right audience</h5>
            <p className="article-desc">
              Using a collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we’ll build and
              extend your brand in digital places.
            </p>
            <a href="/#" className="article-link transform-link">
              Learn more
            </a>
          </div>
        </div>
        <div className="img-section">
          <div className="transform-img">
            <img src={DesktopDesign} alt="design img" className="img desktop" />
            <img src={MobilDesign} alt="design img" className="img mobil" />
          </div>
          <div className="img-text">
            <h5>Graphic design</h5>
            <p>
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients’
              attention.
            </p>
          </div>
        </div>
        <div className="img-section">
          <div className="transform-img">
            <img
              src={DesktopPhoto}
              alt="photograph desktop img"
              className="img desktop"
            />
            <img
              src={MobilPhoto}
              alt="photograph mobil img"
              className="img mobil photo-orange"
            />
          </div>
          <div className="img-text">
            <h5>Photography</h5>
            <p>
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </p>
          </div>
        </div>
      </section>
      <section className="testimonials">
        <div className="container">
          <h4 className="testimonials-title">client testimonials</h4>
          <div className="client-testimonials">
            <div className="single-testimonial">
              <div className="avatar-container">
                <img className="avatar img" src={Emily} alt="emily avatar" />
              </div>

              <p className="comment">
                We put our trust in Sunnyside and they delivered, making sure
                our needs divwere met and deadlines were always hit.
              </p>
              <p className="name">Emily R.</p>
              <p className="position">Marketing Director</p>
            </div>
            <div className="single-testimonial">
              <div className="avatar-container">
                <img className="avatar img" src={Thomas} alt="thomas avatar" />
              </div>

              <p className="comment">
                Sunnyside’s enthusiasm coupled with their keen interest in our
                brand’s success made it a satisfying and enjoyable experience.
              </p>
              <p className="name">Thomas S.</p>
              <p className="position">Chief Operating Officer</p>
            </div>
            <div className="single-testimonial">
              <div className="avatar-container">
                <img className="avatar img" src={Jennie} alt="jennie avatar" />
              </div>

              <p className="comment">
                Incredible end result! Our sales increased over 400% when we
                worked with Sunnyside. Highly recommended!
              </p>
              <p className="name">Jennie F.</p>
              <p className="position">Business Owner</p>
            </div>
          </div>
        </div>
      </section>
      <section className="images">
        <div className="single-img">
          <img
            className="img desktop"
            src={DesktopMilkBottle}
            alt="DesktopMilkBottle"
          />
          <img
            className="img mobil"
            src={MobilMilkBottle}
            alt="mobil MilkBottle"
          />
        </div>
        <div className="single-img">
          <img
            className="img desktop"
            src={DesktopOrange}
            alt="DesktopOrange"
          />
          <img className="img mobil" src={MobilOrange} alt="mobil Orange" />
        </div>
        <div className="single-img">
          <img className="img desktop" src={DesktopCone} alt="DesktopCone" />
          <img className="img mobil" src={MobilCone} alt="mobil Cone" />
        </div>
        <div className="single-img">
          <img
            className="img desktop"
            src={DesktopSugarCubes}
            alt="DesktopSugarCubes"
          />
          <img
            className="img mobil"
            src={MobilSugarCubes}
            alt="mobil SugarCubes"
          />
        </div>
      </section>
      <footer>
        <img className="footer-logo" src={logo} alt="logo" />
        <div className="footer-buttons">
          <button className="footer-btn">About</button>
          <button className="footer-btn">Services</button>
          <button className="footer-btn">Projects</button>
        </div>
        <div className="social-links">
          <img src={IconFacebook} alt="IconFacebook" />
          <img src={Instagram} alt="Instagram" />
          <img src={Twitter} alt="Twitter" />
          <img src={Pinterest} alt="Pinterest" />
        </div>
      </footer>
    </Wrapper>
  );
}
const Wrapper = styled.main`
  width: 100vw;
  max-width: 100%;
  position: relative;
  .mobil {
    display: none;
  }
  header {
    width: 100%;
    height: 30rem;
    background: url(${DesktopHeader});
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
  }
  .modal {
    z-index: 10;
    background: white;
    position: absolute;
    top: 5rem;
    left: 1rem;
    width: 90vw;
    display: flex;
    justify-content: center;
    align-items: center;
    color: grey;
  }
  .nav-buttons-mobil {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    padding: 3rem 0;
  }
  nav {
    padding: 1.5rem 1rem;
    display: flex;
    justify-content: space-between;
  }
  .nav-btn {
    border: none;
    background: transparent;
    color: var(--white);
    margin-left: 2rem;
  }
  .nav-btn:hover {
    cursor: pointer;
  }
  .contact {
    color: var(--dark-blue);
    font-family: "Fraunces";
    background-color: #fff;
    border-radius: 2rem;
    padding: 0.5rem 0.75rem;
    /* font-family: "Barlow", "Fraunces", serif, sans-serif; */
  }
  .contact:hover {
    background: var(--gray-blue);
  }
  .title {
    text-transform: uppercase;
    font-family: "Fraunces";
    letter-spacing: 0.5rem;
    color: var(--white);
    margin-top: 1rem;
  }
  .arrow-down {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    transform: translateY(-50%);
  }
  .gallery {
    display: grid;
    grid-template-columns: 1fr 1fr;
    /* grid-template-rows: 1fr 1fr 1fr; */
  }
  .transform-text {
    padding: 3rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .transform-img {
    width: 100%;
  }
  .article-title {
    font-family: "Fraunces";
    font-weight: 800;
    font-size: 24px;
    margin-bottom: 1.5rem;
  }
  .article-desc {
    color: var(--gray-blue);
    line-height: 1.2rem;
    margin-bottom: 1.5rem;
  }
  .article-link {
    font-family: "Fraunces";
    font-weight: 800;
    color: var(--dark-blue);
    text-transform: uppercase;
  }
  .img-section {
    position: relative;
  }
  .img-text {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    h5 {
      font-family: "Fraunces";
      font-weight: 800;
      font-size: 20px;
      color: var(--dark--cyan);
      margin-bottom: 0.5rem;
      text-align: center;
    }
    p {
      color: var(--moderate-cyan);
      line-height: 1.2rem;
    }
  }
  .testimonials {
    padding: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 3rem;
  }
  .testimonials-title {
    text-align: center;
    font-family: "Fraunces";
    font-weight: 800;
    font-size: 18px;
    text-transform: uppercase;
    color: var(--gray-blue);
    letter-spacing: 0.25rem;
    margin-bottom: 3rem;
  }
  .client-testimonials {
    display: flex;
    gap: 1rem;
    text-align: center;
  }
  .avatar {
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
    margin: 0 auto;
    margin-bottom: 2rem;
  }
  .comment {
    color: var(--darkGray-blue);
    line-height: 1.5rem;
    margin-bottom: 2rem;
  }
  .name {
    font-family: "Fraunces";
    font-weight: 800;
    color: var(--dark-blue);
    margin-bottom: 1rem;
  }
  .position {
    color: var(--gray-blue);
  }
  .images {
    width: 100%;
    display: flex;
  }
  footer {
    background: hsl(168, 34%, 70%);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .footer-logo {
    margin: 0 auto;
    margin-top: 2rem;
    margin-bottom: 1.5rem;
    filter: opacity(0.5) drop-shadow(0 0 0 hsl(0, 0%, 100%));
  }
  .footer-buttons {
    margin-bottom: 2rem;
    display: flex;
    gap: 2rem;
  }
  .footer-btn {
    color: var(--dark--cyan);
    background: transparent;
    border: none;
    margin-bottom: 2rem;
  }
  .footer-btn:hover {
    color: var(--white);
  }
  .social-links {
    display: flex;
    gap: 1rem;
    color: var(--dark--cyan);
    margin-bottom: 2rem;
  }
  .social-links:hover {
    cursor: pointer;
    color: var(--white);
  }
  .footer-btn:hover {
    cursor: pointer;
  }
  @media (max-width: 768px) {
    .desktop {
      display: none;
    }
    .mobil {
      display: block;
    }
    header {
      background: url(${MobilHeader});
      width: 100%;
      height: 40rem;
      background-size: cover;
      background-repeat: no-repeat;
      position: relative;
    }

    .gallery {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 1fr 1fr;
      /* grid-auto-rows: 1fr; */
      /* grid-template-rows: 1fr 1fr 1fr; */
    }
    .egg {
      grid-row: 1/-1;
    }
    .testimonials {
      margin-bottom: 0;
    }
    .client-testimonials {
      flex-direction: column;
    }
    .single-testimonial {
      margin-bottom: 3rem;
    }
    .images {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    .transform-img {
      height: 35rem;
    }
    .photo-orange {
      height: 40rem;
    }
    .open-hamburger {
      background: transparent;
      border: none;
      box-shadow: none;
      cursor: pointer;
    }
    .nav-btn {
      color: grey;
      font-weight: 600;
    }
    .contact {
      background: yellow;
      color: hsl(198, 62%, 26%);
    }
  }
`;
export default App;
