import { ReactNode } from "react";

interface InfoSectionProps {
  children: ReactNode;
  title?: string;
  className?: ReactNode;
}

export function InfoSection({
  children = null,
  title = "Default Title",
  className,
}: InfoSectionProps) {
  return (
    <div className={`border-t border-gray-lighter mt-4 pt-4 ${className}`}>
      <h3 className="font-semibold mb-2">{title}</h3>
      {children}
    </div>
  );
}
