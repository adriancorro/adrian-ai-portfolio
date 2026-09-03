import Link from "next/link";

type Props = {
  eyebrow: string;
  title: string;
  description: string;
  tags: string[];
  href?: string;
  status?: string;
};

export function ProjectCard({ eyebrow, title, description, tags, href, status }: Props) {
  const content = (
    <article className="projectCard">
      <div className="cardTopline">
        <span className="eyebrow">{eyebrow}</span>
        {status && <span className="statusPill">{status}</span>}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="tagRow">
        {tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
      </div>
      {href && <span className="textLink">Ver case study →</span>}
    </article>
  );

  return href ? <Link className="cardLink" href={href}>{content}</Link> : content;
}
