import Navbar from "../components/Fragments/DashBoard/Nav";
import Caraousel from "../components/Fragments/DashBoard/Caraousel";
import Category from "../components/Fragments/DashBoard/Category";
import Sekitar from "../components/Fragments/DashBoard/Sekitar";
import Dampak from "../components/Fragments/DashBoard/Dampak";
import Footer from "../components/Fragments/Footer";
import Menu from "../components/Fragments/DashBoard/Menu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Homepages = () => {
  return (
    <div>
      <Navbar />
      <div className="py-2">
        <Caraousel />
      </div>
      <section className="py-2">
        <Category />
      </section>
      <section>
        <Menu />
      </section>
      <Dampak />
      <Footer />
    </div>
  );
};

export default Homepages;
