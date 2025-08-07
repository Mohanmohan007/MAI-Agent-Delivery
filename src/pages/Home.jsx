import { HomeIcon } from "lucide-react";
import Blog from "../components/Blog";
import CSR from "../components/CSR";
import DIYWorktops from "../components/DIYWorktops";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Intern from "../components/Intern";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Timeline from "../components/Timeline";
import Traders from "../components/Traders";
import HomeBottom from "./HomeBottom";


const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <Traders />
      <Projects />
      <Intern />
      <Timeline />
      <DIYWorktops />
      <Blog />
      <CSR />
      <Footer />
      <HomeBottom />

      
    </div>
  );
};

export default Home;

