import type { LegalLocale } from "@sharadox/legal-web-library/legal-locale/type";

/** What Portuguese company law asks a company to show (Código das Sociedades Comerciais, article 171). */
export interface Company {
  /** The registered office ("sede"), as in the commercial registry. */
  office: string;
  /** The single registration and tax number ("número único de matrícula e de pessoa coletiva"). */
  number: string;
  /** Share capital in euros; companies without one (sole traders) leave it out. */
  shareCapital?: number;
}

export interface CompanyIdentificationProperties {
  company: Company;
  locale: LegalLocale;
}
