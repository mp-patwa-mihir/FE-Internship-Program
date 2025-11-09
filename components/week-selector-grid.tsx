"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, BookOpen } from "lucide-react"

interface WeekCard {
  week: number
  title: string
  phase: number
  onSelect: (week: number, phase: number) => void
}

const allWeeks: WeekCard[] = [
  // Phase 1
  { week: 1, title: "HTML Mastery", phase: 1, onSelect: () => {} },
  { week: 2, title: "CSS Fundamentals", phase: 1, onSelect: () => {} },
  { week: 3, title: "Layout Systems", phase: 1, onSelect: () => {} },
  // Phase 2
  { week: 4, title: "Core JavaScript I", phase: 2, onSelect: () => {} },
  { week: 5, title: "DOM & Events", phase: 2, onSelect: () => {} },
  { week: 6, title: "ES6+ & APIs", phase: 2, onSelect: () => {} },
  // Phase 3
  { week: 7, title: "React Fundamentals", phase: 3, onSelect: () => {} },
  { week: 8, title: "Hooks & Routing", phase: 3, onSelect: () => {} },
  { week: 9, title: "Forms & State", phase: 3, onSelect: () => {} },
  { week: 10, title: "UI Libraries", phase: 3, onSelect: () => {} },
  // Phase 4
  { week: 11, title: "Integration & Testing", phase: 4, onSelect: () => {} },
  { week: 12, title: "Capstone Project", phase: 4, onSelect: () => {} },
]

const phaseColors = {
  1: "from-blue-500 to-blue-600",
  2: "from-yellow-500 to-orange-500",
  3: "from-cyan-500 to-blue-500",
  4: "from-emerald-500 to-green-600",
}

export default function WeekSelectorGrid() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">All Weeks at a Glance</h2>
        <p className="text-muted-foreground">Browse all 12 weeks of the internship program</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {allWeeks.map((week) => (
          <Card key={week.week} className="hover:shadow-lg hover:border-primary/50 transition-all cursor-pointer group">
            <CardHeader>
              <div className="flex items-start justify-between mb-2">
                <div
                  className={`px-3 py-1 rounded-full bg-gradient-to-r ${phaseColors[week.phase as keyof typeof phaseColors]} text-white text-xs font-semibold`}
                >
                  Phase {week.phase}
                </div>
                <Badge variant="secondary" className="text-xs">
                  Week {week.week}
                </Badge>
              </div>
              <CardTitle className="text-lg group-hover:text-primary transition-colors">{week.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>1 week</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <BookOpen className="w-4 h-4" />
                <span>Multiple topics</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
