export default function Button({
  as = "a",
  variant = "primary",
  size = "md",
  className = "",
  children,
  disabled = false,
  ...rest
}) {
  const Tag = as;

  const base =
    "sheen inline-flex items-center justify-center gap-2 rounded-xl font-semibold whitespace-nowrap transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue/50 active:scale-[0.97] disabled:pointer-events-none disabled:opacity-60";

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-6 py-3 text-base",
  };

  const variants = {
    primary:
      "bg-brand-blue text-white shadow-md hover:bg-brand-blueDark hover:shadow-glow hover:-translate-y-0.5",

    secondary:
      "bg-white text-brand-ink border border-brand-line shadow-sm hover:border-brand-blue hover:text-brand-blue hover:shadow-md hover:-translate-y-0.5",

    ghost:
      "bg-transparent text-white border border-white/30 hover:bg-white/10 hover:border-white/60 hover:-translate-y-0.5",

    teal:
      "bg-brand-teal text-white shadow-md hover:bg-emerald-600 hover:shadow-glow hover:-translate-y-0.5",
  };

  return (
    <Tag
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      disabled={disabled}
      {...rest}
    >
      {children}
    </Tag>
  );
}
