import type { FooterLink } from "@/data/footerLinks";

type FooterLinkGroupProps = {
  group: {
    title: string;
    links: FooterLink[];
  };
};

export function FooterLinkGroup({ group }: FooterLinkGroupProps) {
  return (
    <div className="flex min-w-34 flex-col gap-4">
      <h3 className="font-heading text-[clamp(1.25rem,2vw,1.65rem)] font-black uppercase leading-none tracking-[-0.055em] text-[#fff6df]!">
        {group.title}
      </h3>
      <ul className="flex flex-col gap-2.5">
        {group.links.map((link, idx) => (
          <li key={idx}>
            {link.status === "soon" ? (
              <span
                className="inline-flex items-center gap-2 text-[12px] font-semibold leading-snug text-[#f1ead4]/54"
                aria-disabled="true"
                title="Segera Hadir"
              >
                {link.label}
                <span className="rounded-full border border-[#adff6b]/12 bg-[#adff6b]/12 px-1.5 py-0.5 text-[8px] font-black uppercase tracking-wider text-[#d6ff9b]">
                  Soon
                </span>
              </span>
            ) : (
              <a
                href={link.href}
                className="inline-flex text-[12px] font-semibold leading-snug text-[#f1ead4]/76 transition hover:translate-x-0.5 hover:text-[#f4d88a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f4d88a]"
              >
                {link.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
