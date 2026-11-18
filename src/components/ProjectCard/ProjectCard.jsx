import "./ProjectCard.css";

const ProjectCard = ({ title, description, technologies, link }) => {
  return (
    <article>
      <h2>{title}</h2>

      <p>{description}</p>

      <div className="project-technologies">
        {technologies.map((technology, index) => (
            <span key={index}>{technology}</span>
        ))}
      </div>
      <a href={link} target="_blank"></a>
    </article>
  )
}

export default ProjectCard
