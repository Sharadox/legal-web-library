import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { ComplaintsBookLink } from "@sharadox/legal-web-library/complaints-book-link";

test("links the complaints book in a new tab, named in each language", () => {
  render(<ComplaintsBookLink locale="en" className="link" />);
  const link = screen.getByRole("link", { name: "Livro de Reclamações (Complaints Book)" });
  expect(link.getAttribute("href")).toBe("https://www.livroreclamacoes.pt/");
  expect(link.getAttribute("target")).toBe("_blank");
  expect(link.className).toBe("link");
  render(<ComplaintsBookLink locale="pt" />);
  expect(screen.getByRole("link", { name: "Livro de Reclamações" })).toBeTruthy();
});
