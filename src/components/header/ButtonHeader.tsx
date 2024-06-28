import { ButtonHeaderProps } from "@/types/buttonHeaderProps";

export default function ButtonHeader({text, className, handleClick} : ButtonHeaderProps) {
  return (
    <button onClick={handleClick} className={`border-[2px] py-1 px-6 rounded-lg text-xl font-bold hover:transition-all hover:scale-105 ${className}`}>
      {text}
    </button>
  );
}
