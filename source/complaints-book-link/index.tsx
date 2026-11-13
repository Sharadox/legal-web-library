import { COMPLAINTS_BOOK } from "@sharadox/legal-web-library/complaints-book";
import type { ComplaintsBookLinkProperties } from "@sharadox/legal-web-library/complaints-book-link/type";

/** The link to Portugal's electronic complaints book, opening in a new tab. Unstyled: style it through `className`. */
export function ComplaintsBookLink({ locale, className }: ComplaintsBookLinkProperties) {
  return (
    <a href={COMPLAINTS_BOOK.url} target="_blank" rel="noopener noreferrer" className={className}>
      {COMPLAINTS_BOOK.name[locale]}
    </a>
  );
}
