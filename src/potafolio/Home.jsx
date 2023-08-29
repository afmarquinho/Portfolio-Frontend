import Navbar from "./Navbar";
import Contact from "./Contact";
import styled from "@emotion/styled";
import Foto from "./Foto";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <div className="container" id="container">
          <div className="row d-flex justify-btw">
            <aside className="col-12 col-lg-3 col-xl-4 ">
              <h1 className="mi_nombre">Marco Fernández</h1>
              <p className="front m-0">MERN Stack Developer</p>
              <p className="profession m-0">Industrial Administrator</p>
              <p className="make__happen m-0">
                <span className="make"> &lt;make&gt;</span> it happen
                <span className="make">&lt;/make&gt;</span>
              </p>
              <div className="redes__sociales2__container">
                <h3>Social networks</h3>
                <div className="redes__sociales2 d-flex">
                  <a
                    href="https://www.linkedin.com/in/marcofern%C3%A1ndez/"
                    target="_blank"
                    className="sociales linkedIn"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                        fill="#eab224"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/afmarquinho"
                    target="_blank"
                    className="sociales github"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"
                        fill="#eab224"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://t.me/Marquinhos365"
                    target="_blank"
                    className="sociales telegram"
                  >
                      <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-label="Telegram"
                      role="img"
                      width="24"
                      height="24"
                      viewBox="0 0 512 512"
                    >
                      <rect width="512" height="512" rx="15%" fill="#eab224" />
                      <path
                        fill="#07070f"
                        d="M199 404c-11 0-10-4-13-14l-32-105 245-144"
                      />
                      <path
                        fill="#07070f"
                        d="M199 404c7 0 11-4 16-8l45-43-56-34"
                      />
                      <path
                        fill="#07070f"
                        d="M204 319l135 99c14 9 26 4 30-14l55-258c5-22-9-32-24-25L79 245c-21 8-21 21-4 26l83 26 190-121c9-5 17-3 11 4"
                      />
                    </svg>
                  </a>
                </div>
                <Foto/>
              </div>
            </aside>
            <section className="col-12 col-lg-5 col-xl-6 ">
              <div className="article article1 my-5">
                <h2 id="doForU" className="title">
                  What Can I do for you?
                </h2>
                <p className="content text-justify">
                  I have a solid foundation in HTML, CSS, and JavaScript, and I
                  am eager to apply my skills to your project. I can create
                  responsive, user-friendly websites and applications that
                  provide an exceptional user experience.
                </p>
              </div>
              <div className="article article2 my-5">
                <h2 className="title about__me" id="about-me">
                  About me
                </h2>
                <h3 className="summary">Summary</h3>
                <p className="text-justify">
                  I have a good understanding of HTML, CSS, and JavaScript, and
                  I'm familiar with popular front-end frameworks such as React.
                  I stay up to date with industry trends and best practices, I
                  am also dedicated to improving my skills and seeking feedback
                  from more experienced developers.
                </p>
                <p className="text-justify">
                  I'm able to work closely with designers, back-end developers,
                  and other stakeholders on web development projects.work well
                  in a team and am passionate about web development.
                </p>
                <h3 className="education">Education</h3>

                <ul>
                  <li> Front-End developer - course - Alura Ltam - current.</li>
                  <li> Programming - course - MinTic - Uninorte - 2022.</li>
                  <li> Industrial Administration - Bachelor degree - 2013.</li>
                </ul>

                <h3 className="info">More Info</h3>
                <ul>
                  <li>Based on Colombia.</li>
                  <li>Available to travel.</li>
                  <li>Hobbies: MMA - Swimming - Exercising.</li>
                </ul>
                <h2 className="languages">Languages</h2>
                <div className="all">
                  <div className="circular-wrap">
                    <div className="circle">
                      <div className="mask full-1">
                        <div className="fill-1"></div>
                      </div>

                      <div className="mask half">
                        <div className="fill-1"></div>
                      </div>
                      <div className="inside-circle">
                        <div>
                          {" "}
                          100% <br />
                          Spanish
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="circular-wrap">
                    <div className="circle">
                      <div className="mask full-2">
                        <div className="fill-2"></div>
                      </div>

                      <div className="mask half">
                        <div className="fill-2"></div>
                      </div>
                      <div className="inside-circle">
                        <div>
                          65% <br />
                          English
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="circular-wrap">
                    <div className="circle">
                      <div className="mask full-3">
                        <div className="fill-3"></div>
                      </div>

                      <div className="mask half">
                        <div className="fill-3"></div>
                      </div>
                      <div className="inside-circle">
                        <div>
                          {" "}
                          45% <br />
                          Portug.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="article article2 my-5">
                <h2 className="title portfolio" id="portfolio">
                  Portfolio
                </h2>
                <div className="project project1">
                  <h3 className="tasky">TASKY</h3>
                  <p className="text-justify">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Error corporis deleniti a eveniet delectus officiis
                    doloribus voluptatibus, eos illum accusamus.
                    <a href="www.google.com" className="see-project mx-3">
                      CHECK
                    </a>
                    <br />
                    <span className="">React</span>
                    <span className="">Styled-Components</span>
                    <span className="">Localhost</span>
                  </p>
                </div>
                <div className="project project2">
                  <h3 className="lean-gineers">LEAN GINEERS WEB SITE</h3>
                  <p className="text-justify">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Error corporis deleniti a eveniet delectus officiis
                    doloribus voluptatibus, eos illum accusamus.
                    <a href="www.google.com" className="see-project mx-3">
                      CHECK
                    </a>
                    <br />
                    <span className="">React</span>
                    <span className="">Styled-Components</span>
                    <span className="">Bootstrap</span>
                    <span className="">Axios</span>
                    <span className="">Express</span>
                    <span className="">Mongo DB</span>
                  </p>
                </div>
                <div className="project project2">
                  <h3 className="Kassya Projects">KASSYA PROJECTS</h3>
                  <p className="text-justify">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Error corporis deleniti a eveniet delectus officiis
                    doloribus voluptatibus, eos illum accusamus.
                    <a href="www.google.com" className="see-project mx-3">
                      CHECK
                    </a>
                    <br />
                    <span className="">React</span>
                    <span className="">Styled-Components</span>
                    <span className="">Bootstrap</span>
                    <span className="">Context-API</span>
                    <span className="">Axios</span>
                    <span className="">Express</span>
                    <span className="">Mongo DB</span>
                  </p>
                </div>
              </div>
              <div className="article article2 my-5">
                <Contact />
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;

const Subtitulos = styled.h3`
  color: #77dd77;
  font-size: 1.5rem;
  margin: 0;
  padding: 0;
  @media (min-width: 768px) {
    padding-left: 4rem;
    font-size: 2rem;
  }
`;
