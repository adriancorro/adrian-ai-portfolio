# Adrián Corro — AI Portfolio

Portfolio profesional construido con Next.js para mostrar proyectos de IA, herramientas internas y automatización.

## Proyecto destacado: Gaudí

Gaudí nació de un caso de uso empresarial real. **La demo incluida en este repositorio es deliberadamente ficticia y sanitizada**. No contiene nombres reales de clientes, dominios, VPNs, usernames, credenciales, documentación interna, logs ni procedimientos exactos de la empresa.

La demo pública es una simulación local: no llama a APIs privadas ni necesita claves de OpenAI.

## Stack

- Next.js 16
- React 19
- TypeScript
- CSS nativo
- App Router

## Ejecutar localmente

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`.

## Antes de publicar

1. Edita `lib/site.ts` y añade tu LinkedIn/email si quieres mostrarlos.
2. Si “Gaudí” es un nombre interno protegido por tu empresa, renombra la demo antes de publicarla.
3. Confirma que la política interna/NDA permite mencionar el proyecto incluso de forma anonimizada.
4. Edita `app/sitemap.ts` y cambia `https://example.com` por tu dominio final.
5. Revisa cualquier texto que quieras adaptar a ofertas concretas.
6. No copies datos ni procedimientos del Gaudí interno a este repositorio público.

## Subir a GitHub

```bash
git init
git add .
git commit -m "Initial AI portfolio"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/TU-REPO.git
git push -u origin main
```

## Deploy en Vercel

Importa el repositorio desde Vercel. Este proyecto no necesita variables de entorno para funcionar.

## Seguridad de la demo

La demo está pensada como **portfolio-safe**. Si en el futuro conectas un modelo real:

- Mantén las API keys solo en variables de entorno del servidor.
- No envíes secretos al navegador.
- Usa una base de conocimiento creada específicamente para la demo.
- No reutilices documentación interna sin autorización expresa.
- Registra únicamente datos que puedas almacenar legalmente y con el consentimiento apropiado.
