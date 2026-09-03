import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <>
      <section className="hero section">
        <div className="container heroGrid">
          <div>
            <span className="kicker">AI · FULL-STACK · INTERNAL TOOLS</span>
            <h1>Construyo productos con IA que solucionan trabajo real.</h1>
            <p className="heroText">{site.tagline} Especialmente asistentes internos, bases de conocimiento, automatización y experiencias web orientadas a operaciones. </p>
            <div className="buttonRow">
              <Link href="/projects" className="button primary">Ver proyectos</Link>
              <Link href="/demo/gaudi" className="button secondary">Probar Gaudí Demo</Link>
            </div>
            <div className="heroMeta">
              <span>Barcelona, España</span><span>Disponible para oportunidades</span><span>ES / EN</span>
            </div>
          </div>
          <div className="heroVisual" aria-label="Vista conceptual de un producto de IA">
            <div className="visualWindow">
              <div className="windowBar"><i/><i/><i/></div>
              <div className="visualContent">
                <div className="miniSidebar"><b>G</b><span/><span/><span/></div>
                <div className="miniChat">
                  <div className="miniLabel">Knowledge assistant</div>
                  <div className="bubble assistant">How can I help with your workflow?</div>
                  <div className="bubble user">I need access to a tool.</div>
                  <div className="bubble assistant wide">I found the relevant process and can guide you through the next steps.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section mutedSection">
        <div className="container">
          <div className="sectionHeading">
            <span className="eyebrow">Featured work</span>
            <h2>De una necesidad operativa a un producto utilizable.</h2>
          </div>
          <div className="projectGrid">
            <ProjectCard eyebrow="01 · AI SUPPORT" title="Gaudí — AI IT Support Assistant" description="Case study de un asistente interno orientado a soporte, onboarding, conectividad y conocimiento operativo. La versión pública está sanitizada y usa datos ficticios." tags={["Next.js", "OpenAI", "Knowledge Base", "UX", "Vercel"]} href="/projects/gaudi" status="Proyecto real · demo segura" />
            <ProjectCard eyebrow="02 · CONCEPT" title="AI Employee Onboarding" description="Concepto de onboarding inteligente para centralizar procesos, accesos, documentación y preguntas frecuentes de nuevos empleados." tags={["AI", "Workflows", "RAG", "Product"]} status="Próximo proyecto" />
            <ProjectCard eyebrow="03 · CONCEPT" title="AI Business Analytics" description="Asistente para explorar métricas, explicar variaciones y convertir datos de negocio en respuestas accionables." tags={["Analytics", "AI", "Dashboards", "APIs"]} status="Roadmap" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container twoCol">
          <div>
            <span className="eyebrow">What I build</span>
            <h2>IA aplicada, no IA por decoración.</h2>
          </div>
          <div className="featureList">
            <div><strong>AI Assistants</strong><p>Asistentes conectados a conocimiento y procesos concretos.</p></div>
            <div><strong>Internal Tools</strong><p>Interfaces sencillas para reducir fricción operativa.</p></div>
            <div><strong>Automation</strong><p>Flujos que eliminan tareas repetitivas y mejoran tiempos de respuesta.</p></div>
            <div><strong>Full-stack delivery</strong><p>Del prototipo y UX al backend, despliegue y mejora continua.</p></div>
          </div>
        </div>
      </section>

      <section className="section ctaSection">
        <div className="container ctaBox">
          <div><span className="eyebrow">Let’s build</span><h2>¿Tienes un proceso repetitivo que podría convertirse en una herramienta?</h2></div>
          <a className="button primary" href={site.github} target="_blank" rel="noreferrer">Ver GitHub</a>
        </div>
      </section>
    </>
  );
}
