import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { ContactForm } from "./ContactForm";

describe("ContactForm", () => {
  it("shows an error when submitting empty", async () => {
    render(<ContactForm />);
    await userEvent.click(screen.getByRole("button", { name: /send message/i }));
    expect(
      await screen.findByText("Please fill in all fields."),
    ).toBeInTheDocument();
  });

  it("shows an error for invalid email", async () => {
    render(<ContactForm />);
    await userEvent.type(screen.getByLabelText(/your name/i), "Ada");
    await userEvent.type(screen.getByLabelText(/your email/i), "not-an-email");
    await userEvent.type(screen.getByLabelText(/your message/i), "Hello");
    await userEvent.click(screen.getByRole("button", { name: /send message/i }));
    expect(
      await screen.findByText("Please enter a valid email address."),
    ).toBeInTheDocument();
  });

  it("shows success for a valid submission", async () => {
    render(<ContactForm />);
    await userEvent.type(screen.getByLabelText(/your name/i), "Ada");
    await userEvent.type(screen.getByLabelText(/your email/i), "ada@example.com");
    await userEvent.type(screen.getByLabelText(/your message/i), "Hello!");
    await userEvent.click(screen.getByRole("button", { name: /send message/i }));
    expect(
      await screen.findByText(/message sent/i, {}, { timeout: 3000 }),
    ).toBeInTheDocument();
  });
});
