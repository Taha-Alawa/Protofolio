import { useState, useEffect } from "react"
import { technologies } from "./api"
import { motion } from "framer-motion"

export default function SkillContent() {

  return (
    <div className="skill-content">
      {technologies.map((tech, index) => (
        <motion.div
          initial={{y: -10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", delay: 0.1 * index, duration: 0.75 }}
          key={tech.name}>
          <h3>{tech.name}</h3>
          <img src={tech.icon} alt={tech.name} className={tech.name} />
        </motion.div>
      ))}
    </div>
  )
}
