export type DemoProject = {
  id: string;
  name: string;
  description: string;
};

export const demoProjects: DemoProject[] = [
  { id: "atlas", name: "Atlas Retail", description: "Retail · Remote-first" },
  { id: "nova", name: "Nova Health", description: "Healthcare · Hybrid" },
  { id: "orbit", name: "Orbit Media", description: "Media · Distributed" },
];

const esAnswers = {
  vpn: (project: string) => `Para ${project}, la demo recomienda abrir el cliente VPN corporativo, iniciar sesión con tu cuenta de trabajo y verificar que el estado aparezca como “Conectado”. Si el acceso falla, utiliza el canal oficial de soporte de tu organización. Esta respuesta usa datos ficticios.`,
  password: (project: string) => `Si cambiaste la contraseña fuera de la oficina, ${project} puede requerir volver a autenticar tus herramientas corporativas. Cierra las sesiones antiguas, inicia sesión de nuevo con la contraseña actual y, si persiste el problema, solicita una resincronización al equipo de IT. Esta demo no contiene procedimientos internos reales.`,
  access: (project: string) => `Para solicitar acceso en ${project}, identifica la aplicación y el nivel de permiso que necesitas y envía la solicitud por el flujo de acceso aprobado por tu organización. Un responsable puede tener que validarla. En esta demo todos los nombres y procesos son ficticios.`,
  default: (project: string) => `Puedo ayudarte con soporte IT, onboarding, accesos y conectividad para ${project}. Esta versión pública funciona con información completamente ficticia y respuestas simuladas para demostrar la experiencia de producto sin exponer datos empresariales.`,
};

const enAnswers = {
  vpn: (project: string) => `For ${project}, the demo recommends opening your corporate VPN client, signing in with your work account, and confirming the status shows “Connected”. If access still fails, use your organization’s official IT support channel. This answer uses fictional data.`,
  password: (project: string) => `If you changed your password while away from the office, ${project} may require you to re-authenticate corporate tools. Sign out of old sessions, sign back in with the current password, and contact IT if your account needs to be resynchronized. This demo contains no real internal procedures.`,
  access: (project: string) => `To request access in ${project}, identify the application and permission level you need, then use your organization’s approved access-request workflow. Manager approval may be required. All names and processes in this demo are fictional.`,
  default: (project: string) => `I can help with IT support, onboarding, access, and connectivity for ${project}. This public version uses fully fictional information and simulated answers to demonstrate the product experience without exposing company data.`,
};

export function getDemoAnswer(message: string, project: string) {
  const text = message.toLowerCase();
  const isEnglish = /\b(the|how|what|work|password|vpn|access|need|from|home|connect)\b/.test(text) && !/[¿¡áéíóúñ]/i.test(message);
  const answers = isEnglish ? enAnswers : esAnswers;

  if (/vpn|connect|conectar|remot|casa|home/.test(text)) return answers.vpn(project);
  if (/password|contrase|clave|credential|credencial/.test(text)) return answers.password(project);
  if (/access|acceso|permission|permiso|herramienta|tool/.test(text)) return answers.access(project);
  return answers.default(project);
}
