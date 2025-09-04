import ChooseUs from "./components/ChooseUs";
import ConsultingSpec from "./components/ConsultingSpec";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import MembersSayingAbt from "./components/MembersSayingAbt";
import Navbar from "./components/Navbar";
import QualityHealth from "./components/QualityHealth";
import SubscribeNews from "./components/SubscribeNews";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ConsultingSpec />
      <ChooseUs />
      <MembersSayingAbt />
      <QualityHealth />
      <SubscribeNews />
      <Footer />
    </>
  );
};

export default App;
