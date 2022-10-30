import { Feature } from "./Feature";
import { FaCode } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaDesktop } from "react-icons/fa";
import { Card } from "./Card";

export const FeaturesSection = () => {
  return (
    <div className="features-section">
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
      {/* <div className='feature-container'>
        <div className='feature-icon'>
        <FaLock></FaLock>
        </div>
        <h3>App Security</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>

    </div> */}
      {/* <div className="feature-container">
        <div className="feature-icon">
          <FaCode></FaCode>
        </div>
        <h3>Clean Code</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
          maxime quam architecto quo inventore harum ex magni, dicta impedit.
        </p>
      </div>

      <div className="feature-container">
        <div className="feature-icon">
          <FaLock></FaLock>
        </div>
        <h3>Responsive Design</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
          maxime quam architecto quo inventore harum ex magni, dicta impedit.
        </p>
      </div> */}
    </div>
  );
};
