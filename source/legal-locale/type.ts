/** The languages the legal texts come in. */
export type LegalLocale = "en" | "pt";

/** A text in every legal locale. */
export type LegalText = Readonly<Record<LegalLocale, string>>;
