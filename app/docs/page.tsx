"use client";

import Link from "next/link";
import DashboardHeader from "@/components/dashboard-header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronLeft } from "lucide-react";

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-background">
      <DashboardHeader />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-6 gap-2">
              <ChevronLeft className="w-4 h-4" /> Back to Overview
            </Button>
          </Link>
        </div>

        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-8 text-white mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Mihir's Internship Program Documentation
          </h1>
          <p className="text-base md:text-lg opacity-90">
            A comprehensive guide to the 3-month frontend development training
            program
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Program Overview</CardTitle>
              <CardDescription>
                This 3-month internship program is designed to take you from
                beginner to job-ready frontend developer.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                The program is divided into three main phases, each focusing on
                specific technologies and skills:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Month 1:</strong> HTML & CSS Fundamentals
                </li>
                <li>
                  <strong>Month 2:</strong> JavaScript Mastery
                </li>
                <li>
                  <strong>Month 3:</strong> React Development (including AI
                  Tools for Developer Productivity)
                </li>
              </ul>
              <p>
                Each month contains 3-5 weeks of structured learning with daily
                tasks, hands-on projects, and resources to reinforce your
                understanding.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Learning Approach</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                This program follows a hands-on, project-based learning
                approach. Each week includes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Daily learning objectives</li>
                <li>Step-by-step task breakdowns</li>
                <li>Mini projects to apply what you've learned</li>
                <li>Checklists to track your progress</li>
                <li>Curated resources for deeper learning</li>
              </ul>
              <p>
                By following this structured approach, you'll build a solid
                foundation in frontend development while creating a portfolio of
                projects to showcase your skills.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Program Structure</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  Month 1: HTML & CSS Fundamentals
                </h3>
                <p className="mb-3">
                  This foundational month covers everything you need to know
                  about HTML and CSS, from basic structure to responsive design.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Week 1: HTML Basics & Structure</li>
                  <li>Week 2: CSS Fundamentals</li>
                  <li>Week 3: Layouts & Responsive Design</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">
                  Month 2: JavaScript Mastery
                </h3>
                <p className="mb-3">
                  In this month, you'll dive deep into JavaScript, learning
                  everything from basic syntax to API integration.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Week 4: JavaScript Basics</li>
                  <li>Week 5: DOM & Event Handling</li>
                  <li>Week 6: APIs & Advanced JavaScript</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">
                  Month 3: React Development
                </h3>
                <p className="mb-3">
                  The final month focuses on modern React development, covering
                  hooks, routing, testing, and culminating in a capstone
                  project. The month concludes with a special week on AI tools
                  for developer productivity.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Week 7: React Fundamentals</li>
                  <li>Week 8: React Hooks & Routing</li>
                  <li>Week 9: Forms, APIs & State Management</li>
                  <li>Week 10: Advanced React & UI Libraries</li>
                  <li>Week 11: Testing & Deployment</li>
                  <li>Week 12: Capstone Project</li>
                  <li>Week 13: AI Tools for Developer Productivity</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">
                AI Tools for Developer Productivity (Week 13)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                The final week of the program is dedicated to learning how to
                use AI tools responsibly to enhance your development workflow.
                This week focuses on:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Introduction to AI coding assistants (Cursor, Claude, ChatGPT)
                </li>
                <li>Responsible and ethical usage of AI in development</li>
                <li>
                  Using AI for code generation, debugging, and documentation
                </li>
                <li>
                  Balancing AI assistance with independent problem-solving
                </li>
              </ul>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <span className="text-yellow-400 text-xl">⚠️</span>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-yellow-800">
                      Important Note
                    </h3>
                    <div className="mt-2 text-yellow-700">
                      <p>
                        AI tools are meant to{" "}
                        <strong>enhance your productivity</strong>, not replace
                        your learning or critical thinking skills. The goal is
                        to use these tools responsibly to:
                      </p>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>Accelerate repetitive tasks</li>
                        <li>Learn new concepts faster</li>
                        <li>Debug and optimize code more efficiently</li>
                      </ul>
                      <p className="mt-2">
                        <strong>Never rely solely on AI-generated code</strong>.
                        Always understand what the code does, verify its
                        correctness, and ensure it follows best practices.
                        Developers who become overly dependent on AI without
                        developing their own problem-solving skills will
                        struggle in real-world development environments where
                        critical thinking is essential.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="mt-4">
                During this week, you'll work on a special project: enhancing
                your capstone project with AI tools while maintaining
                documentation of your AI usage and reflecting on the experience.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Getting Started</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>To get the most out of this program:</p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  Set aside dedicated time each day for learning (2-3 hours
                  recommended)
                </li>
                <li>Complete all daily tasks before moving to the next day</li>
                <li>Build each mini project from scratch</li>
                <li>Use the checklists to track your progress</li>
                <li>
                  Refer to the provided resources when you need clarification
                </li>
                <li>Commit your code to GitHub regularly</li>
              </ol>
              <p>
                Remember, consistency is key. Even if you can only dedicate 1-2
                hours per day, regular practice will lead to significant
                progress over the 3-month period.
              </p>
            </CardContent>
          </Card>

          <div className="text-center py-8">
            <Link href="/">
              <Button size="lg">Start Your Journey</Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
