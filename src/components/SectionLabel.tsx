interface Props {
  index?: string;
  children: React.ReactNode;
  className?: string;
}

export const SectionLabel = ({ index, children, className = "" }: Props) => (
  <div className={`inline-flex items-center gap-3 font-sans text-[11px] md:text-xs font-semibold uppercase tracking-[0.28em] text-concrete-500 ${className}`}>
    {index && <span className="text-primary font-bold">[{index}]</span>}
    <span>{children}</span>
  </div>
);
