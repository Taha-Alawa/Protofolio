import { motion } from "framer-motion"
import { specialProjects } from "../components/api"

export default function Myspecialprojects() {
  return (
    <section className="projects-container" style={{ width: "80%" }}>
    {specialProjects.map((element) => (
      <motion.div 
        style={{ width: "46%", margin: "10px 0" }}
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
  )
}
