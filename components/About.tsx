import { RESUME_URL } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about">
      <div className="inner_bg">
        <div className="outer_bg">
          <h3>Apenumbe Mary Msendoo</h3>
          <p>Frontend/Full Stack Developer/Baker</p>
          <p>know:</p>
          <p>
            I’m a Frontend / Full-Stack Developer with experience building and deploying web applications across different sectors. I work primarily with React, Next.js, and TypeScript, turning designs and product requirements into responsive, user-friendly interfaces. I also work with Node.js, Express, and PostgreSQL on the backend, with experience in API development, database design, authentication, third-party integrations, automated testing, and deployment.
          </p>

          <p>
            Outside of technology, I’m also a baker who enjoys experimenting with different recipes and creating baked goods. Baking gives me another outlet for creativity and has taught me patience and attention to detail.
          </p>

          <p>
            Whether I’m building an application or working in the kitchen, I appreciate the process of taking an idea and turning it into something meaningful.
          </p>

          <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
            <button className="btn btn-lg btn-outline-light my-4">Resume</button>
          </a>
        </div>
      </div>
    </section>
  );
}
