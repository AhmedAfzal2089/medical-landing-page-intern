import ChooseUs from "./components/ChooseUs";
import ConsultingSpec from "./components/ConsultingSpec";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import OurMember from "./components/OurMember";
import QualityHealth from "./components/QualityHealth";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ConsultingSpec />
      <ChooseUs />
      {/* <OurMember /> */}
      <QualityHealth />
    </>
  );
};

export default App;
