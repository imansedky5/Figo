import { NavBar } from "./NavBar";

export const Header = () => {
  return (
    <header>
      <NavBar></NavBar>
      <div className="header-container">
        <div className="intro">
          <h1>We design interfaces that users love</h1>
          <p>
            Morbi sed lacus nec risus finibus feugiat et fermentum nibh.
            Pellentesque vitae ante at elit fringilla ac at purus.
          </p>
          <button>Learn More</button>
        </div>
        <img src="./images/hero-banner.png"></img>
      </div>
    </header>
  );
};
