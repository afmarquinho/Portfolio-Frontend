import React from "react";
import Layout from "../Layout/Layout";

const Portfolio = () => {
  return (
    <Layout>
      <main>
        <div class="title">
          <h2 class="portfolio">Portfolio</h2>
        </div>
        <div class="card__container">
          <div class="flip-card">
            <div class="flip-card-container">
              <div class="flip-card-front">
                <div class="imagen__proyecto imagen1"></div>
                <h4>TASKY</h4>
              </div>
              <div class="flip-card-back">
                <h4>TASKY</h4>
                <p>To do list.</p>
                <ul>
                  <li>React + Vite + Hooks</li>
                  <li>React Router Dom</li>
                  <li>Styled CompOnents</li>
                  <li>Localhost</li>
                  <li>HTML + CSS + JSX</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="flip-card">
            <div class="flip-card-container">
              <div class="flip-card-front">
                <div class="imagen__proyecto imagen2"></div>
                <h4>CRUD - ECOMMERCE</h4>
              </div>
              <div class="flip-card-back">
                <h4>CRUD - ECOMMERCE</h4>
                <p>E-commerce, inventory manager.</p>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JS</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="flip-card">
            <div class="flip-card-container">
              <div class="flip-card-front">
                <div class="imagen__proyecto imagen3"></div>
                <h4>ENCRYPTOR</h4>
              </div>
              <div class="flip-card-back">
                <h4>ENCRYPTOR</h4>
                <p>Text encryptor - decryptor.</p>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JS</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="flip-card">
            <div class="flip-card-container">
              <div class="flip-card-front">
                <div class="imagen__proyecto imagen4"></div>
                <h4>SALES REPORT</h4>
              </div>
              <div class="flip-card-back">
                <h4>SALES REPORT</h4>
                <ul>
                  <li>HTML</li>
                  <li>CSS - Responsive design</li>
                  <li>JS</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="flip-card">
            <div class="flip-card-container">
              <div class="flip-card-front">
                <div class="imagen__proyecto imagen5"></div>
                <h4>FORM VALIDATOR</h4>
              </div>
              <div class="flip-card-back">
                <h4>FORM VALIDATOR</h4>
                <ul>
                  <li>HTML</li>
                  <li>CSS - Responsive design</li>
                  <li>JS</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Portfolio;
