import { Card, Badge, Button, Progress, Avatar } from "@/components/ui";
import { Clock, BookOpen, ArrowRight } from "lucide-react";

const courses = [
  {
    title: "Machine Learning Fundamentals",
    description:
      "Master the core concepts of ML including supervised and unsupervised learning.",
    badge: "Popular",
    badgeVariant: "primary" as const,
    lessons: 48,
    duration: "24 hrs",
    progress: 72,
    instructor: "Dr. Sarah Chen",
  },
  {
    title: "Data Structures & Algorithms",
    description:
      "Build a solid foundation in DSA with hands-on coding challenges and visualizations.",
    badge: "Trending",
    badgeVariant: "success" as const,
    lessons: 36,
    duration: "18 hrs",
    progress: 45,
    instructor: "Prof. James Park",
  },
  {
    title: "Full-Stack Web Development",
    description:
      "From frontend to backend, learn to build production-ready web applications.",
    badge: "New",
    badgeVariant: "warning" as const,
    lessons: 64,
    duration: "32 hrs",
    progress: 0,
    instructor: "Alex Rivera",
  },
];

export function CoursesSection() {
  return (
    <section id="courses" className="py-24">
      <div className="container">
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <h2 className="heading-lg text-gradient text-balance">
            Explore top courses
          </h2>
          <p className="body-lg text-grey-400 max-w-2xl text-pretty">
            Curated by experts and enhanced by AI to deliver the most effective
            learning experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Card
              key={course.title}
              variant="glass"
              padding="none"
              interactive
            >
              <div className="flex flex-col">
                {/* Course header */}
                <div className="p-6 pb-0">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant={course.badgeVariant} size="sm">
                      {course.badge}
                    </Badge>
                    {course.progress > 0 && (
                      <span className="text-xs text-purple-400 font-medium">
                        {course.progress}% complete
                      </span>
                    )}
                  </div>
                  <h3 className="heading-sm text-foreground mb-2 text-balance">
                    {course.title}
                  </h3>
                  <p className="body-sm text-grey-400">{course.description}</p>
                </div>

                {/* Course meta */}
                <div className="flex items-center gap-4 px-6 py-4 text-grey-500">
                  <div className="flex items-center gap-1.5">
                    <BookOpen size={14} />
                    <span className="text-xs">
                      {course.lessons} lessons
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock size={14} />
                    <span className="text-xs">{course.duration}</span>
                  </div>
                </div>

                {/* Progress bar */}
                {course.progress > 0 && (
                  <div className="px-6">
                    <Progress value={course.progress} size="sm" />
                  </div>
                )}

                {/* Footer */}
                <div className="flex items-center justify-between p-6 pt-4 mt-auto">
                  <div className="flex items-center gap-2">
                    <Avatar
                      alt={course.instructor}
                      size="sm"
                    />
                    <span className="text-sm text-grey-300">
                      {course.instructor}
                    </span>
                  </div>
                  <Button variant="ghost" size="sm">
                    <ArrowRight size={16} />
                    <span className="sr-only">View course</span>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="flex justify-center pt-12">
          <Button variant="secondary" size="lg" icon={ArrowRight} iconPosition="right">
            View All Courses
          </Button>
        </div>
      </div>
    </section>
  );
}
