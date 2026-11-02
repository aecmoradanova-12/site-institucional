"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Send } from "lucide-react";

const campo =
  "bg-transparent border-b border-border py-2 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-brand transition-colors";
const rotulo = "text-xs font-bold uppercase tracking-wider text-muted-foreground";

export function FormularioContato() {
  const router = useRouter();
  const [enviando, setEnviando] = useState(false);
  const [erro, setErro] = useState("");

  async function aoEnviar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErro("");
    setEnviando(true);
    const form = e.currentTarget;
    const dados = Object.fromEntries(new FormData(form).entries());
    try {
      const r = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados),
      });
      const json = await r.json().catch(() => ({}));
      if (!r.ok) throw new Error(json.erro || "Não foi possível enviar. Tente novamente.");
      const primeiroNome = String(dados.nome || "").split(" ")[0];
      try { sessionStorage.setItem("contatoNome", primeiroNome.slice(0, 40)); } catch {}
      router.push("/contato/enviado");
    } catch (err) {
      setErro(err instanceof Error ? err.message : "Não foi possível enviar. Tente novamente.");
      setEnviando(false);
    }
  }

  return (
    <form onSubmit={aoEnviar} className="flex flex-col gap-6">
      {/* armadilha para robôs: invisível para pessoas */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="nome" className={rotulo}>Nome do responsável</label>
          <input id="nome" name="nome" type="text" required maxLength={120} placeholder="Ex: João Silva" className={campo} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="empresa" className={rotulo}>Nome da empresa</label>
          <input id="empresa" name="empresa" type="text" required maxLength={120} placeholder="Empresa LTDA" className={campo} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className={rotulo}>E-mail corporativo</label>
          <input id="email" name="email" type="email" required maxLength={160} placeholder="contato@empresa.com" className={campo} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="telefone" className={rotulo}>Telefone/WhatsApp</label>
          <input id="telefone" name="telefone" type="tel" required maxLength={40} placeholder="(00) 00000-0000" className={campo} />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="interesse" className={rotulo}>Interesse de patrocínio</label>
        <select id="interesse" name="interesse" className={`${campo} cursor-pointer`}>
          <option value="Uniforme de jogo">Uniforme de jogo</option>
          <option value="Apoio em eventos">Apoio em eventos</option>
          <option value="Material esportivo">Material esportivo</option>
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="mensagem" className={rotulo}>Mensagem (opcional)</label>
        <textarea id="mensagem" name="mensagem" rows={3} maxLength={2000} placeholder="Como você gostaria de ajudar a A.E.C.?" className={`${campo} resize-none`} />
      </div>

      {erro && (
        <p role="alert" className="border-l-4 border-red-600 bg-red-50 text-red-800 px-4 py-3 text-sm">
          {erro}
        </p>
      )}

      <button
        type="submit"
        disabled={enviando}
        className="mt-2 w-full bg-brand text-brand-foreground py-4 px-6 font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-brand/90 transition-colors disabled:opacity-60 disabled:cursor-wait cursor-pointer"
      >
        <span>{enviando ? "Enviando..." : "Enviar proposta de parceria"}</span>
        <Send className="w-4 h-4" aria-hidden="true" />
      </button>
    </form>
  );
}
