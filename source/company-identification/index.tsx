import { SEPARATOR } from "@sharadox/web-library/text/separator";
import type { CompanyIdentificationProperties } from "@sharadox/legal-web-library/company-identification/type";
import type { LegalLocale } from "@sharadox/legal-web-library/legal-locale/type";

/** The identification's labels. */
export const COMPANY_IDENTIFICATION = {
  office: { en: "Registered office", pt: "Sede" },
  number: {
    en: "Registered at the Portuguese Commercial Registry under the single registration and tax number",
    pt: "Matriculada no Registo Comercial sob o número único de matrícula e de pessoa coletiva",
  },
  shareCapital: { en: "Share capital", pt: "Capital social" },
} as const;

/** An amount in euros, written the way the language writes it ("€1,000.00", "1000,00 €"). */
export function formatEuros(amount: number, locale: LegalLocale): string {
  return new Intl.NumberFormat(locale === "pt" ? "pt-PT" : "en-US", { style: "currency", currency: "EUR" }).format(
    amount,
  );
}

/**
 * The company identification: registered office, then registration number and share capital. Text only, so it sits
 * in any paragraph.
 *
 * @example
 * <p><CompanyIdentification company={{ office: "…", number: "513385207", shareCapital: 1000 }} locale="en" /></p>
 */
export function CompanyIdentification({ company, locale }: CompanyIdentificationProperties) {
  return (
    <>
      {COMPANY_IDENTIFICATION.office[locale]}: {company.office}.
      <br />
      {COMPANY_IDENTIFICATION.number[locale]} {company.number}
      {company.shareCapital === undefined
        ? ""
        : ` ${SEPARATOR} ${COMPANY_IDENTIFICATION.shareCapital[locale]} ${formatEuros(company.shareCapital, locale)}`}
      .
    </>
  );
}
