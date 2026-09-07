import { profile, socials } from "../data/content";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="section section--contact">
      <div className="container">
        <Reveal>
          <span className="section-label">Contact</span>
          <h2 className="section-title">歡迎聯絡我</h2>
          <p className="contact__text">
            無論是全職機會，或只是想聊聊技術，都歡迎透過以下方式聯繫。
          </p>

          <a className="btn btn--primary contact__cta" href={`mailto:${profile.email}`}>
            寄信給我 → {profile.email}
          </a>

          <div className="contact__socials">
            {socials.map((s) => (
              <a key={s.label} href={s.url} target="_blank" rel="noreferrer">
                {s.label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
