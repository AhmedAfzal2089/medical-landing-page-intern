import ChooseUs from "./components/ChooseUs";
import ConsultingSpec from "./components/ConsultingSpec";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import OurMember from "./components/OurMember";
import QualityHealth from "./components/QualityHealth";
import SubscribeNews from "./components/SubscribeNews";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ConsultingSpec />
      <ChooseUs />
      {/* <OurMember /> */}
      <QualityHealth />
      <SubscribeNews />
    </>
  );
};

export default App;
