"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CopyButtonProps {
  textToCopy: string;
  className?: string;
}

export function CopyButton({ textToCopy, className = "" }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Falha ao copiar texto: ", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-brand text-brand-foreground hover:bg-brand/90 transition-all active:scale-95 ${className}`}
      title="Copiar para a área de transferência"
    >
      {copied ? (
        <>
          <Check className="w-4 h-4 text-green-400" />
          <span>Copiado!</span>
        </>
      ) : (
        <>
          <Copy className="w-4 h-4" />
          <span>Copiar</span>
        </>
      )}
    </button>
  );
}