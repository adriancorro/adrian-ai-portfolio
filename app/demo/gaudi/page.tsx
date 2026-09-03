import { GaudiDemo } from "@/components/GaudiDemo";

export const metadata = { title: "Gaudí Public Demo" };

export default function GaudiDemoPage() {
  return (
    <section className="section demoPage">
      <div className="container">
        <div className="demoIntro">
          <div><span className="kicker">PUBLIC-SAFE INTERACTIVE DEMO</span><h1>Gaudí, sin datos corporativos.</h1></div>
          <p>Una simulación interactiva para enseñar el tipo de experiencia que construí. No usa sistemas, nombres, documentación ni respuestas reales de mi empresa.</p>
        </div>
        <GaudiDemo />
      </div>
    </section>
  );
}
