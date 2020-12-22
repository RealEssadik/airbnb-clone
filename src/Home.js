import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";

function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="cards">
        <h2>Live Anywhere</h2>
        <div className="home__section">
          <Card
            src="https://a0.muscache.com/im/pictures/a0316ecb-e49b-4b3a-b6b6-c2876b820e8c.jpg?im_w=320"
            title="Entire homes"
          />
          <Card
            src="https://a0.muscache.com/im/pictures/ff69ac49-64e7-4f4a-ae2b-ee01163d0790.jpg?im_w=320"
            title="Cabins and cottages"
          />
          <Card
            src="https://a0.muscache.com/im/pictures/ce6814ba-ed53-4d6e-b8f8-c0bbcf821011.jpg?im_w=320"
            title="Unique stays"
          />
          <Card
            src="https://a0.muscache.com/im/pictures/fbe849a4-841a-41b3-b770-419402a6316f.jpg?im_w=240"
            title="Pets welcome"
          />
        </div>
      </div>

      <div className="home__sectionBlack">
        <div className="cards">
          <h2>Experience the world</h2>
          <p>Unique activities with local experts—in person or online.</p>
          <div className="home__section ">
            <Card
              src="https://a0.muscache.com/im/pictures/4d353c80-e73a-4b04-9e15-ec3d8381b106.jpg?im_w=480"
              title="Online Experiences"
              description="Travel the world without leaving home"
            />
            <Card
              src="https://a0.muscache.com/im/pictures/e81fce5f-2f51-4342-938e-5bc18ae237f4.jpg?im_w=480"
              title="Experiences"
              description="Things to do wherever you are"
            />
            <Card
              src="https://a0.muscache.com/im/pictures/b9adfc39-6e2a-4e5f-b6f3-681b306fae5c.jpg?im_w=480"
              title="Adventures"
              description="Multi-day trips with meals and stays"
            />
          </div>
        </div>
      </div>

      <div className="cards">
        <div className="card__learnMore"></div>

        <h2>Join millions of hosts on Airbnb</h2>
        <div className="home__section">
          <Card
            src="https://a0.muscache.com/im/pictures/2a16f833-464c-446c-8d74-33eb8c643975.jpg?im_w=480"
            title="Host Your Home"
          />
          <Card
            src="https://a0.muscache.com/im/pictures/426a8116-0b94-4407-ae87-924126c81d78.jpg?im_w=480"
            title="Host and Online Experience"
          />
          <Card
            src="https://a0.muscache.com/im/pictures/a84e92bd-68e6-4ce2-9fdf-b2ce1a377f53.jpg?im_w=480"
            title="Host an Experience"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
