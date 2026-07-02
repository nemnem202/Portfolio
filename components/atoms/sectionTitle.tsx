import { ReactNode } from "react";

export default function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h1 className="text-[15rem]/[9rem] SectionTitle bold opacity-10 hidden md:block">{children}</h1>
  );
}
