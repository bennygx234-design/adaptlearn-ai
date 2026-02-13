"use client";

import { useState } from "react";
import { Button } from "@/components/ui";
import { Brain, Menu, X } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <nav className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-[rgba(139,92,246,0.15)]">
            <Brain size={20} className="text-purple-400" />
          </div>
          <span className="text-lg font-semibold text-foreground">
            AdaptLearn
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="#features"
            className="text-sm text-grey-400 hover:text-foreground transition-colors"
          >
            Features
          </a>
          <a
            href="#courses"
            className="text-sm text-grey-400 hover:text-foreground transition-colors"
          >
            Courses
          </a>
          <a
            href="#stats"
            className="text-sm text-grey-400 hover:text-foreground transition-colors"
          >
            Results
          </a>
          <a
            href="#pricing"
            className="text-sm text-grey-400 hover:text-foreground transition-colors"
          >
            Pricing
          </a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm">
            Log in
          </Button>
          <Button variant="primary" size="sm">
            Get Started
          </Button>
        </div>

        <button
          className="md:hidden text-grey-400 hover:text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden glass-strong border-t border-grey-800">
          <div className="container flex flex-col gap-4 py-6">
            <a
              href="#features"
              className="text-sm text-grey-400 hover:text-foreground transition-colors"
            >
              Features
            </a>
            <a
              href="#courses"
              className="text-sm text-grey-400 hover:text-foreground transition-colors"
            >
              Courses
            </a>
            <a
              href="#stats"
              className="text-sm text-grey-400 hover:text-foreground transition-colors"
            >
              Results
            </a>
            <a
              href="#pricing"
              className="text-sm text-grey-400 hover:text-foreground transition-colors"
            >
              Pricing
            </a>
            <div className="flex flex-col gap-3 pt-4 border-t border-grey-800">
              <Button variant="ghost" size="sm" fullWidth>
                Log in
              </Button>
              <Button variant="primary" size="sm" fullWidth>
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
