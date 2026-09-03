import Link from "next/link";
import { site } from "@/lib/site";

export function Header() {
  return (
    <header className="siteHeader">
      <div className="container navWrap">
        <Link href="/" className="brand" aria-label={`${site.name}, inicio`}>
          <span className="brandMark">AC</span>
          <span>{site.name}</span>
        </Link>
        <nav className="navLinks" aria-label="Navegación principal">
          <Link href="/projects">Proyectos</Link>
          <Link href="/projects/gaudi">Gaudí</Link>
          <Link href="/demo/gaudi" className="navCta">Demo</Link>
        </nav>
      </div>
    </header>
  );
}
