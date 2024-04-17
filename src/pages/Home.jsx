import { Helmet } from "react-helmet-async";
import EarthCanvas from "../components/Earth";
import SkillContent from "../components/SkillContent";
import Myspecialprojects from "../components/Myspecialprojects";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="hero">
        <EarthCanvas />
        <div className="hero-content">
          <h2>Hi I'm Taha, Front-end developer</h2>
          <p>
          A lover of learning, I create websites
          that reflect my passion for learning
          and technical development
          </p>
        </div>
      </section>
      <section className="skills">
        <h2>My Skills</h2>
        <SkillContent />
      </section>
      <section className="experince">
        <h2>My Experince</h2>
        <div>
          <h3 className="name">FreeLance Front-end developer</h3>
          <h3 className="time">October 2023 - now</h3>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </section>
      <h2 style={{ textAlign: "center", color: "#fff" }}>My Projects</h2>
      <Myspecialprojects />
      <div className="all-projects">
        <Link to="/projects" >Show all projects</Link>
      </div>
    </>
  );
};

export default Home;
