import { Feature } from "./Feature";
import { FaCode } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaDesktop } from "react-icons/fa";
import { Card } from "./Card";
import { Title } from "./Title";

export const FeaturesSection = () => {
  return (
    <section className="features-section">
      <Title title="Our Features"></Title>
      <div className="features-wrapper">
        <Feature
          icon={<FaLock />}
          title="App Security"
          info="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."
        ></Feature>
        <Feature
          icon={<FaCode />}
          title="Clean Code"
          info="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."
        ></Feature>

        <Feature
          icon={<FaDesktop />}
          title="Responsive Design"
          info="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."
        ></Feature>
      </div>
    </section>
  );
};
