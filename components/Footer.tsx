import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footerGrid">
        <div>
          <strong>{site.name}</strong>
          <p>{site.role} · {site.location}</p>
        </div>
        <div className="footerLinks">
          <a href={site.github} target="_blank" rel="noreferrer">GitHub</a>
          {site.linkedin && <a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>}
          {site.email && <a href={`mailto:${site.email}`}>Email</a>}
        </div>
      </div>
    </footer>
  );
}
