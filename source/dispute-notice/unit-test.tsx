import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { DisputeNotice } from "@sharadox/legal-web-library/dispute-notice";
import { DISPUTE_RESOLUTION_CENTERS } from "@sharadox/legal-web-library/dispute-resolution";

test("names the center and the consumer portal, with their links", () => {
  const { container } = render(
    <p>
      <DisputeNotice center={DISPUTE_RESOLUTION_CENTERS.algarve} locale="en" />
    </p>,
  );
  expect(container.textContent).toMatch(
    /^In case of a consumer dispute, .* center CIMAAL – .*Algarve\. More information at consumidor\.gov\.pt\.$/,
  );
  expect(screen.getByRole("link", { name: /CIMAAL/ }).getAttribute("href")).toBe("https://www.consumoalgarve.pt/");
  expect(screen.getByRole("link", { name: "consumidor.gov.pt" }).getAttribute("href")).toBe(
    "https://www.consumidor.gov.pt/",
  );
});

test("speaks Portuguese, and the national center is there for regions without one", () => {
  const { container } = render(<DisputeNotice center={DISPUTE_RESOLUTION_CENTERS.national} locale="pt" />);
  expect(container.textContent).toContain("Em caso de litígio de consumo");
  expect(screen.getByRole("link", { name: /CNIACC/ }).getAttribute("href")).toBe("https://www.cniacc.pt/");
});
