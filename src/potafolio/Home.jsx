import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <div className="container">
          <div className="row d-flex justify-btw">
            <aside className="col-12 col-lg-3 col-xl-4 ">
              <h1 className="mi_nombre">Marco Fernández</h1>
              <p className="front m-0">MERN Stack Developer</p>
              <p className="profession m-0">Industrial Administrator</p>
              <p className="make__happen m-0">
                <span className="make"> &lt;make&gt;</span> it happen
                <span className="make">&lt;/make&gt;</span>
              </p>
            </aside>
            <section className="col-12 col-lg-5 col-xl-6 ">
              <div className="article article1 my-5">
                <h2 id="doForU" className="title position-sticky">
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
                <h2 className="about__me" id="about-me">
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
                <p>
                  <ul>
                    <li>
                      {" "}
                      Front-End developer - course - Alura Ltam - current.
                    </li>
                    <li> Programming - course - MinTic - Uninorte - 2022.</li>
                    <li>
                      {" "}
                      Industrial Administration - Bachelor degree - 2013.
                    </li>
                  </ul>
                </p>
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
                        <div> 100% Spanish</div>
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
                        <div>65% English</div>
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
                        <div> 45% Portug.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="article article2 my-5">
                <h2 className="Portfolio" id="about-me">
                  Portfolio
                </h2>
                <div className="project project1">
                  <h3 className="tasky">TASKY</h3>
                  <p className="text-justify">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Error corporis deleniti a eveniet delectus officiis
                    doloribus voluptatibus, eos illum accusamus.
                    <a href="www.google.com" className="see-project mx-3">CHECK</a>
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
                    <a href="www.google.com" className="see-project mx-3">CHECK</a>
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
                    <a href="www.google.com" className="see-project mx-3">CHECK</a>
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
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
