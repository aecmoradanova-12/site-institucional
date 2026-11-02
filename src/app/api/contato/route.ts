import { NextResponse } from "next/server";

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export async function POST(req: Request) {
  let d: Record<string, unknown>;
  try {
    d = await req.json();
  } catch {
    return NextResponse.json({ erro: "Requisição inválida." }, { status: 400 });
  }

  // campo escondido: se vier preenchido, é robô. Responde ok sem enviar.
  if (typeof d.website === "string" && d.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const txt = (k: string, max: number) => (typeof d[k] === "string" ? (d[k] as string).trim().slice(0, max) : "");
  const nome = txt("nome", 120);
  const empresa = txt("empresa", 120);
  const email = txt("email", 160);
  const telefone = txt("telefone", 40);
  const interesse = txt("interesse", 40);
  const mensagem = txt("mensagem", 2000);

  if (!nome || !empresa || !email || !telefone) {
    return NextResponse.json({ erro: "Preencha todos os campos obrigatórios." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ erro: "Informe um e-mail válido." }, { status: 400 });
  }

  const chave = process.env.RESEND_API_KEY;
  const destino = process.env.CONTATO_DESTINO;
  if (!chave || !destino) {
    console.error("Faltam RESEND_API_KEY ou CONTATO_DESTINO no .env.local");
    return NextResponse.json({ erro: "O envio de e-mail ainda não foi configurado." }, { status: 500 });
  }

  const html = `
    <h2>Nova proposta de parceria</h2>
    <p><b>Responsável:</b> ${esc(nome)}</p>
    <p><b>Empresa:</b> ${esc(empresa)}</p>
    <p><b>E-mail:</b> ${esc(email)}</p>
    <p><b>Telefone/WhatsApp:</b> ${esc(telefone)}</p>
    <p><b>Interesse:</b> ${esc(interesse)}</p>
    <p><b>Mensagem:</b><br>${esc(mensagem).replace(/\n/g, "<br>") || "(sem mensagem)"}</p>`;

  const r = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${chave}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTATO_REMETENTE || "Site Morada Nova <onboarding@resend.dev>",
      to: [destino],
      reply_to: email,
      subject: `Parceria: ${empresa} (${nome})`,
      html,
    }),
  });

  if (!r.ok) {
    console.error("Resend:", r.status, await r.text());
    return NextResponse.json({ erro: "Não foi possível enviar agora. Tente novamente em instantes." }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
