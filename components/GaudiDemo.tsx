"use client";

import { FormEvent, useMemo, useState } from "react";
import { demoProjects, getDemoAnswer } from "@/lib/gaudi-demo";

type Message = { role: "user" | "assistant"; content: string };

const suggestions = [
  "He cambiado mi contraseña desde casa. ¿Qué hago?",
  "¿Cómo me conecto desde casa?",
  "I need access to an internal tool.",
  "What should I do if my VPN is not connecting?",
];

export function GaudiDemo() {
  const [projectId, setProjectId] = useState(demoProjects[0].id);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hola. Soy Gaudí Demo. Elige un proyecto ficticio y pregúntame sobre soporte IT, onboarding, accesos o conectividad." },
  ]);

  const project = useMemo(() => demoProjects.find((item) => item.id === projectId) ?? demoProjects[0], [projectId]);

  function sendMessage(value: string) {
    const clean = value.trim();
    if (!clean) return;
    const answer = getDemoAnswer(clean, project.name);
    setMessages((current) => [...current, { role: "user", content: clean }, { role: "assistant", content: answer }]);
    setInput("");
  }

  function submit(event: FormEvent) {
    event.preventDefault();
    sendMessage(input);
  }

  function reset() {
    setMessages([{ role: "assistant", content: "Conversación reiniciada. Esta demo usa únicamente datos ficticios." }]);
  }

  return (
    <div className="demoShell">
      <aside className="demoSidebar">
        <div>
          <span className="demoLogo">G</span>
          <h2>Gaudí Demo</h2>
          <p>AI IT Assistant</p>
        </div>
        <label className="fieldLabel" htmlFor="project">Proyecto ficticio</label>
        <select id="project" value={projectId} onChange={(event) => setProjectId(event.target.value)}>
          {demoProjects.map((item) => <option key={item.id} value={item.id}>{item.name}</option>)}
        </select>
        <div className="projectMeta">{project.description}</div>
        <button type="button" className="ghostButton" onClick={reset}>Reiniciar conversación</button>
        <div className="securityNote">
          <strong>Public-safe demo</strong>
          <span>Datos, organizaciones, flujos y respuestas son ficticios.</span>
        </div>
      </aside>

      <section className="chatPanel" aria-label="Demostración de Gaudí">
        <div className="chatHeader">
          <div>
            <span className="onlineDot" /> Demo activa
          </div>
          <span>{project.name}</span>
        </div>

        <div className="messageList" aria-live="polite">
          {messages.map((message, index) => (
            <div className={`message ${message.role}`} key={`${message.role}-${index}`}>
              <span className="messageRole">{message.role === "assistant" ? "Gaudí" : "Tú"}</span>
              <p>{message.content}</p>
            </div>
          ))}
        </div>

        <div className="suggestionRow">
          {suggestions.map((suggestion) => (
            <button type="button" key={suggestion} onClick={() => sendMessage(suggestion)}>{suggestion}</button>
          ))}
        </div>

        <form className="chatForm" onSubmit={submit}>
          <input
            aria-label="Escribe tu pregunta"
            placeholder="Pregunta algo sobre soporte IT…"
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <button type="submit">Enviar</button>
        </form>
      </section>
    </div>
  );
}
