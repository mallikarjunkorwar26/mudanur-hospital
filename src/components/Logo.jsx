import MudanurLogo from "../images/Mudanur Logo.png";

export default function Logo({ compact = false }) {
  const sizeClass = compact ? "h-12 sm:h-14 lg:h-16" : "h-14 sm:h-16";

  return (
    <a
      href="#home"
      className="flex min-w-0 items-center gap-3 no-underline"
      aria-label="Mudanur Hospital - Home"
    >
      <img
        src={MudanurLogo}
        alt="Mudanur Hospital logo"
        className={`${sizeClass} w-auto max-w-[180px] object-contain sm:max-w-[220px]`}
      />
    </a>
  );
}
