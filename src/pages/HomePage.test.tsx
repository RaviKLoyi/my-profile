import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { HomePage } from "./HomePage";

describe("HomePage", () => {
  it("renders the hero name", () => {
    render(<HomePage />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent(/Ravi/);
    expect(heading).toHaveTextContent(/Kumar/);
    expect(heading).toHaveTextContent(/Loyi/);
  });

  it("renders all section headings", () => {
    render(<HomePage />);
    expect(
      screen.getByRole("heading", { name: "About Me" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "What I Work With" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Things I've Built" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Let's build something together" }),
    ).toBeInTheDocument();
  });

  it("renders skill items", () => {
    render(<HomePage />);
    expect(screen.getAllByText("React").length).toBeGreaterThan(0);
    expect(screen.getAllByText("PostgreSQL").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Docker").length).toBeGreaterThan(0);
  });

  it("renders project cards", () => {
    render(<HomePage />);
    expect(screen.getByText("DevFlow")).toBeInTheDocument();
    expect(screen.getByText("ShopSphere")).toBeInTheDocument();
    expect(screen.getByText("PulseAPI")).toBeInTheDocument();
  });
});
