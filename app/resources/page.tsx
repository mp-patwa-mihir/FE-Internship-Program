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

const resources = [
  {
    category: "HTML & CSS",
    items: [
      {
        title: "W3Schools HTML Tutorial",
        url: "https://www.w3schools.com/html/",
        description: "Comprehensive HTML tutorial with examples",
      },
      {
        title: "MDN HTML Guide",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        description: "Official HTML documentation from Mozilla",
      },
      {
        title: "CSS-Tricks",
        url: "https://css-tricks.com/",
        description: "Tips, tricks, and techniques for CSS",
      },
      {
        title: "Flexbox Froggy",
        url: "https://flexboxfroggy.com/",
        description: "Interactive game for learning CSS Flexbox",
      },
      {
        title: "Grid Garden",
        url: "https://cssgridgarden.com/",
        description: "Interactive game for learning CSS Grid",
      },
    ],
  },
  {
    category: "JavaScript",
    items: [
      {
        title: "JavaScript.info",
        url: "https://javascript.info/",
        description: "The modern JavaScript tutorial",
      },
      {
        title: "MDN JavaScript Guide",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
        description: "Official JavaScript documentation from Mozilla",
      },
      {
        title: "Eloquent JavaScript",
        url: "https://eloquentjavascript.net/",
        description: "Free online book about JavaScript",
      },
      {
        title: "JavaScript30",
        url: "https://javascript30.com/",
        description: "30-day vanilla JavaScript coding challenge",
      },
    ],
  },
  {
    category: "React",
    items: [
      {
        title: "React Official Docs",
        url: "https://react.dev/",
        description: "Official React documentation",
      },
      {
        title: "React Hooks Guide",
        url: "https://react.dev/reference/react/hooks",
        description: "Complete guide to React hooks",
      },
      {
        title: "React Router",
        url: "https://reactrouter.com/",
        description: "Official documentation for React Router",
      },
      {
        title: "React Testing Library",
        url: "https://testing-library.com/docs/react-testing-library/intro/",
        description: "Introduction to React Testing Library",
      },
    ],
  },
  {
    category: "AI Tools & Productivity",
    items: [
      {
        title: "Cursor IDE",
        url: "https://cursor.sh/",
        description: "AI-first code editor built for pair programming",
      },
      {
        title: "OpenAI ChatGPT",
        url: "https://chat.openai.com/",
        description:
          "Advanced language model for conversation and code assistance",
      },
      {
        title: "Anthropic Claude",
        url: "https://claude.ai/",
        description:
          "AI assistant focused on helpful, honest, and harmless responses",
      },
      {
        title: "GitHub Copilot",
        url: "https://github.com/features/copilot",
        description: "AI pair programmer that helps you write code faster",
      },
      {
        title: "Responsible AI in Software Development",
        url: "https://ai.google/responsibilities/",
        description: "Guidelines for ethical AI usage in development",
      },
    ],
  },
  {
    category: "Tools & Deployment",
    items: [
      {
        title: "Vercel",
        url: "https://vercel.com/",
        description: "Cloud platform for static sites and Serverless Functions",
      },
      {
        title: "Netlify",
        url: "https://netlify.com/",
        description: "All-in-one platform for automating modern web projects",
      },
      {
        title: "GitHub",
        url: "https://github.com/",
        description: "Platform for version control and collaboration",
      },
      {
        title: "Chrome DevTools",
        url: "https://developer.chrome.com/docs/devtools/",
        description: "Built-in developer tools in the Google Chrome browser",
      },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-background">
      <DashboardHeader />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-6 gap-2">
              <ChevronLeft className="w-4 h-4" /> Back to Overview
            </Button>
          </Link>
        </div>

        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg p-8 text-white mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Learning Resources
          </h1>
          <p className="text-base md:text-lg opacity-90">
            Curated collection of resources to support your learning journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resources.map((category) => (
            <Card key={category.category}>
              <CardHeader>
                <CardTitle className="text-2xl">{category.category}</CardTitle>
                <CardDescription>
                  Resources to help you master {category.category.toLowerCase()}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.items.map((item) => (
                  <a
                    key={item.url}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 border rounded-lg hover:bg-muted transition-colors group"
                  >
                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground mt-1">
                      {item.description}
                    </p>
                  </a>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-12">
          <CardHeader>
            <CardTitle className="text-2xl">Additional Tips</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Remember to bookmark these resources and refer to them throughout
              your learning journey. The official documentation (MDN for
              HTML/CSS/JavaScript and React docs) should be your primary
              reference for language features and best practices.
            </p>
            <p>
              For hands-on practice, try to build small projects using the
              concepts you've learned. The interactive games (Flexbox Froggy and
              Grid Garden) are particularly helpful for visualizing layout
              concepts.
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <span className="text-yellow-400 text-xl">⚠️</span>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-yellow-800">
                    Responsible AI Usage
                  </h3>
                  <div className="mt-2 text-yellow-700">
                    <p>When using AI tools, always remember:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>
                        Use AI to enhance your productivity, not replace
                        learning
                      </li>
                      <li>Always verify and understand AI-generated code</li>
                      <li>
                        Maintain your problem-solving skills and critical
                        thinking
                      </li>
                      <li>Document your AI usage for transparency</li>
                      <li>
                        Never rely solely on AI for complex problem-solving
                      </li>
                    </ul>
                    <p className="mt-2">
                      Developers who become overly dependent on AI without
                      developing their own skills will struggle in real-world
                      development environments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-4">
              Don't hesitate to search for solutions when you're stuck - being
              able to effectively search for and understand solutions is a
              crucial skill for developers. Just remember to use AI responsibly
              as a tool to enhance your learning, not replace it.
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
