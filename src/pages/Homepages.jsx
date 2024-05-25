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
      <div className="py-2">
        <Caraousel></Caraousel>
      </div>
      <section className="py-2">
        <Category></Category>
      </section>
      <section>
        <Menu/>
      </section>
      <Dampak/>
      <Footer></Footer>
    </div>
  );
};

export default Homepages;
