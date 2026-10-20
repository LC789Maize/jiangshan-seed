import { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  action,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  action?: ReactNode;
}) {
  const isCenter = align === "center";
  return (
    <div
      className={`flex flex-col gap-5 ${
        isCenter ? "items-center text-center" : "md:flex-row md:items-end md:justify-between"
      }`}
    >
      <div className={isCenter ? "max-w-2xl" : "max-w-2xl"}>
        {eyebrow && (
          <p className="eyebrow">
            <span className="h-px w-6 bg-wheat-400" aria-hidden="true" />
            {eyebrow}
          </p>
        )}
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink sm:text-3xl lg:text-[2.1rem]">
          {title}
        </h2>
        {description && (
          <p className="mt-3 text-sm leading-7 text-ink/60 sm:text-base">{description}</p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
