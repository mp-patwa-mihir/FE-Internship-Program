"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { CheckCircle2, TrendingUp, Zap, Award, Calendar } from "lucide-react"

interface Phase {
  id: number
  name: string
  weeks: number
  completedWeeks: number
}

const initialPhases: Phase[] = [
  { id: 1, name: "Web Fundamentals", weeks: 3, completedWeeks: 0 },
  { id: 2, name: "JavaScript Foundation", weeks: 3, completedWeeks: 0 },
  { id: 3, name: "React Development", weeks: 4, completedWeeks: 0 },
  { id: 4, name: "Capstone & Deployment", weeks: 2, completedWeeks: 0 },
]

const milestones = [
  "Installed all necessary tools (Node.js, Git, VS Code)",
  "Created GitHub repository for internship work",
  "Completed first HTML project",
  "Mastered CSS Flexbox & Grid",
  "Built first vanilla JavaScript app",
  "Fetched data from REST API",
  "Created first React component",
  "Deployed project to Netlify/Vercel",
  "Completed all 4 phases",
  "Presented capstone project",
]

export default function ProgressTracker() {
  const [phases, setPhases] = useState<Phase[]>(initialPhases)
  const [completedMilestones, setCompletedMilestones] = useState<boolean[]>(new Array(milestones.length).fill(false))
  const [lastActivityDate, setLastActivityDate] = useState<Date | null>(null)

  const totalProgress = ((phases.reduce((acc, p) => acc + p.completedWeeks, 0) / 12) * 100).toFixed(0)
  const completedMilestoneCount = completedMilestones.filter(Boolean).length

  const currentStreak = completedMilestoneCount > 0 ? Math.min(completedMilestoneCount, 7) : 0

  const handlePhaseUpdate = (phaseId: number, increment: number) => {
    setPhases(
      phases.map((p) =>
        p.id === phaseId ? { ...p, completedWeeks: Math.max(0, Math.min(p.weeks, p.completedWeeks + increment)) } : p,
      ),
    )
    setLastActivityDate(new Date())
  }

  const handleMilestoneToggle = (index: number) => {
    const newMilestones = [...completedMilestones]
    newMilestones[index] = !newMilestones[index]
    setCompletedMilestones(newMilestones)
    setLastActivityDate(new Date())
  }

  const phaseStats = phases.map((phase) => ({
    phase,
    percentage: (phase.completedWeeks / phase.weeks) * 100,
    isCompleted: phase.completedWeeks === phase.weeks,
  }))

  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Completion Rate</p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-primary">{totalProgress}%</span>
                <span className="text-sm text-muted-foreground">of 12 weeks</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Current Streak
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-accent">{currentStreak}</span>
                <span className="text-sm text-muted-foreground">days</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <Award className="w-4 h-4" />
                Milestones
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-success">{completedMilestoneCount}</span>
                <span className="text-sm text-muted-foreground">of {milestones.length}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Last Active
              </p>
              <div className="text-sm font-medium">
                {lastActivityDate ? (
                  <span>
                    {lastActivityDate.toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                ) : (
                  <span className="text-muted-foreground">Not started</span>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Overall Progress */}
      <Card>
        <CardHeader>
          <CardTitle>Overall Progress</CardTitle>
          <CardDescription>Track your journey through the 12-week program</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Completion Rate</span>
              <span className="text-2xl font-bold text-primary">{totalProgress}%</span>
            </div>
            <Progress value={Number.parseFloat(totalProgress)} className="h-3" />
          </div>
          <p className="text-sm text-muted-foreground">
            {phases.reduce((acc, p) => acc + p.completedWeeks, 0)} out of 12 weeks completed
          </p>
        </CardContent>
      </Card>

      {/* Phase Progress */}
      <Card>
        <CardHeader>
          <CardTitle>Phase Progress</CardTitle>
          <CardDescription>Update your progress for each phase</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {phaseStats.map(({ phase, percentage, isCompleted }) => (
            <div key={phase.id} className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-medium">{phase.name}</span>
                <div className="flex items-center gap-2">
                  {isCompleted && <CheckCircle2 className="w-5 h-5 text-success" />}
                  <span className="text-sm text-muted-foreground">
                    {phase.completedWeeks}/{phase.weeks} weeks
                  </span>
                </div>
              </div>
              <Progress value={percentage} className="h-2" />
              <div className="flex gap-2">
                <button
                  onClick={() => handlePhaseUpdate(phase.id, -1)}
                  className="px-3 py-1 text-sm bg-muted hover:bg-muted/80 rounded transition-colors disabled:opacity-50"
                  disabled={phase.completedWeeks === 0}
                >
                  −
                </button>
                <button
                  onClick={() => handlePhaseUpdate(phase.id, 1)}
                  className="px-3 py-1 text-sm bg-primary text-primary-foreground hover:bg-primary/90 rounded transition-colors disabled:opacity-50 flex-1"
                  disabled={phase.completedWeeks === phase.weeks}
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Milestones */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Milestones
          </CardTitle>
          <CardDescription>
            {completedMilestoneCount} out of {milestones.length} milestones completed
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {milestones.map((milestone, idx) => (
            <div
              key={idx}
              className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                completedMilestones[idx]
                  ? "bg-success/10 border border-success/20"
                  : "hover:bg-muted/50 border border-transparent"
              }`}
            >
              <input
                type="checkbox"
                checked={completedMilestones[idx]}
                onChange={() => handleMilestoneToggle(idx)}
                className="w-4 h-4 rounded cursor-pointer accent-success"
              />
              <span
                className={`flex-1 ${
                  completedMilestones[idx] ? "line-through text-muted-foreground" : "text-foreground"
                }`}
              >
                {milestone}
              </span>
              {completedMilestones[idx] && <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0" />}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
