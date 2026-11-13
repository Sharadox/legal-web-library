# @sharadox/legal-web-library

What a website in Portugal must show by law, written once for every site:

| Import                     | What it is                                                                                                                                                                        | Law                                           |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| `…/complaints-book`        | `COMPLAINTS_BOOK`: the electronic complaints book's address and name                                                                                                              | Decreto-Lei 156/2005 (Decreto-Lei 74/2017)    |
| `…/complaints-book-link`   | `<ComplaintsBookLink locale className? />`: the link to it, in a new tab                                                                                                          | the same                                      |
| `…/dispute-resolution`     | `DISPUTE_RESOLUTION_CENTERS` (`algarve`: CIMAAL; `national`: CNIACC, for regions without their own) and `CONSUMER_PORTAL`                                                         | Lei 144/2015, article 18                      |
| `…/dispute-notice`         | `<DisputeNotice center locale />`: "In case of a consumer dispute, you can turn to…", the center and the consumer portal, as text and links; `DISPUTE_NOTICE`, its words          | the same                                      |
| `…/company-identification` | `<CompanyIdentification company={{ office, number, shareCapital? }} locale />`: registered office, registration number and share capital; `formatEuros`, `COMPANY_IDENTIFICATION` | Código das Sociedades Comerciais, article 171 |

Texts come in English and Portuguese (`LegalLocale`, `"en" | "pt"`). The components are unstyled text and links, so they sit in any paragraph of any design:

```tsx
import { ComplaintsBookLink } from "@sharadox/legal-web-library/complaints-book-link";
import { DisputeNotice } from "@sharadox/legal-web-library/dispute-notice";
import { DISPUTE_RESOLUTION_CENTERS } from "@sharadox/legal-web-library/dispute-resolution";

<ComplaintsBookLink locale="pt" className={styles.link} />
<p><DisputeNotice center={DISPUTE_RESOLUTION_CENTERS.algarve} locale="pt" /></p>
```

The European online dispute resolution platform closed in July 2025, so sites no longer link to it.

## Develop

`pnpm verify` runs formatting, lint, type-check, tests with 100% coverage and the build. Branches follow `<feature>.development` → `development` → `index`, and releases are `v<version>` tags on `index`.

## License

Licença Sharadox de Código Aberto, versão 0.1.0. See [português](LICENCA.md) (the binding text) and the [English translation](LICENSE.md).
