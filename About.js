import React from "react";
import "./About.css";
import aboutImg from "./img/about.jpeg";
function About() {
  //  Up To Top Btn
  window.addEventListener("scroll", function () {
    const upToTop = document.querySelector("a.bottom__to__top");
    upToTop.classList.toggle("active", window.scrollY > 0);
  });
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
                I am a positive, enthusiastic and competent Web Developer who,
                over the last few years, has built up a diverse range of skills,
                qualities and attributes that guarantee I will perform highly in
                this role.
              </p>
              <p className="about__text p__color">
                I would say that people would describe me as a good communicator
                because I’m always able to articulate people’s needs, whether it
                be clients or my teammates. I’m able to quickly pick up on
                subtle hints and nonverbal clues, and I believe this has helped
                contribute to my success.
              </p>
              <p className="about__text p__color">
                I’m highly motivated and am extremely passionate about
                developing. I am known for completing projects ahead of
                deadlines, and I feel this is especially important when things
                are constantly evolving and changing. I take initiative and am
                always coming up with various ways to solve a problem without
                needing to wait for direction. I also am always up-to-date with
                the newest trends and am willing to try the latest thing
              </p>
              <div className="about__button d__flex align__items__center">
                <a
                  href="Akhil_11807586.pdf"
                  download="Akhil Akhil_11807586.pdf"
                >
                  <button className="about btn pointer">Download CV</button>
                </a>
                <a href="#Contact">
                  <button className="about btn pointer">Hire Me</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-up white"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default About;
