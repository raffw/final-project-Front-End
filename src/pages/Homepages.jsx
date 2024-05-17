import Navbar from "../components/Fragments/Nav";
import Caraousel from "../components/Fragments/Caraousel";
import Category from "../components/Fragments/Category";
import Terdekat from "../components/Fragments/Terdekat";
import Sekitar from "../components/Fragments/Sekitar";
import Dampak from "../components/Fragments/Dampak";
import Terlaris from "../components/Fragments/Terlaris";
import Footer from "../components/Fragments/Footer";

const Homepages = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="py-3">
        <Caraousel></Caraousel>
      </div>
      <Category></Category>
      <Terdekat></Terdekat>
      <Sekitar></Sekitar>
      <Dampak></Dampak>
      <Terlaris></Terlaris>
      <Footer></Footer>
    </div>
  );
};

export default Homepages;
