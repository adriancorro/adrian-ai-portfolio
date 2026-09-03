import Link from "next/link";

export const metadata = { title: "Gaudí Case Study" };

export default function GaudiCaseStudy() {
  return (
    <>
      <section className="section caseHero">
        <div className="container">
          <div className="caseMeta"><span>CASE STUDY</span><span>AI · INTERNAL TOOLS · SUPPORT</span></div>
          <h1>Gaudí — convertir conocimiento de soporte en una experiencia conversacional.</h1>
          <p className="pageLead">Un asistente interno diseñado para reducir fricción en consultas repetitivas de IT y onboarding. Esta presentación pública describe el enfoque del producto sin revelar información, clientes, dominios, credenciales ni procedimientos internos de la empresa.</p>
          <div className="buttonRow"><Link href="/demo/gaudi" className="button primary">Abrir demo pública</Link><Link href="/projects" className="button secondary">Todos los proyectos</Link></div>
        </div>
      </section>

      <section className="section mutedSection">
        <div className="container metricsGrid">
          <div><span>01</span><strong>Problem framing</strong><p>Muchas preguntas repetitivas, información dispersa y necesidad de respuestas contextualizadas.</p></div>
          <div><span>02</span><strong>Product approach</strong><p>Una interfaz conversacional accesible, responsive y centrada en tareas.</p></div>
          <div><span>03</span><strong>AI layer</strong><p>Contexto, conocimiento controlado, idioma y reglas para reducir respuestas fuera de alcance.</p></div>
          <div><span>04</span><strong>Iteration</strong><p>Feedback por respuesta y registro de consultas para detectar mejoras.</p></div>
        </div>
      </section>

      <section className="section">
        <div className="container caseGrid">
          <div className="stickyTitle"><span className="eyebrow">01 · The problem</span><h2>El soporte no debería depender de recordar dónde está cada respuesta.</h2></div>
          <div className="caseText"><p>El problema de producto era hacer más fácil encontrar orientación útil para preguntas frecuentes de soporte y onboarding, especialmente cuando la respuesta depende del contexto del usuario.</p><p>La oportunidad: crear una capa conversacional que reduzca búsquedas manuales y presente el siguiente paso de forma clara.</p></div>
        </div>
      </section>

      <section className="section borderSection">
        <div className="container caseGrid">
          <div className="stickyTitle"><span className="eyebrow">02 · Architecture</span><h2>Una arquitectura fácil de explicar en una entrevista.</h2></div>
          <div className="architecture">
            <div className="archNode"><b>Employee</b><span>Question + context</span></div><div className="archArrow">↓</div>
            <div className="archNode"><b>Next.js UI</b><span>Responsive chat experience</span></div><div className="archArrow">↓</div>
            <div className="archNode"><b>Application layer</b><span>Session · language · project context</span></div><div className="archArrow">↓</div>
            <div className="archSplit"><div className="archNode"><b>Knowledge</b><span>Approved information</span></div><div className="archNode"><b>AI model</b><span>Reasoning + response</span></div></div><div className="archArrow">↓</div>
            <div className="archNode accent"><b>Helpful answer</b><span>Contextual next step + feedback</span></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container caseGrid">
          <div className="stickyTitle"><span className="eyebrow">03 · Challenges</span><h2>Lo interesante no fue “hacer un chatbot”.</h2></div>
          <div className="challengeGrid">
            <div><strong>Context</strong><p>Mantener el proyecto y la situación del usuario entre preguntas sin volver la conversación confusa.</p></div>
            <div><strong>Language</strong><p>Responder de manera consistente en el idioma de la consulta.</p></div>
            <div><strong>Grounding</strong><p>Limitar las respuestas a conocimiento permitido y evitar inventar procedimientos.</p></div>
            <div><strong>Feedback</strong><p>Capturar valoraciones y comentarios para descubrir dónde la respuesta necesita mejorar.</p></div>
            <div><strong>UX</strong><p>Hacer que el producto funcione bien en escritorio y móvil con acciones obvias.</p></div>
            <div><strong>Deployment</strong><p>Mantener un flujo de ramas, previews y despliegue reproducible.</p></div>
          </div>
        </div>
      </section>

      <section className="section securitySection">
        <div className="container caseGrid">
          <div className="stickyTitle"><span className="eyebrow">04 · Public demo strategy</span><h2>Demostrar capacidad sin filtrar información interna.</h2></div>
          <div className="caseText"><p>La demo de este portfolio no se conecta a la base de conocimiento, infraestructura ni APIs internas del proyecto original. Utiliza organizaciones, proyectos, respuestas y procesos inventados.</p><ul className="checkList"><li>Sin nombres reales de clientes o proyectos.</li><li>Sin dominios, VPNs, usernames o credenciales.</li><li>Sin procedimientos internos exactos.</li><li>Sin datos de usuarios, logs ni conversaciones reales.</li><li>Sin claves API privadas en el frontend.</li></ul><Link href="/demo/gaudi" className="textLink standalone">Probar la demo segura →</Link></div>
        </div>
      </section>

      <section className="section ctaSection"><div className="container ctaBox"><div><span className="eyebrow">Outcome</span><h2>El proyecto demuestra producto, frontend, backend, IA, UX y pensamiento de seguridad.</h2></div><Link href="/demo/gaudi" className="button primary">Verlo funcionando</Link></div></section>
    </>
  );
}
