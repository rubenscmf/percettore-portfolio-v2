interface Props {
  index?: string;
  children: React.ReactNode;
  className?: string;
}

export const SectionLabel = ({ index, children, className = "" }: Props) => (
  <div className={`flex items-center gap-3 font-sans text-xs font-semibold uppercase tracking-wider text-concrete-500 ${className}`}>
    {index && <span className="text-primary font-bold">[{index}]</span>}
    <span>{children}</span>
  </div>
);
