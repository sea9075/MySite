import { experience } from "../data/content";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <span className="section-label">Experience</span>
        <h2 className="section-title">經歷</h2>

        <ol className="timeline">
          {experience.map((job) => (
            <Reveal key={`${job.title}-${job.period}`} as="li" className="timeline__item">
              <span className="timeline__period">{job.period}</span>
              <div className="timeline__content">
                <h3 className="timeline__title">
                  {job.title} · {job.company}
                </h3>
                <p className="timeline__desc">{job.description}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
