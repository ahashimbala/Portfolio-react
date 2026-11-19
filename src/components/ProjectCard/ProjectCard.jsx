import "./ProjectCard.css";

const ProjectCard = ({ title, description, technologies, link }) => (
  <article className="project-card">
    <h2>{title}</h2>
    <p>{description}</p>
    <div className="project-technologies">{technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
    <a className="project-link" href={link} target="_blank" rel="noreferrer">View project ↗</a>
  </article>
);

export default ProjectCard;
