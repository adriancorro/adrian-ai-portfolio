"use client";
import {site} from "@/lib/site"; import {useLanguage} from "./LanguageProvider";
export function Footer(){const {language:l}=useLanguage();return <footer className="footer"><div className="container footerGrid"><div><strong>{site.name}</strong><p>{site.role} · Barcelona, {l==="en"?"Spain":"España"}</p></div><div className="footerLinks"><a href={site.github} target="_blank" rel="noreferrer">GitHub</a>{site.linkedin&&<a href={site.linkedin}>LinkedIn</a>}{site.email&&<a href={`mailto:${site.email}`}>Email</a>}</div></div></footer>}
