import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      {/* Header */}
      <header className="header">
        <div className="logo">Yoruba BC</div>
        <nav className="nav">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1>TOGETHER WE GROW</h1>
        <div className="partners">
          <div className="partner">Egbe Omo Yoruba Ti BC</div>
          <span>Now Official Partners</span>
          <div className="partner">SBOT</div>
        </div>
      </section>

      {/* About Us */}
      <section className="display">
        <section className="about">
          <h2>About Us</h2>
          <h3>Egbe Omo Yoruba Ti BC</h3>
          <p>
            Yoruba Social and Cultural Association of British Columbia is a
            non-profit organization located in Surrey, British Columbia, Canada.
            The association is a black-led organization established in 1998 to
            cater for the needs of the minority ethnic group of Yoruba origin,
            living in BC. One of the objectives of the association is to
            provide, promote and foster good social and cultural relationships
            and an environment where Yoruba people, Yoruba Canadians and other
            cultural associations can discuss matters of mutual interest to all
            cultures.
          </p>
        </section>

        {/* Community Development */}
        <section className="community">
          <h2>25+ Years of Community Development</h2>
          <img
            src="https://yorubabc.ca/storage/2023/07/IMG_4044-1-1-2048x1536.jpg"
            alt="Community Development"
            width={300}
          />
        </section>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Egbe Omo Yoruba Ti BC. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
