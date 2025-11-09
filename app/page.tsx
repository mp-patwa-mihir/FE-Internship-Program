"use client";

import Link from "next/link";
import DashboardHeader from "@/components/dashboard-header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

const phases = [
  {
    id: 0,
    name: "Month 1: HTML & CSS Fundamentals",
    description:
      "Master HTML basics, CSS styling, flexbox, grid, and responsive design",
    weeks: "Weeks 1-3",
    color: "from-blue-500 to-blue-600",
    icon: "🏗️",
  },
  {
    id: 1,
    name: "Month 2: JavaScript Mastery",
    description:
      "Learn JavaScript fundamentals, DOM manipulation, and API integration",
    weeks: "Weeks 4-6",
    color: "from-yellow-500 to-yellow-600",
    icon: "⚡",
  },
  {
    id: 2,
    name: "Month 3: React Development",
    description:
      "Master React fundamentals, hooks, routing, and build a capstone project",
    weeks: "Weeks 7-13",
    color: "from-green-500 to-green-600",
    icon: "🚀",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <DashboardHeader />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Duration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">3 Months</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Phases
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">3 Phases</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Mini Projects
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">11</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Weeks of Content
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">13</p>
            </CardContent>
          </Card>
        </div>

        {/* Phases Overview */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Learning Phases
          </h2>
          {phases.map((phase) => (
            <Link key={phase.id} href={`/phase/${phase.id}`}>
              <Card className="cursor-pointer hover:shadow-lg transition-shadow h-full mb-4">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="text-4xl flex-shrink-0">{phase.icon}</div>
                    <div className="flex-1">
                      <CardTitle className="text-xl">{phase.name}</CardTitle>
                      <CardDescription className="text-base mt-1">
                        {phase.description}
                      </CardDescription>
                      <div className="flex items-center gap-2 mt-3">
                        <p className="text-sm text-primary font-semibold">
                          {phase.weeks}
                        </p>
                        <ChevronRight className="w-4 h-4 text-muted-foreground" />
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>

        {/* Additional Pages */}
        <div className="mt-12 pt-8 border-t">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Program Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/docs">
              <Card className="cursor-pointer hover:shadow-lg transition-shadow h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span>📚</span> Documentation
                  </CardTitle>
                  <CardDescription>Program guide and overview</CardDescription>
                </CardHeader>
              </Card>
            </Link>
            <Link href="/resources">
              <Card className="cursor-pointer hover:shadow-lg transition-shadow h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span>🔗</span> Resources
                  </CardTitle>
                  <CardDescription>Curated learning materials</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </div>

        {/* Curriculum Highlights */}
        <div className="mt-12 pt-8 border-t">
          <h2 className="text-xl font-bold text-foreground mb-6">
            What You'll Learn
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-foreground mb-3">
                Frontend Fundamentals
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ HTML5 & Semantic Markup</li>
                <li>✓ CSS (Flexbox, Grid, Responsive)</li>
                <li>✓ JavaScript Fundamentals & ES6+</li>
                <li>✓ DOM Manipulation & Events</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-3">
                Advanced Skills
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ React (Components, Hooks, Routing)</li>
                <li>✓ API Integration & Data Fetching</li>
                <li>✓ Testing & Deployment</li>
                <li>✓ Git & Professional Workflow</li>
                <li>✓ AI Tools for Developer Productivity</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="mt-12 pt-8 border-t">
          <h2 className="text-xl font-bold text-foreground mb-6">
            Mini Projects Throughout
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
            <div>• About Me Page (Week 1)</div>
            <div>• Calculator App (Week 4)</div>
            <div>• Stylish Resume Page (Week 2)</div>
            <div>• To-Do App (Week 5)</div>
            <div>• Responsive Portfolio Page (Week 3)</div>
            <div>• Weather App (Week 6)</div>
            <div>• Counter App (Week 7)</div>
            <div>• Movie Search App (Week 8)</div>
            <div>• Color Switcher (Week 7)</div>
            <div>• Recipe Finder (Week 8)</div>
            <div>• User Registration Form (Week 9)</div>
            <div>• Expense Tracker (Week 9)</div>
            <div>• Dashboard UI (Week 10)</div>
            <div>• React Portfolio (Week 11)</div>
            <div>• E-commerce Website (Week 12)</div>
            <div>• AI-Enhanced Developer Workflow (Week 13)</div>
          </div>
        </div>
      </div>
    </main>
  );
}
