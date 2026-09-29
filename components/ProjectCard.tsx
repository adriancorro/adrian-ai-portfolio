"use client";
import Link from "next/link"; import {useLanguage} from "./LanguageProvider";
type Props={eyebrow:string;title:string;description:string;tags:string[];href?:string;status?:string};
export function ProjectCard(p:Props){const {language:l}=useLanguage();const content=<article className="projectCard"><div className="cardTopline"><span className="eyebrow">{p.eyebrow}</span>{p.status&&<span className="statusPill">{p.status}</span>}</div><h3>{p.title}</h3><p>{p.description}</p><div className="tagRow">{p.tags.map(t=><span className="tag" key={t}>{t}</span>)}</div>{p.href&&<span className="textLink">{l==="en"?"View case study":"Ver case study"} →</span>}</article>;return p.href?<Link className="cardLink" href={p.href}>{content}</Link>:content}
