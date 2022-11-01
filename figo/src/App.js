import "./App.css";
import { Header } from "./components/Header";
import { AboutUs } from "./components/AboutUsSection";
import { ReviewsSection } from "./components/ReviewsSection";
import { ServiceSection } from "./components/ServiceSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Header></Header>
      <AboutUs></AboutUs>
      <FeaturesSection></FeaturesSection>
      <ServiceSection></ServiceSection>
      <ReviewsSection></ReviewsSection>
      <Footer></Footer>
    </>
  );
}

export default App;
