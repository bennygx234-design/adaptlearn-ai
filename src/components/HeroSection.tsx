import { Button, Badge } from "@/components/ui";
import { ArrowRight, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen pt-24 pb-16 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(139, 92, 246, 0.3) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="container relative z-10 flex flex-col items-center text-center gap-8">
        <Badge variant="primary" size="md">
          <Sparkles size={14} className="mr-1.5" />
          AI-Powered Adaptive Learning
        </Badge>

        <h1 className="heading-xl text-gradient-hero max-w-3xl text-balance">
          Learn smarter, not harder with AI that adapts to you
        </h1>

        <p className="body-lg text-grey-400 max-w-2xl text-pretty">
          AdaptLearn uses advanced AI to personalize your learning path,
          identify knowledge gaps, and deliver content at exactly the right
          pace for you.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Button variant="primary" size="lg" icon={ArrowRight} iconPosition="right">
            Start Learning Free
          </Button>
          <Button variant="secondary" size="lg">
            Explore Courses
          </Button>
        </div>

        <div className="flex items-center gap-8 pt-8">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-foreground">50K+</span>
            <span className="caption">Active Learners</span>
          </div>
          <div className="w-px h-10 bg-grey-700" aria-hidden="true" />
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-foreground">200+</span>
            <span className="caption">AI Courses</span>
          </div>
          <div className="w-px h-10 bg-grey-700" aria-hidden="true" />
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-foreground">95%</span>
            <span className="caption">Completion Rate</span>
          </div>
        </div>
      </div>
    </section>
  );
}
