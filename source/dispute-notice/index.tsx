import { CONSUMER_PORTAL } from "@sharadox/legal-web-library/dispute-resolution";
import type { DisputeNoticeProperties } from "@sharadox/legal-web-library/dispute-notice/type";

/** The notice's words around the two links. */
export const DISPUTE_NOTICE = {
  lead: {
    en: "In case of a consumer dispute, you can turn to the alternative dispute resolution center",
    pt: "Em caso de litígio de consumo, pode recorrer à entidade de resolução alternativa de litígios",
  },
  more: { en: "More information at", pt: "Mais informações em" },
} as const;

/**
 * The consumer dispute notice (Lei 144/2015, article 18): the center's name and website, then the consumer portal.
 * Text and links only, so it sits in any paragraph.
 *
 * @example
 * <p><DisputeNotice center={DISPUTE_RESOLUTION_CENTERS.algarve} locale="pt" /></p>
 */
export function DisputeNotice({ center, locale }: DisputeNoticeProperties) {
  return (
    <>
      {DISPUTE_NOTICE.lead[locale]}{" "}
      <a href={center.url} target="_blank" rel="noopener noreferrer">
        {center.name}
      </a>
      . {DISPUTE_NOTICE.more[locale]}{" "}
      <a href={CONSUMER_PORTAL.url} target="_blank" rel="noopener noreferrer">
        {CONSUMER_PORTAL.name}
      </a>
      .
    </>
  );
}
