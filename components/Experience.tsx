import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience">
      <h2 className="section-title">Experience</h2>
      <div className="experience-container">
        {experience.map((job) => (
          <div className="experience-card" key={job.company}>
            <div className="experience-header">
              <div>
                <h4 className="experience-role">{job.role}</h4>
                <p className="experience-company">{job.company}</p>
              </div>
              <span className="experience-period">{job.period}</span>
            </div>
            <ul className="experience-points">
              {job.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
