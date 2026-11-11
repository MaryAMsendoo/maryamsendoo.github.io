import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="feature">
      <h2 className="section-title">Projects</h2>
      <div className="feature_container">
        {projects.map((project) => (
          <div className="project_card" key={project.title}>
            <div className="project_img_container">
              <img className="project_img" src={project.image} alt={project.alt} />
            </div>
            <div className="description">
              <h6>{project.title}</h6>
              <p>{project.description}</p>
            </div>
            <div className="btn_box">
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <button className=" fs-5">Inspect</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
