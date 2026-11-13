import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import { SEPARATOR } from "@sharadox/web-library/text/separator";
import { CompanyIdentification, formatEuros } from "@sharadox/legal-web-library/company-identification";

const COMPANY = { office: "Rua Um 1, 8100-000 Loulé", number: "513385207", shareCapital: 1000 };

test("shows the office, the registration number and the share capital", () => {
  const { container } = render(<CompanyIdentification company={COMPANY} locale="en" />);
  expect(container.textContent).toBe(
    `Registered office: Rua Um 1, 8100-000 Loulé.Registered at the Portuguese Commercial Registry under the single registration and tax number 513385207 ${SEPARATOR} Share capital €1,000.00.`,
  );
  expect(container.querySelector("br")).toBeTruthy();
});

test("in Portuguese, and without share capital when there is none", () => {
  const { container } = render(<CompanyIdentification company={{ office: "Loulé", number: "123" }} locale="pt" />);
  expect(container.textContent).toBe(
    "Sede: Loulé.Matriculada no Registo Comercial sob o número único de matrícula e de pessoa coletiva 123.",
  );
});

test("writes euros the way each language does", () => {
  expect(formatEuros(1000, "en")).toBe("€1,000.00");
  expect(formatEuros(1000, "pt").replace(/\s/g, " ")).toBe("1000,00 €");
});
