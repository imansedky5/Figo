import { Card } from "./Card";
import { FaSearch } from "react-icons/fa";
import { FaDesktop } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";

export const ServiceSection = () => {
  return (
    <div className="cards-container">
      <Card
        icon={<FaSearch />}
        title="Strategy & Research"
        info="Mauris ut felis malesuada eros varius tristique a at orci. Nulla vulputate, leo sit amet rhoncus suscipit, enim ex venenatis ipsum, et porttitor."
      ></Card>
      <Card
        icon={<FaDesktop />}
        title="Web Development"
        info="Mauris ut felis malesuada eros varius tristique a at orci. Nulla vulputate, leo sit amet rhoncus suscipit, enim ex venenatis ipsum, et porttitor."
      ></Card>
      <Card
        icon={<FaLightbulb />}
        title="Web Solutions"
        info="Mauris ut felis malesuada eros varius tristique a at orci. Nulla vulputate, leo sit amet rhoncus suscipit, enim ex venenatis ipsum, et porttitor."
      ></Card>
    </div>
  );
};
