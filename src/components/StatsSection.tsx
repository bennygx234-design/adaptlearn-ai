import { Card } from "@/components/ui";

const stats = [
  {
    value: "3x",
    label: "faster learning",
    description: "compared to traditional methods",
  },
  {
    value: "92%",
    label: "retention rate",
    description: "after 30 days of completion",
  },
  {
    value: "4.9",
    label: "avg rating",
    description: "from over 12,000 reviews",
  },
  {
    value: "85%",
    label: "career growth",
    description: "of learners report a promotion",
  },
];

export function StatsSection() {
  return (
    <section id="stats" className="py-24">
      <div className="container">
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <h2 className="heading-lg text-gradient text-balance">
            Results that speak for themselves
          </h2>
          <p className="body-lg text-grey-400 max-w-2xl text-pretty">
            Our AI-driven approach delivers measurable outcomes that
            traditional platforms simply cannot match.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <Card key={stat.label} variant="glass" padding="lg" glow>
              <div className="flex flex-col items-center text-center gap-2">
                <span className="text-4xl font-bold text-gradient">
                  {stat.value}
                </span>
                <span className="text-lg font-semibold text-foreground">
                  {stat.label}
                </span>
                <span className="caption">{stat.description}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
