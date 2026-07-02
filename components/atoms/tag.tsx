import { ReactNode } from "react";

export default function Tag({
  children,
  color = "primary",
  className = "",
}: {
  children: ReactNode;
  color?: string;
  className?: string;
}) {
  return (
    <div
      className={`border-${color} shadow-md shadow-primary/40 border-2 rounded-sm py-1 px-1.5 hover:bg-${color} ${className}`}
    >
      {children}
    </div>
  );
}
