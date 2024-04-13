import { Helmet } from "react-helmet-async";
import EarthCanvas from "../components/Earth";
import SkillContent from "../components/SkillContent";
import { motion } from "framer-motion"

const Home = () => {
  return (
    <>
      <section className="hero">
        <EarthCanvas />
        <div className="hero-content">
          <h2>Lorem, ipsum dolor sit amet consectetur adipisicing.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error,
            reiciendis aliquid repudiandae laboriosam unde accusantium
            distinctio ex adipisci.
          </p>
          <button>about me</button>
        </div>
      </section>
      <section className="skills">
        <h2>my skills</h2>
        <SkillContent />
      </section>
      <section className="experince">
        <h2>my experince</h2>
        <div>
          <h3 className="name">FreeLance Front-end developer</h3>
          <h3 className="time">October 2023 - now</h3>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </section>
      <section className="projects">
        
      </section>
    </>
  );
};

export default Home;
