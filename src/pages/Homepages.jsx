import Navbar from "../component/Component-Homepages/Nav";
import Caraousel from "../component/Component-Homepages/Caraousel";
import Category from "../component/Component-Homepages/Category";
import Footer from "../component/Component-Homepages/Footer";
import Dampak from "../component/Component-Homepages/Dampak"
import Menu from "../component/Component-Homepages/Menu";

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
