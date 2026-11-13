import type { DisputeResolutionCenter } from "@sharadox/legal-web-library/dispute-resolution/type";
import type { LegalLocale } from "@sharadox/legal-web-library/legal-locale/type";

export interface DisputeNoticeProperties {
  /** The business's center, from `DISPUTE_RESOLUTION_CENTERS`. */
  center: DisputeResolutionCenter;
  locale: LegalLocale;
}
