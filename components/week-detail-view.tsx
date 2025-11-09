"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { BookOpen, Code2, Award, ExternalLink, ChevronLeft } from "lucide-react"
import Link from "next/link"

interface WeekData {
  week: number
  title: string
  duration: string
  topics: string[]
  projects: string[]
  resources: { name: string; url?: string }[]
  assessment: string[]
}

interface WeekDetailViewProps {
  week: WeekData
  phase: number
  totalWeeksInPhase: number
}

export default function WeekDetailView({ week, phase, totalWeeksInPhase }: WeekDetailViewProps) {
  return (
    <div className="space-y-6">
      {/* Back Navigation */}
      <div className="flex items-center gap-2">
        <Link href="/">
          <Button variant="ghost" size="sm" className="gap-2">
            <ChevronLeft className="w-4 h-4" />
            Back to Dashboard
          </Button>
        </Link>
      </div>

      {/* Week Header */}
      <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <CardHeader>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div>
                <CardDescription className="mb-2">
                  Phase {phase} • {week.duration}
                </CardDescription>
                <CardTitle className="text-4xl">{week.title}</CardTitle>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-primary">Week {week.week}</div>
                <p className="text-sm text-muted-foreground">of {totalWeeksInPhase}</p>
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Main Content Tabs */}
      <Card>
        <CardContent className="pt-6">
          <Tabs defaultValue="topics" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-6">
              <TabsTrigger value="topics">Topics</TabsTrigger>
              <TabsTrigger value="projects">Projects</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
              <TabsTrigger value="assessment">Assessment</TabsTrigger>
            </TabsList>

            {/* Topics Tab */}
            <TabsContent value="topics" className="space-y-4">
              <div className="space-y-2 mb-6">
                <h3 className="font-semibold text-lg">Learning Topics</h3>
                <p className="text-sm text-muted-foreground">Core concepts and skills covered this week</p>
              </div>
              <div className="space-y-3">
                {week.topics.map((topic, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors"
                  >
                    <BookOpen className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-sm leading-relaxed">{topic}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Projects Tab */}
            <TabsContent value="projects" className="space-y-4">
              <div className="space-y-2 mb-6">
                <h3 className="font-semibold text-lg">Hands-On Projects</h3>
                <p className="text-sm text-muted-foreground">Build practical projects to reinforce learning</p>
              </div>
              <div className="space-y-3">
                {week.projects.map((project, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-4 rounded-lg border-2 border-accent/30 bg-accent/5 hover:bg-accent/10 transition-colors"
                  >
                    <Code2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div className="flex-1 space-y-2">
                      <p className="font-medium text-sm">{project}</p>
                      <div className="flex gap-2">
                        <span className="px-2 py-1 text-xs rounded-full bg-accent/20 text-accent-foreground">
                          Hands-on
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Resources Tab */}
            <TabsContent value="resources" className="space-y-4">
              <div className="space-y-2 mb-6">
                <h3 className="font-semibold text-lg">Learning Resources</h3>
                <p className="text-sm text-muted-foreground">
                  External links and documentation to support your learning
                </p>
              </div>
              <div className="space-y-3">
                {week.resources.map((resource, idx) => (
                  <a
                    key={idx}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-lg border border-border hover:border-primary/50 bg-card hover:bg-muted/50 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <ExternalLink className="w-4 h-4 text-primary" />
                      </div>
                      <span className="font-medium text-sm group-hover:text-primary transition-colors">
                        {resource.name}
                      </span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary flex-shrink-0" />
                  </a>
                ))}
              </div>
            </TabsContent>

            {/* Assessment Tab */}
            <TabsContent value="assessment" className="space-y-4">
              <div className="space-y-2 mb-6">
                <h3 className="font-semibold text-lg">Assessment Criteria</h3>
                <p className="text-sm text-muted-foreground">How to evaluate your progress and learning outcomes</p>
              </div>
              <div className="space-y-3">
                {week.assessment.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-4 rounded-lg border-2 border-success/30 bg-success/5 hover:bg-success/10 transition-colors"
                  >
                    <Award className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-sm leading-relaxed">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Week Navigation */}
      <div className="flex gap-2 justify-between">
        {week.week > 1 ? (
          <Link href="/">
            <Button variant="outline" className="gap-2 bg-transparent">
              ← Previous Week
            </Button>
          </Link>
        ) : (
          <div />
        )}
        {week.week < 12 ? (
          <Link href="/">
            <Button className="gap-2">Next Week →</Button>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  )
}
