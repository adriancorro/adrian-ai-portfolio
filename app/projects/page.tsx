import { ProjectCard } from "@/components/ProjectCard";

export const metadata = { title: "Proyectos" };

export default function ProjectsPage() {
  return (
    <section className="section pageHero">
      <div className="container">
        <span className="kicker">SELECTED WORK</span>
        <h1>Proyectos donde producto, software e IA se encuentran.</h1>
        <p className="pageLead">Mi objetivo es mostrar cómo identifico un problema, diseño la experiencia, construyo la solución y pienso en seguridad y operación.</p>
        <div className="projectGrid projectPageGrid">
          <ProjectCard eyebrow="CASE STUDY" title="Gaudí — AI IT Support Assistant" description="Asistente interno creado a partir de una necesidad empresarial real. Este portfolio solo muestra una representación sanitizada: los datos y procedimientos del demo son ficticios." tags={["Next.js", "OpenAI API", "Context", "Feedback", "Responsive UI"]} href="/projects/gaudi" status="Featured" />
          <ProjectCard eyebrow="PRODUCT CONCEPT" title="AI Employee Onboarding" description="Sistema para responder dudas de nuevos empleados, guiar tareas de onboarding y centralizar conocimiento interno." tags={["AI", "Onboarding", "Knowledge", "Automation"]} status="En diseño" />
          <ProjectCard eyebrow="PRODUCT CONCEPT" title="AI Analytics Copilot" description="Interfaz conversacional que transforma preguntas de negocio en consultas, visualizaciones y explicaciones de métricas." tags={["AI", "Data", "Analytics", "APIs"]} status="Roadmap" />
        </div>
      </div>
    </section>
  );
}
