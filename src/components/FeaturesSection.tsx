import { Card, IconWrapper } from "@/components/ui";
import { Brain, Target, BarChart3, Zap, Users, Shield } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Paths",
    description:
      "Our AI analyzes your learning style and creates personalized paths that evolve as you progress.",
    variant: "primary" as const,
  },
  {
    icon: Target,
    title: "Gap Detection",
    description:
      "Automatically identifies knowledge gaps and reinforces weak areas with targeted exercises.",
    variant: "warning" as const,
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description:
      "Track your progress with detailed analytics, mastery scores, and performance insights.",
    variant: "success" as const,
  },
  {
    icon: Zap,
    title: "Instant Feedback",
    description:
      "Get immediate, contextual feedback on every answer to accelerate your understanding.",
    variant: "error" as const,
  },
  {
    icon: Users,
    title: "Collaborative Learning",
    description:
      "Join study groups, discuss concepts with peers, and learn together with AI moderation.",
    variant: "primary" as const,
  },
  {
    icon: Shield,
    title: "Verified Credentials",
    description:
      "Earn industry-recognized certificates that validate your skills and knowledge.",
    variant: "success" as const,
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24">
      <div className="container">
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <h2 className="heading-lg text-gradient text-balance">
            Everything you need to master any subject
          </h2>
          <p className="body-lg text-grey-400 max-w-2xl text-pretty">
            Powerful tools driven by artificial intelligence, designed to make
            learning more effective and engaging.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Card
              key={feature.title}
              variant="glass"
              padding="lg"
              interactive
            >
              <div className="flex flex-col gap-4">
                <IconWrapper
                  icon={feature.icon}
                  size="lg"
                  variant={feature.variant}
                />
                <h3 className="heading-sm text-foreground">{feature.title}</h3>
                <p className="body-md text-grey-400">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
