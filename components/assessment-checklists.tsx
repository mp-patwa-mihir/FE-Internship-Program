"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { CheckCircle2, AlertCircle, Lightbulb, Target } from "lucide-react"

interface AssessmentItem {
  id: string
  title: string
  description: string
  completed: boolean
  difficulty: "easy" | "medium" | "hard"
  hints?: string[]
}

interface WeekAssessment {
  week: number
  title: string
  phase: number
  items: AssessmentItem[]
}

const weekAssessments: WeekAssessment[] = [
  {
    week: 1,
    title: "HTML Mastery",
    phase: 1,
    items: [
      {
        id: "1-1",
        title: "Semantic Structure",
        description: "Create a page using proper semantic HTML tags (header, nav, main, article, footer)",
        completed: false,
        difficulty: "easy",
        hints: [
          "Use <header> for page or section headers",
          "Use <nav> for navigation links",
          "Use <main> for primary content",
          "Use <article> for self-contained content",
          "Use <footer> for page footer content",
        ],
      },
      {
        id: "1-2",
        title: "Form Validation",
        description: "Build a form with proper validation attributes (required, type, pattern)",
        completed: false,
        difficulty: "easy",
        hints: [
          "Use type='email' for email fields",
          "Use type='number' for numeric inputs",
          "Add required attribute to mandatory fields",
          "Use pattern attribute for custom validation",
        ],
      },
      {
        id: "1-3",
        title: "Accessibility Score",
        description: "Achieve >80% Lighthouse accessibility score on your portfolio page",
        completed: false,
        difficulty: "medium",
        hints: [
          "Add alt text to all images",
          "Use proper heading hierarchy (h1, h2, h3)",
          "Add aria-label to icon buttons",
          "Ensure sufficient color contrast",
          "Run Lighthouse audit in Chrome DevTools",
        ],
      },
      {
        id: "1-4",
        title: "SEO Implementation",
        description: "Implement proper SEO tags including meta description and keywords",
        completed: false,
        difficulty: "easy",
        hints: [
          "Add <meta name='description'> in <head>",
          "Add <meta name='keywords'> for relevant terms",
          "Use descriptive page titles",
          "Structure with proper heading hierarchy",
        ],
      },
    ],
  },
  {
    week: 2,
    title: "CSS Fundamentals",
    phase: 1,
    items: [
      {
        id: "2-1",
        title: "Box Model Mastery",
        description: "Properly use margin, padding, and border to create spacing and layouts",
        completed: false,
        difficulty: "easy",
        hints: [
          "Margin is outside the element",
          "Padding is inside the element",
          "Use margin auto for centering",
          "Box-sizing: border-box includes padding in width",
        ],
      },
      {
        id: "2-2",
        title: "Typography Hierarchy",
        description: "Create clear visual hierarchy using font sizes, weights, and spacing",
        completed: false,
        difficulty: "medium",
        hints: [
          "Use 2-3 font sizes maximum",
          "Vary font weights (300, 400, 600, 700)",
          "Add line-height of 1.5-1.6",
          "Use letter-spacing for headings",
        ],
      },
      {
        id: "2-3",
        title: "Color Scheme Consistency",
        description: "Implement a cohesive color scheme with primary, secondary, and accent colors",
        completed: false,
        difficulty: "medium",
        hints: [
          "Choose max 5 colors total",
          "Use CSS variables for colors",
          "Maintain consistent color usage",
          "Test color contrast ratios",
        ],
      },
      {
        id: "2-4",
        title: "Gradient Application",
        description: "Use gradients effectively for visual depth without overdoing it",
        completed: false,
        difficulty: "easy",
        hints: [
          "Use analogous colors for gradients",
          "Apply gradients to backgrounds or text",
          "Limit to 2-3 color stops",
          "Ensure readability over gradients",
        ],
      },
    ],
  },
  {
    week: 3,
    title: "Layout Systems",
    phase: 1,
    items: [
      {
        id: "3-1",
        title: "Flexbox Mastery",
        description: "Master flexbox for 1D layouts with proper alignment and spacing",
        completed: false,
        difficulty: "medium",
        hints: [
          "Understand flex-direction (row/column)",
          "Use justify-content for main axis",
          "Use align-items for cross axis",
          "Use gap for spacing between items",
        ],
      },
      {
        id: "3-2",
        title: "CSS Grid Implementation",
        description: "Use CSS Grid for complex 2D layouts with grid-template-areas",
        completed: false,
        difficulty: "medium",
        hints: [
          "Define grid with grid-template-columns",
          "Use grid-template-areas for layout",
          "Use gap for gutters",
          "Use auto-fit or auto-fill for responsive grids",
        ],
      },
      {
        id: "3-3",
        title: "Responsive Breakpoints",
        description: "Implement 3+ responsive breakpoints (mobile, tablet, desktop)",
        completed: false,
        difficulty: "medium",
        hints: [
          "Start with mobile-first approach",
          "Use media queries for breakpoints",
          "Test on actual devices",
          "Common breakpoints: 640px, 768px, 1024px",
        ],
      },
      {
        id: "3-4",
        title: "Mobile-First Design",
        description: "Build with mobile-first approach and progressively enhance",
        completed: false,
        difficulty: "hard",
        hints: [
          "Start with single column layout",
          "Add complexity at larger breakpoints",
          "Test navigation on mobile",
          "Ensure touch targets are 44x44px minimum",
        ],
      },
    ],
  },
]

export default function AssessmentChecklists() {
  const [assessments, setAssessments] = useState<WeekAssessment[]>(weekAssessments)
  const [expandedWeek, setExpandedWeek] = useState<number | null>(null)
  const [showHints, setShowHints] = useState<Set<string>>(new Set())

  const toggleAssessmentItem = (weekNum: number, itemId: string) => {
    setAssessments(
      assessments.map((week) =>
        week.week === weekNum
          ? {
              ...week,
              items: week.items.map((item) => (item.id === itemId ? { ...item, completed: !item.completed } : item)),
            }
          : week,
      ),
    )
  }

  const toggleHints = (itemId: string) => {
    const newShowHints = new Set(showHints)
    if (newShowHints.has(itemId)) {
      newShowHints.delete(itemId)
    } else {
      newShowHints.add(itemId)
    }
    setShowHints(newShowHints)
  }

  const getWeekCompletion = (week: WeekAssessment) => {
    const completed = week.items.filter((item) => item.completed).length
    return Math.round((completed / week.items.length) * 100)
  }

  const difficultyColors = {
    easy: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100",
    medium: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100",
    hard: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100",
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Week Assessment Checklists</CardTitle>
          <CardDescription>
            Track your learning progress with detailed assessment criteria for each week
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="space-y-4">
        {assessments.map((week) => {
          const completion = getWeekCompletion(week)
          const completedCount = week.items.filter((item) => item.completed).length

          return (
            <Card key={week.week} className="overflow-hidden">
              <div
                className="cursor-pointer hover:bg-muted/50 transition-colors"
                onClick={() => setExpandedWeek(expandedWeek === week.week ? null : week.week)}
              >
                <CardHeader>
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge variant="outline">Week {week.week}</Badge>
                          <span className="text-sm text-muted-foreground">Phase {week.phase}</span>
                        </div>
                        <CardTitle>{week.title}</CardTitle>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">{completion}%</div>
                        <p className="text-sm text-muted-foreground">
                          {completedCount}/{week.items.length} items
                        </p>
                      </div>
                    </div>
                    <Progress value={completion} className="h-2" />
                  </div>
                </CardHeader>
              </div>

              {expandedWeek === week.week && (
                <CardContent className="space-y-4 border-t pt-6">
                  {week.items.map((item) => (
                    <div
                      key={item.id}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        item.completed
                          ? "border-success/30 bg-success/5"
                          : "border-border hover:border-primary/30 bg-card"
                      }`}
                    >
                      <div className="space-y-3">
                        {/* Assessment Item Header */}
                        <div className="flex items-start gap-3">
                          <input
                            type="checkbox"
                            checked={item.completed}
                            onChange={() => toggleAssessmentItem(week.week, item.id)}
                            className="w-5 h-5 rounded cursor-pointer accent-success mt-0.5 flex-shrink-0"
                          />
                          <div className="flex-1">
                            <div className="flex items-start gap-3 mb-2">
                              <div className="flex-1">
                                <h4
                                  className={`font-semibold ${
                                    item.completed ? "line-through text-muted-foreground" : ""
                                  }`}
                                >
                                  {item.title}
                                </h4>
                                <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                              </div>
                              {item.completed && <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-1" />}
                            </div>

                            {/* Difficulty Badge */}
                            <div className="flex gap-2">
                              <Badge className={difficultyColors[item.difficulty]}>
                                {item.difficulty.charAt(0).toUpperCase() + item.difficulty.slice(1)}
                              </Badge>
                            </div>
                          </div>
                        </div>

                        {/* Hints Section */}
                        {item.hints && (
                          <div className="ml-8">
                            <button
                              onClick={() => toggleHints(item.id)}
                              className="flex items-center gap-2 text-sm text-primary hover:underline mb-2"
                            >
                              <Lightbulb className="w-4 h-4" />
                              {showHints.has(item.id) ? "Hide hints" : "Show hints"}
                            </button>

                            {showHints.has(item.id) && (
                              <div className="bg-primary/5 border border-primary/20 rounded-lg p-3 space-y-2">
                                {item.hints.map((hint, idx) => (
                                  <div key={idx} className="flex gap-2 text-sm">
                                    <Target className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                                    <span>{hint}</span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              )}
            </Card>
          )
        })}
      </div>

      {/* Summary Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5" />
            Assessment Summary
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Total Items</p>
              <p className="text-3xl font-bold">{assessments.reduce((acc, week) => acc + week.items.length, 0)}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">Completed</p>
              <p className="text-3xl font-bold text-success">
                {assessments.reduce((acc, week) => acc + week.items.filter((item) => item.completed).length, 0)}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">Overall Progress</p>
              <p className="text-3xl font-bold text-primary">
                {Math.round(
                  (assessments.reduce((acc, week) => acc + week.items.filter((item) => item.completed).length, 0) /
                    assessments.reduce((acc, week) => acc + week.items.length, 0)) *
                    100,
                )}
                %
              </p>
            </div>
          </div>
          <div className="pt-4 border-t">
            <p className="text-sm text-muted-foreground mb-3">Weekly Progress</p>
            <div className="space-y-2">
              {assessments.map((week) => {
                const completion = getWeekCompletion(week)
                return (
                  <div key={week.week} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>
                        Week {week.week} - {week.title}
                      </span>
                      <span className="font-medium">{completion}%</span>
                    </div>
                    <Progress value={completion} className="h-1" />
                  </div>
                )
              })}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
