import { Title } from "./Title";

export const AboutUs = () => {
  return (
    <section className="about-section">
      <img src="./images/about-banner.png" alt="man his laptop"></img>
      <div className="about-wrapper">
        <Title title="Why Our Agency?"></Title>
        <p>
          In dictum aliquam turpis lacinia iaculis. Fusce vel malesuada magna.
          Nulla vel maximus risus. Donec volutpat metus lacinia risus accumsan,
          ac bibendum libero efficitur. Pellentesque nec nisi sit amet magna
          tempus hendrerit ut a odio.
        </p>
        <p>
          Praesent rhoncus commodo tortor, id pulvinar nisl blandit at. Nulla
          facilisi. Quisque turpis ante, vehicula condimentum arcu.
        </p>
        <div className="cards-container">
          <div>
            <h2>9875</h2>
            <p>Satisfied Clients</p>
          </div>
          <div>
            <h2>95</h2>
            <p>Project Launched</p>
          </div>
          <div>
            <h2>5</h2>
            <p>Years Completed</p>
          </div>
        </div>
      </div>
    </section>
  );
};
