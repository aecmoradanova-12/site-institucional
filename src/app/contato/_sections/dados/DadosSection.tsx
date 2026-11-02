import { Section } from "@/src/components/shared/Section";

interface DataItem {
  id: string | number;
  value: string;
  label: string;
  colorClass: string; 
}

const FORM_SECTION_DATA: DataItem[] = [
  {
    id: "atletas",
    value: "80+",
    label: "ATLETAS ATENDIDOS",
    colorClass: "text-brand",
  },
  {
    id: "historia",
    value: "14",
    label: "ANOS DE HISTÓRIA",
    colorClass: "text-secondary",
  },
  {
    id: "categorias",
    value: "06",
    label: "CATEGORIAS DE BASE",
    colorClass: "text-brand",
  },
];

export function DadosSection() {
  return (
    <Section>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {FORM_SECTION_DATA.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-center border-3 p-6 gap-4 rounded-xl transition-all duration-300 hover:border-brand hover:shadow-xl cursor-pointer"
          >
            <h2 className={`${item.colorClass} font-bold text-5xl`}>
              {item.value}
            </h2>
            <p className="font-semibold text-sm">{item.label}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}