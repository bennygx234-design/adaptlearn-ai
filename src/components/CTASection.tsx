import { Button } from "@/components/ui";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="relative rounded-2xl overflow-hidden p-12 md:p-16">
          {/* Background */}
          <div
            className="absolute inset-0 -z-10"
            style={{
              background:
                "linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(139, 92, 246, 0.05) 100%)",
            }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 -z-10 border border-[rgba(139,92,246,0.2)] rounded-2xl"
            aria-hidden="true"
          />

          <div className="flex flex-col items-center text-center gap-6 max-w-2xl mx-auto">
            <h2 className="heading-lg text-foreground text-balance">
              Ready to transform how you learn?
            </h2>
            <p className="body-lg text-grey-400 text-pretty">
              Join thousands of learners who are already experiencing the power
              of AI-adaptive education. Start your journey today -- it is
              completely free.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button
                variant="primary"
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
              >
                Get Started Free
              </Button>
              <Button variant="secondary" size="lg">
                Schedule a Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
