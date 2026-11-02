"use client";
import { useEffect, useState } from "react";

export function NomeObrigado() {
  const [nome, setNome] = useState("");
  useEffect(() => {
    try {
      setNome(sessionStorage.getItem("contatoNome") ?? "");
      sessionStorage.removeItem("contatoNome");
    } catch {}
  }, []);
  return <>{nome ? `Obrigado, ${nome}! ` : "Obrigado! "}</>;
}
