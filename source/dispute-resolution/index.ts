import type { DisputeResolutionCenter } from "@sharadox/legal-web-library/dispute-resolution/type";

/**
 * The consumer dispute resolution centers a business names on its website (Lei 144/2015, article 18): the one for
 * its region, or the national one where no regional center covers it.
 */
export const DISPUTE_RESOLUTION_CENTERS = {
  algarve: {
    name: "CIMAAL – Centro de Informação, Mediação e Arbitragem de Conflitos de Consumo do Algarve",
    url: "https://www.consumoalgarve.pt/",
  },
  national: {
    name: "CNIACC – Centro Nacional de Informação e Arbitragem de Conflitos de Consumo",
    url: "https://www.cniacc.pt/",
  },
} as const satisfies Record<string, DisputeResolutionCenter>;

/** Portugal's consumer portal, which lists every center. */
export const CONSUMER_PORTAL = { name: "consumidor.gov.pt", url: "https://www.consumidor.gov.pt/" } as const;
