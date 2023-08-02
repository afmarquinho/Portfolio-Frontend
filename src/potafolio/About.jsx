import React from "react";
import Layout from "../Layout/Layout";
import styled from "@emotion/styled";

const About = () => {
  return (
    <Layout>
      <Contenedor>
        <Titulo className="about__me">About me</Titulo>

        <div className="content">
          <Subtitulos className="summary">Summary</Subtitulos>
          <P>
            I have a good understanding of HTML, CSS, and JavaScript, and I'm
            familiar with popular front-end frameworks such as React. I stay up
            to date with industry trends and best practices, I am also dedicated
            to improving my skills and seeking feedback from more experienced
            developers.
          </P>
          <P>
            I'm able to work closely with designers, back-end developers, and
            other stakeholders on web development projects.work well in a team
            and am passionate about web development.
          </P>
          <Subtitulos className="education">Education</Subtitulos>
          <p>
            <UL>
              <li> Front-End developer - course - Alura Ltam - current.</li>
              <li> Programming - course - MinTic - Uninorte - 2022.</li>
              <li> Industrial Administration - Bachelor degree - 2013.</li>
            </UL>
          </p>
          <Subtitulos className="info">More Info</Subtitulos>         
            <UL>
              <li>Based on Colombia.</li>
              <li>Available to travel.</li>
              <li>Hobbies: MMA - Swimming - Exercising.</li>
            </UL>
          
        </div>
        <div className="languages__container">
          <Subtitulos className="languages">Languages</Subtitulos>

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
      </Contenedor>
    </Layout>
  );
};

export default About;

const Contenedor = styled.div`
  margin: 0;
  padding: 0 2rem;
`;
const Titulo = styled.h2`
  margin: 0;
  color: #fda500;
  font-size: 3rem;
  margin-top: 3rem;
  @media (min-width: 768px) {
    font-size: 4rem;
    margin: 0;
  }
`;

const Subtitulos = styled.h3`
  color: #77dd77;
  margin: 0;
  padding: 0;
  font-size: 2rem;
  @media (min-width: 768px) {
    padding-left: 4rem;
    font-size: 3rem;
  }
`;

const P = styled.p`
  color: white;
  margin: 0;
  padding: 0;
  font-size: 1.2rem;
  text-align: justify;
  @media (min-width: 768px) {
    padding-left: 4rem;
    font-size: 1.5rem;
  }
`;
const UL = styled.ul`
  color: white;
  padding: 0;
  font-size: 1.2rem;
  text-align: justify;
  @media (min-width: 768px) {
    padding-left: 4rem;
    font-size: 1.5rem;
  }
`;
