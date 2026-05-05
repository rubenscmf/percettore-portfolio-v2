interface Props {
  index?: string;
  children: React.ReactNode;
  className?: string;
}

export const SectionLabel = ({ index, children, className = "" }: Props) => (
  <div className={`flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-concrete-500 ${className}`}>
    {index && <span className="text-primary">[{index}]</span>}
    <span>{children}</span>
  </div>
);
