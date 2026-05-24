type ArchitectureFlowProps = {
  ascii?: string;
  steps: string[];
};

export function ArchitectureFlow({ ascii, steps }: ArchitectureFlowProps) {
  const hasAscii = Boolean(ascii && ascii.length > 0);
  const hasSteps = steps.length > 0;

  if (!hasAscii && !hasSteps) return null;

  return (
    <>
      {hasSteps ? (
        <ol
          className={`surface-panel space-y-3 rounded-[1.8rem] p-5 sm:p-6 ${
            hasAscii ? "md:hidden" : ""
          }`}
        >
          {steps.map((step, idx) => (
            <li key={step} className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] text-[0.66rem] font-semibold text-white/70">
                {idx + 1}
              </span>
              <span className="text-[0.94rem] leading-7 text-white/76">{step}</span>
            </li>
          ))}
        </ol>
      ) : null}

      {hasAscii ? (
        <pre
          className={`surface-panel overflow-x-auto whitespace-pre rounded-[1.8rem] p-6 font-mono text-[0.86rem] leading-7 text-white/72 md:p-7 ${
            hasSteps ? "hidden md:block" : ""
          }`}
        >
          {ascii}
        </pre>
      ) : null}
    </>
  );
}
