import { profile, socials } from "../data/content";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        <span className="section-label">Portfolio</span>
        <h1 className="hero__title">
          {profile.name}
          <br />
          <span className="hero__title-muted">{profile.role}</span>
        </h1>
        <p className="hero__tagline">{profile.tagline}</p>

        <div className="hero__actions">
          <a className="btn btn--primary" href="#projects">
            查看專案
          </a>
          <a className="btn btn--ghost" href="#contact">
            聯絡我
          </a>
        </div>

        <div className="hero__meta">
          <span>{profile.location}</span>
          <span className="dot" />
          {socials.map((s) => (
            <a key={s.label} href={s.url} target="_blank" rel="noreferrer">
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
