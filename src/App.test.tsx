import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from './App';

describe("App", () => {
    it("renders Header and Main headings ", () => {
        render(<App />);
        expect(screen.getByText("Web Job Application")).toBeInTheDocument();
        expect(screen.getByText("Applicant infos and skills")).toBeInTheDocument();
    });

    it('renders fullname input element', () => {
        render(<App />);        
        const fullnamebox = screen.getByRole('fullnamebox');
        userEvent.type(fullnamebox, 'Andy Well');
        expect(fullnamebox).toBeVisible();
    });

    it('renders email input element', () => {
        render(<App />);        
        const emailbox = screen.getByRole('emailbox');
        userEvent.type(emailbox, 'andywell@job.com');
        expect(emailbox).toBeInTheDocument();
    });

    it('renders gender label text', () => {
        render(<App />);
        expect(screen.getByText("Select Gender")).toBeInTheDocument();
    });

    it("renders select label text", () => {
      render(<App />);
      const fieldSelect = screen.getByText("Select Field of Interest");
      expect(fieldSelect).toBeVisible();
    });

    it('renders checkboxes text', () => {
        render(<App />);
        expect(screen.getByText("HTML5")).toBeInTheDocument();
        expect(screen.getByText("CSS3")).toBeVisible();
        expect(screen.getByText("JavaScript")).toBeInTheDocument();
        expect(screen.getByText("React")).toBeVisible();
        expect(screen.getByText("Node.js")).toBeInTheDocument();
        expect(screen.getByText("SQL")).toBeVisible();
    });

    it('renders button element', () => {
        render(<App />);        
        const button = screen.getByRole('button'); 
        expect(button).toHaveTextContent('Submit');
    });
});