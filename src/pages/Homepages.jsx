import Navbar from "../component/Component-Homepages/Nav";
import Caraousel from "../component/Component-Homepages/Caraousel";
import Category from "../component/Component-Homepages/Category";
import Terdekat from "../component/Component-Homepages/Terdekat";
import Sekitar from "../component/Component-Homepages/Sekitar";
import Dampak from "../component/Component-Homepages/Dampak";
import Terlaris from "../component/Component-Homepages/Terlaris";
import Footer from "../component/Component-Homepages/Footer";

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
