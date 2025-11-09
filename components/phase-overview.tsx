"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Clock, Target } from "lucide-react"

interface Phase {
  id: number
  title: string
  duration: string
  weeks: string
  focus: string
  color: string
}

const phases: Phase[] = [
  {
    id: 1,
    title: "Phase 1: Web Fundamentals",
    duration: "Weeks 1-3",
    weeks: "3 weeks",
    focus: "HTML, CSS, Responsive Design & Layout Systems",
    color: "from-blue-500 to-blue-600",
  },
  {
    id: 2,
    title: "Phase 2: JavaScript Foundation",
    duration: "Weeks 4-6",
    weeks: "3 weeks",
    focus: "Core JS, DOM Manipulation, APIs & ES6+",
    color: "from-yellow-500 to-orange-500",
  },
  {
    id: 3,
    title: "Phase 3: React Development",
    duration: "Weeks 7-10",
    weeks: "4 weeks",
    focus: "Components, Hooks, Routing & State Management",
    color: "from-cyan-500 to-blue-500",
  },
  {
    id: 4,
    title: "Phase 4: Capstone & Deployment",
    duration: "Weeks 11-12",
    weeks: "2 weeks",
    focus: "Full-Stack Project, Testing & Production Deployment",
    color: "from-emerald-500 to-green-600",
  },
]

interface PhaseOverviewProps {
  onPhaseSelect: (phase: number) => void
  selectedPhase: number | null
}

export default function PhaseOverview({ onPhaseSelect, selectedPhase }: PhaseOverviewProps) {
  return (
    <div className="space-y-6">
      <div className="grid gap-6">
        {phases.map((phase) => (
          <Card
            key={phase.id}
            className={`cursor-pointer transition-all hover:shadow-lg ${
              selectedPhase === phase.id ? "ring-2 ring-primary" : ""
            }`}
            onClick={() => onPhaseSelect(phase.id)}
          >
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <CardTitle className="text-2xl">{phase.title}</CardTitle>
                  <CardDescription className="text-base mt-2">{phase.focus}</CardDescription>
                </div>
                <div
                  className={`px-4 py-2 rounded-full bg-gradient-to-r ${phase.color} text-white font-semibold text-sm whitespace-nowrap`}
                >
                  {phase.weeks}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4 md:gap-6">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Duration</p>
                    <p className="font-semibold">{phase.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Target className="w-5 h-5 text-accent" />
                  <div>
                    <p className="text-sm text-muted-foreground">Weekly Modules</p>
                    <p className="font-semibold">{phase.weeks.split(" ")[0]} modules</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <div>
                    <p className="text-sm text-muted-foreground">Projects</p>
                    <p className="font-semibold">2-3 per week</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
