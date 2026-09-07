import { about } from "../data/content";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <span className="section-label">About</span>
        <h2 className="section-title">關於我</h2>

        <Reveal className="about__grid">
          <div className="about__text">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="about__highlights">
            {about.highlights.map((h) => (
              <div key={h.label} className="stat">
                <span className="stat__value">{h.value}</span>
                <span className="stat__label">{h.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
