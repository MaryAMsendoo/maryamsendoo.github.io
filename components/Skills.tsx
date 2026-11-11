import { additionalSkills, backendSkills, coreSkills, tools, type Skill } from "@/data/portfolio";

const whiteLogoStyle = { background: "white", padding: "5px", borderRadius: "5px" };

function SkillCard({ skill }: { skill: Skill }) {
  return (
    <div className="skill-card">
      <div className="skill-header">
        <div className="skill-icon">
          {skill.logo ? (
            <img
              src={skill.logo}
              alt={skill.alt}
              className="skill-logo"
              style={skill.whiteBg ? whiteLogoStyle : undefined}
            />
          ) : (
            <i className={skill.icon} aria-label={skill.alt}></i>
          )}
        </div>
        <h4 className="skill-name">{skill.name}</h4>
      </div>
      <p className="skill-description">{skill.description}</p>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills">
      <h2 className="section-title">My Skills</h2>
      <div className="skills-container">
        {/* First Row: Core Technologies */}
        <div className="skills-grid mb-5">
          {coreSkills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>

        {/* Second Row: Additional Skills */}
        <div className="skills-grid">
          {additionalSkills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>

        {/* Backend Row */}
        <div className="skills-grid">
          {backendSkills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>

        {/* Third Row: Additional Tools */}
        <div className="tools-section">
          <h3 className="tools-title">Tools &amp; Other Skills</h3>
          <div className="tools-grid">
            {tools.map((tool) => (
              <div className="tool-item" key={tool.label}>
                <i className={tool.icon}></i>
                <span>{tool.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
