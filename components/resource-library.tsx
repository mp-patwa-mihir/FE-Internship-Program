"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ExternalLink, BookOpen, Code2, Video, FileText, Heart, Filter } from "lucide-react"

interface Resource {
  id: string
  title: string
  description: string
  category: "documentation" | "tutorial" | "practice" | "deployment"
  phase: number
  url: string
  icon: typeof BookOpen
  difficulty?: "beginner" | "intermediate" | "advanced"
}

const resources: Resource[] = [
  // Documentation
  {
    id: "1",
    title: "MDN Web Docs",
    description: "Comprehensive web development documentation covering HTML, CSS, and JavaScript",
    category: "documentation",
    phase: 0,
    url: "https://developer.mozilla.org",
    icon: BookOpen,
    difficulty: "beginner",
  },
  {
    id: "2",
    title: "W3Schools",
    description: "Interactive tutorials and references for all web technologies",
    category: "documentation",
    phase: 0,
    url: "https://www.w3schools.com",
    icon: BookOpen,
    difficulty: "beginner",
  },
  {
    id: "3",
    title: "React Documentation",
    description: "Official React learning guide with interactive examples",
    category: "documentation",
    phase: 3,
    url: "https://react.dev",
    icon: BookOpen,
    difficulty: "intermediate",
  },
  {
    id: "4",
    title: "JavaScript.info",
    description: "Modern JavaScript tutorial from basics to advanced",
    category: "documentation",
    phase: 2,
    url: "https://javascript.info",
    icon: BookOpen,
    difficulty: "intermediate",
  },
  {
    id: "5",
    title: "CSS-Tricks",
    description: "Daily articles about CSS, HTML, JavaScript, web design and web apps",
    category: "documentation",
    phase: 1,
    url: "https://css-tricks.com",
    icon: BookOpen,
    difficulty: "intermediate",
  },

  // Practice Platforms
  {
    id: "6",
    title: "CodePen",
    description: "Code snippets and interactive experiments for frontend development",
    category: "practice",
    phase: 0,
    url: "https://codepen.io",
    icon: Code2,
    difficulty: "beginner",
  },
  {
    id: "7",
    title: "LeetCode",
    description: "Algorithm and coding challenges with difficulty levels",
    category: "practice",
    phase: 2,
    url: "https://leetcode.com",
    icon: Code2,
    difficulty: "advanced",
  },
  {
    id: "8",
    title: "HackerRank",
    description: "Coding challenges and competitions for skill building",
    category: "practice",
    phase: 2,
    url: "https://www.hackerrank.com",
    icon: Code2,
    difficulty: "intermediate",
  },
  {
    id: "9",
    title: "Frontend Mentor",
    description: "Real-world frontend design challenges and projects",
    category: "practice",
    phase: 1,
    url: "https://www.frontendmentor.io",
    icon: Code2,
    difficulty: "intermediate",
  },
  {
    id: "10",
    title: "Codewars",
    description: "Gamified coding challenges and kata exercises",
    category: "practice",
    phase: 2,
    url: "https://www.codewars.com",
    icon: Code2,
    difficulty: "intermediate",
  },

  // Video Tutorials
  {
    id: "11",
    title: "FreeCodeCamp",
    description: "Free comprehensive video courses on web development",
    category: "tutorial",
    phase: 0,
    url: "https://www.freecodecamp.org",
    icon: Video,
    difficulty: "beginner",
  },
  {
    id: "12",
    title: "YouTube - Traversy Media",
    description: "Web development tutorials and crash courses",
    category: "tutorial",
    phase: 0,
    url: "https://www.youtube.com/c/TraversyMedia",
    icon: Video,
    difficulty: "beginner",
  },
  {
    id: "13",
    title: "Scrimba",
    description: "Interactive video coding lessons with inline code editors",
    category: "tutorial",
    phase: 0,
    url: "https://scrimba.com",
    icon: Video,
    difficulty: "beginner",
  },
  {
    id: "14",
    title: "egghead.io",
    description: "Concise video courses on modern web development tools",
    category: "tutorial",
    phase: 2,
    url: "https://egghead.io",
    icon: Video,
    difficulty: "intermediate",
  },

  // Deployment & Tools
  {
    id: "15",
    title: "Netlify",
    description: "Deploy static sites and serverless functions instantly",
    category: "deployment",
    phase: 4,
    url: "https://www.netlify.com",
    icon: FileText,
    difficulty: "beginner",
  },
  {
    id: "16",
    title: "Vercel",
    description: "Deploy Next.js and frontend apps with automatic optimization",
    category: "deployment",
    phase: 4,
    url: "https://vercel.com",
    icon: FileText,
    difficulty: "beginner",
  },
  {
    id: "17",
    title: "GitHub",
    description: "Version control, collaboration, and project hosting",
    category: "documentation",
    phase: 0,
    url: "https://github.com",
    icon: FileText,
    difficulty: "beginner",
  },

  // APIs & Tools
  {
    id: "18",
    title: "OpenWeather API",
    description: "Free weather data API for building weather applications",
    category: "practice",
    phase: 2,
    url: "https://openweathermap.org/api",
    icon: Code2,
    difficulty: "intermediate",
  },
  {
    id: "19",
    title: "GitHub API",
    description: "Access GitHub data programmatically for integrations",
    category: "practice",
    phase: 2,
    url: "https://docs.github.com/en/rest",
    icon: Code2,
    difficulty: "intermediate",
  },
  {
    id: "20",
    title: "JSON Server",
    description: "Mock REST API for testing and prototyping",
    category: "practice",
    phase: 3,
    url: "https://github.com/typicode/json-server",
    icon: Code2,
    difficulty: "beginner",
  },
  {
    id: "21",
    title: "Postman",
    description: "API testing and development platform",
    category: "practice",
    phase: 2,
    url: "https://www.postman.com",
    icon: Code2,
    difficulty: "intermediate",
  },
]

const categoryConfig = {
  documentation: { label: "Documentation", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100" },
  tutorial: { label: "Tutorial", color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100" },
  practice: { label: "Practice", color: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-100" },
  deployment: { label: "Deployment", color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100" },
}

const difficultyConfig = {
  beginner: { label: "Beginner", color: "text-green-600 dark:text-green-400" },
  intermediate: { label: "Intermediate", color: "text-yellow-600 dark:text-yellow-400" },
  advanced: { label: "Advanced", color: "text-red-600 dark:text-red-400" },
}

export default function ResourceLibrary() {
  const [search, setSearch] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedPhase, setSelectedPhase] = useState<number | null>(null)
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null)
  const [favorites, setFavorites] = useState<Set<string>>(new Set())

  const filteredResources = resources.filter((r) => {
    const matchesSearch =
      r.title.toLowerCase().includes(search.toLowerCase()) || r.description.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = !selectedCategory || r.category === selectedCategory
    const matchesPhase = !selectedPhase || r.phase === 0 || r.phase === selectedPhase
    const matchesDifficulty = !selectedDifficulty || r.difficulty === selectedDifficulty
    return matchesSearch && matchesCategory && matchesPhase && matchesDifficulty
  })

  const favoriteResources = filteredResources.filter((r) => favorites.has(r.id))
  const otherResources = filteredResources.filter((r) => !favorites.has(r.id))

  const toggleFavorite = (id: string) => {
    const newFavorites = new Set(favorites)
    if (newFavorites.has(id)) {
      newFavorites.delete(id)
    } else {
      newFavorites.add(id)
    }
    setFavorites(newFavorites)
  }

  const categories = ["documentation", "tutorial", "practice", "deployment"] as const
  const difficulties = ["beginner", "intermediate", "advanced"] as const

  return (
    <div className="space-y-6">
      {/* Filters Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="w-5 h-5" />
            Learning Resources
          </CardTitle>
          <CardDescription>Curated collection of tools, documentation, and platforms</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Search */}
          <Input
            placeholder="Search resources by title or description..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full"
          />

          {/* Category Filters */}
          <div>
            <p className="text-sm font-medium mb-3">Category</p>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  !selectedCategory ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
                }`}
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === cat ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
                  }`}
                >
                  {categoryConfig[cat].label}
                </button>
              ))}
            </div>
          </div>

          {/* Phase Filters */}
          <div>
            <p className="text-sm font-medium mb-3">Phase</p>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedPhase(null)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  !selectedPhase ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
                }`}
              >
                All Phases
              </button>
              {[1, 2, 3, 4].map((phase) => (
                <button
                  key={phase}
                  onClick={() => setSelectedPhase(phase)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    selectedPhase === phase ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
                  }`}
                >
                  Phase {phase}
                </button>
              ))}
            </div>
          </div>

          {/* Difficulty Filters */}
          <div>
            <p className="text-sm font-medium mb-3">Difficulty</p>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedDifficulty(null)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  !selectedDifficulty ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
                }`}
              >
                All Levels
              </button>
              {difficulties.map((diff) => (
                <button
                  key={diff}
                  onClick={() => setSelectedDifficulty(diff)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors capitalize ${
                    selectedDifficulty === diff ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
                  }`}
                >
                  {difficultyConfig[diff].label}
                </button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Favorites Section */}
      {favoriteResources.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Heart className="w-5 h-5 text-red-500 fill-red-500" />
            Your Favorites ({favoriteResources.length})
          </h3>
          <div className="grid gap-4">
            {favoriteResources.map((resource) => (
              <ResourceCard
                key={resource.id}
                resource={resource}
                isFavorite={favorites.has(resource.id)}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </div>
        </div>
      )}

      {/* All Resources Section */}
      <div>
        <h3 className="text-lg font-semibold mb-4">
          {favoriteResources.length > 0 ? "Other Resources" : "All Resources"} ({otherResources.length})
        </h3>
        {otherResources.length > 0 ? (
          <div className="grid gap-4">
            {otherResources.map((resource) => (
              <ResourceCard
                key={resource.id}
                resource={resource}
                isFavorite={favorites.has(resource.id)}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </div>
        ) : (
          <Card className="text-center py-12">
            <CardTitle>No resources found</CardTitle>
            <CardDescription>Try adjusting your search or filters</CardDescription>
          </Card>
        )}
      </div>
    </div>
  )
}

function ResourceCard({
  resource,
  isFavorite,
  onToggleFavorite,
}: {
  resource: Resource
  isFavorite: boolean
  onToggleFavorite: (id: string) => void
}) {
  return (
    <Card className="hover:shadow-lg transition-all">
      <CardContent className="pt-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 space-y-3">
            <div className="flex items-start gap-3">
              <resource.icon className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="font-semibold text-lg">{resource.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{resource.description}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge className={categoryConfig[resource.category].color}>
                {categoryConfig[resource.category].label}
              </Badge>
              {resource.difficulty && (
                <Badge variant="secondary" className={difficultyConfig[resource.difficulty].color}>
                  {difficultyConfig[resource.difficulty].label}
                </Badge>
              )}
            </div>
          </div>
          <div className="flex gap-2 flex-shrink-0">
            <button
              onClick={() => onToggleFavorite(resource.id)}
              className="p-2 hover:bg-muted rounded-lg transition-colors"
              aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
            >
              <Heart
                className={`w-5 h-5 transition-colors ${
                  isFavorite ? "fill-red-500 text-red-500" : "text-muted-foreground hover:text-red-500"
                }`}
              />
            </button>
            <a
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-muted rounded-lg transition-colors"
              aria-label="Open resource"
            >
              <ExternalLink className="w-5 h-5 text-muted-foreground hover:text-primary" />
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
