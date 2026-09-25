import Link from "next/link";

export const metadata = { title: "Gaudí Case Study" };

const GAUDI_LIVE_URL = "https://gaudi-help.vercel.app/";
const GAUDI_PRESENTATION_URL = "/files/Gaudi_functionality_and_architecture_EN.pptx";

export default function GaudiCaseStudy() {
  return (
    <>
      <section className="section caseHero">
        <div className="container">
          <div className="caseMeta"><span>CASE STUDY</span><span>AI · INTERNAL TOOLS · SUPPORT</span></div>
          <h1>Gaudí — convertir conocimiento de soporte en una experiencia conversacional.</h1>
          <p className="pageLead">Un asistente interno diseñado para reducir fricción en consultas repetitivas de IT y onboarding. Esta presentación pública describe el enfoque del producto sin revelar credenciales ni secretos de acceso.</p>
          <div className="buttonRow">
            <a href={GAUDI_LIVE_URL} className="button primary" target="_blank" rel="noreferrer">Abrir Gaudí real</a>
            <a href={GAUDI_PRESENTATION_URL} className="button secondary" download>Presentación EN · PowerPoint</a>
            <Link href="/demo/gaudi" className="button secondary">Demo pública</Link>
          </div>
          <div className="liveProjectLink" aria-label="Enlace de producción de Gaudí">
            <span>LIVE · ACCESO PROTEGIDO</span>
            <a href={GAUDI_LIVE_URL} target="_blank" rel="noreferrer">https://gaudi-help.vercel.app/</a>
          </div>
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
          <div className="stickyTitle"><span className="eyebrow">04 · Live product & public demo</span><h2>Mostrar el producto real manteniendo el acceso controlado.</h2></div>
          <div className="caseText">
            <p>La aplicación real de Gaudí está desplegada en Vercel y protegida con autenticación. El portfolio no publica credenciales: quien tenga acceso autorizado puede abrir la aplicación desde el enlace de producción.</p>
            <p><a className="textLink standalone" href={GAUDI_LIVE_URL} target="_blank" rel="noreferrer">https://gaudi-help.vercel.app/ →</a></p>
            <p>La demo pública del portfolio sigue siendo una simulación sanitizada y separada del entorno interno.</p>
            <ul className="checkList"><li>El entorno real requiere autenticación.</li><li>Las credenciales no se almacenan en el portfolio.</li><li>La demo pública utiliza información ficticia.</li><li>La presentación técnica en inglés puede descargarse como PowerPoint.</li></ul>
            <div className="buttonRow compactButtons">
              <a href={GAUDI_PRESENTATION_URL} className="button secondary" download>Descargar presentación EN</a>
              <Link href="/demo/gaudi" className="button secondary">Probar demo segura</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section ctaSection"><div className="container ctaBox"><div><span className="eyebrow">Outcome</span><h2>El proyecto demuestra producto, frontend, backend, IA, UX, despliegue y control de acceso.</h2></div><a href={GAUDI_LIVE_URL} className="button primary" target="_blank" rel="noreferrer">Abrir Gaudí</a></div></section>
    </>
  );
}
