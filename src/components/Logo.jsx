import MudanurLogo from "../images/Mudanur Logo.png";

export default function Logo({ compact = false }) {
  const sizeClass = compact ? "h-14 sm:h-16 lg:h-20" : "h-16 sm:h-20";

  return (
    <a
      href="#home"
      className="flex min-w-0 items-center gap-3 no-underline"
      aria-label="Mudanur Hospital - Home"
    >
      <img
        src={MudanurLogo}
        alt="Mudanur Hospital logo"
        className={`${sizeClass} w-auto max-w-[210px] object-contain sm:max-w-[260px]`}
      />
    </a>
  );
}
