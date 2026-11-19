import { useEffect, useMemo, useState } from "react";
import PageHeader from "../components/PageHeader/PageHeader";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import Feedback from "../components/Feedback/Feedback";

const projects = [
  { title: "Elevoni Farms", description: "An agri-tech marketplace connecting farmers and buyers, with multilingual assistance and tools for recording sales.", technologies: ["React", "Node.js", "MongoDB", "AI"], link: "https://elevoni.com" },
  { title: "Personal Portfolio", description: "A responsive portfolio built with reusable React components, design tokens and React Router.", technologies: ["React", "Vite", "CSS"], link: "https://portfolio-react-two-lovat.vercel.app/" },
  { title: "N-ATLaS Integration", description: "Exploration of multilingual AI assistance for Nigerian languages in a web product.", technologies: ["AI", "Python", "API"], link: "https://github.com/ahashimbala" },
];

const Projects = () => {
  const [search, setSearch] = useState("");
  const [technology, setTechnology] = useState("All");
  const [repositories, setRepositories] = useState([]);
  const [apiStatus, setApiStatus] = useState("loading");
  const [apiError, setApiError] = useState("");

  const technologies = useMemo(() => ["All", ...new Set(projects.flatMap((project) => project.technologies))], []);
  const filteredProjects = useMemo(() => projects.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(search.trim().toLowerCase());
    const matchesTechnology = technology === "All" || project.technologies.includes(technology);
    return matchesSearch && matchesTechnology;
  }), [search, technology]);

  const fetchRepositories = async (signal) => {
    setApiStatus("loading");
    setApiError("");
    try {
      const response = await fetch("https://api.github.com/users/ahashimbala/repos?sort=updated&per_page=6", { signal });
      if (!response.ok) throw new Error(`GitHub returned ${response.status}. Please try again.`);
      const data = await response.json();
      setRepositories(data);
      setApiStatus(data.length ? "success" : "empty");
    } catch (error) {
      if (error.name === "AbortError") return;
      setApiError(error.message || "Unable to load repositories.");
      setApiStatus("error");
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    fetchRepositories(controller.signal);
    return () => controller.abort();
  }, []);

  const retryRepositories = () => fetchRepositories();

  return (
    <main className="projects-page">
      <PageHeader title="My Projects" description="Explore some of the projects I've worked on." />
      <section className="project-filter" aria-label="Filter projects">
        <Input id="project-search" label="Search projects" placeholder="Search by project name..." value={search} onChange={setSearch} />
        <div className="filter-group">
          <label htmlFor="technology-filter">Technology</label>
          <select id="technology-filter" value={technology} onChange={(event) => setTechnology(event.target.value)}>
            {technologies.map((item) => <option key={item} value={item}>{item}</option>)}
          </select>
        </div>
        <p className="result-count" aria-live="polite">Showing {filteredProjects.length} of {projects.length} projects</p>
        {(search || technology !== "All") && <Button variant="secondary" onClick={() => { setSearch(""); setTechnology("All"); }}>Clear filters</Button>}
      </section>
      {filteredProjects.length ? <div className="project-grid">{filteredProjects.map((project) => <ProjectCard key={project.title} {...project} />)}</div> : <Feedback type="info" message="No projects match your filters. Try a different search." />}

      <section className="github-section">
        <h2>Latest GitHub repositories</h2>
        <p className="section-description">Repository information loaded from the GitHub public API.</p>
        {apiStatus === "loading" && <Feedback message="Loading repositories…" />}
        {apiStatus === "error" && <div className="api-error"><Feedback type="error" message={apiError} /><Button onClick={retryRepositories}>Retry</Button></div>}
        {apiStatus === "empty" && <Feedback type="info" message="No public repositories were returned." />}
        {apiStatus === "success" && <div className="repo-grid">{repositories.map((repo) => <article className="repo-card" key={repo.id}><h3><a href={repo.html_url} target="_blank" rel="noreferrer">{repo.name}</a></h3><p>{repo.description || "No description provided."}</p><div className="repo-meta"><span>{repo.language || "Language not specified"}</span><span>★ {repo.stargazers_count}</span></div></article>)}</div>}
      </section>
    </main>
  );
};

export default Projects;
