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
            I’m a Frontend / Full-Stack Developer with experience building responsive web
            applications using React, Next.js and TypeScript. I’m skilled in translating Figma
            designs and product requirements into clean, reusable interfaces and integrating REST
            APIs. I’m also experienced in backend development with Node.js, Express and PostgreSQL,
            including authentication, third-party integrations, automated testing and deployment.
          </p>
          
          <p>
            Outside of technology, I’m a baker who enjoys creating and experimenting with different
            baked goods. Baking gives me another way to be creative, patient, and detail-oriented
          </p>
          <p>
            Whether I’m writing code or creating something in the kitchen, I enjoy the process of
            turning an idea into something useful, thoughtful, and enjoyable.
          </p>

          <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
            <button className="btn btn-lg btn-outline-light my-4">Resume</button>
          </a>
        </div>
      </div>
    </section>
  );
}
