import { skillGroups } from "../data/content";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <span className="section-label">Skills</span>
        <h2 className="section-title">技能</h2>

        <div className="skills__grid">
          {skillGroups.map((group) => (
            <Reveal key={group.title} className="skills__group" as="div">
              <h3 className="skills__group-title">{group.title}</h3>
              <ul className="skills__tags">
                {group.items.map((item) => (
                  <li key={item} className="tag">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
