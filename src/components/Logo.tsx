interface LogoProps {
  className?: string;
}

export const Logo = ({ className = "" }: LogoProps) => (
  <span className={`font-display font-extrabold tracking-tighter inline-flex items-baseline ${className}`}>
    PERCE<span className="text-primary">TT</span>ORE
  </span>
);
