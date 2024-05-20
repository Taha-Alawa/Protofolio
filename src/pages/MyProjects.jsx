import { motion } from "framer-motion"
import { projects } from "../components/api"
import StarsCanvas from "../components/Stars";

export default function MyProjects() {
  return (
    <>
      <StarsCanvas />
      <section className="projects-container">
      {projects.map((element) => (
        <motion.div
          initial={{y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: "spring",}}
          key={element.name}>
          <a href={element.link} target="_blank">
          <img src={element.icon} alt={element.name} />
          <h3>{element.name}</h3>
          </a>
        </motion.div>
      ))}
      </section>
    </>
  )
}
