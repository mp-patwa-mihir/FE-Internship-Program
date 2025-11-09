import Link from "next/link";
import DashboardHeader from "@/components/dashboard-header";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { WeeklyPlan } from "@/components/weekly-plan";

const phaseData: Record<
  number,
  {
    name: string;
    description: string;
    weeks: Array<{
      week: number;
      title: string;
      objectives: string[];
      dailyBreakdown: { day: string; tasks: string[] }[];
      miniProject: {
        name: string;
        description: string;
      };
      deliverables: string[];
      resources: Array<{ name: string; url: string }>;
      checklist: string[];
    }>;
  }
> = {
  0: {
    name: "Month 1: HTML & CSS Fundamentals",
    description:
      "Weeks 1-3: Master HTML basics, semantic markup, CSS styling, flexbox, grid, and responsive design",
    weeks: [
      {
        week: 1,
        title: "HTML Basics & Structure",
        objectives: [
          "Understand HTML document structure and basic elements",
          "Learn HTML headings, paragraphs, and text formatting",
          "Master HTML links, images, and lists",
        ],
        dailyBreakdown: [
          {
            day: "Day 1-2",
            tasks: [
              "HTML Introduction and Basic Structure",
              "HTML Editors and Setup",
              "HTML Elements, Attributes, Headings, and Paragraphs",
              "HTML Text Formatting",
            ],
          },
          {
            day: "Day 3-4",
            tasks: [
              "HTML Quotation and Citation Elements",
              "HTML Comments, Colors, Links, and Images",
              "HTML Favicon, Tables, and Lists",
            ],
          },
          {
            day: "Day 5",
            tasks: [
              "HTML Block & Inline Elements",
              "HTML Classes & IDs",
              "HTML Iframes",
              "HTML Forms and Form Attributes",
            ],
          },
        ],
        miniProject: {
          name: "Mini Project 1: About Me Page",
          description:
            "Create a simple 'About Me' page with headings, paragraphs, and formatted text.",
        },
        deliverables: [
          "HTML file with proper document structure",
          "Use of various HTML elements (headings, paragraphs, lists)",
          "Images with alt text for accessibility",
          "Simple form with proper labels",
        ],
        resources: [
          {
            name: "W3Schools HTML Tutorial",
            url: "https://www.w3schools.com/html/html_intro.asp",
          },
          {
            name: "MDN HTML Guide",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
          },
        ],
        checklist: [
          "Proper DOCTYPE declaration",
          "Valid HTML structure with head and body",
          "Semantic use of headings",
          "Images with descriptive alt attributes",
          "Form with proper input labels",
        ],
      },
      {
        week: 2,
        title: "CSS Fundamentals",
        objectives: [
          "Learn CSS syntax, selectors, and specificity",
          "Master CSS colors, backgrounds, borders, margins, and padding",
          "Understand CSS text properties and fonts",
        ],
        dailyBreakdown: [
          {
            day: "Day 1-2",
            tasks: [
              "CSS Introduction and Syntax",
              "CSS Selectors and Colors",
              "CSS Backgrounds, Borders, Margins & Padding",
            ],
          },
          {
            day: "Day 3-4",
            tasks: [
              "CSS Text Properties and Fonts",
              "CSS Icons and Google Fonts",
              "CSS Links, Lists, and Display Properties",
            ],
          },
          {
            day: "Day 5",
            tasks: [
              "Box Model Concept",
              "CSS Position Property",
              "CSS Float & Clear, Overflow, Z-index",
            ],
          },
        ],
        miniProject: {
          name: "Mini Project 2: Stylish Resume Page",
          description:
            "Create a stylish resume page using CSS for styling and layout.",
        },
        deliverables: [
          "CSS file with organized styles",
          "Styled resume with proper typography",
          "Use of CSS box model properties",
          "Creative layout using positioning",
        ],
        resources: [
          {
            name: "W3Schools CSS Tutorial",
            url: "https://www.w3schools.com/css/css_intro.asp",
          },
          {
            name: "MDN CSS Basics",
            url: "https://developer.mozilla.org/en-US/docs/Learn/CSS",
          },
        ],
        checklist: [
          "CSS selectors properly used",
          "Box model applied correctly",
          "Typography with custom fonts",
          "Creative use of positioning",
          "Consistent spacing and alignment",
        ],
      },
      {
        week: 3,
        title: "Layouts & Responsive Design",
        objectives: [
          "Master CSS Flexbox and Grid layouts",
          "Implement responsive layouts with mobile-first design",
          "Learn media queries and responsive units",
        ],
        dailyBreakdown: [
          {
            day: "Day 1-2",
            tasks: [
              "Flex Container & Items",
              "Alignment & Justification",
              "Flexbox Layout Examples",
            ],
          },
          {
            day: "Day 3-4",
            tasks: [
              "Grid Container and Template Areas",
              "Responsive Grids",
              "Grid vs Flexbox comparison",
            ],
          },
          {
            day: "Day 5",
            tasks: [
              "Media Queries",
              "Mobile-First Design",
              "Responsive Units (%, em, rem, vw, vh)",
            ],
          },
        ],
        miniProject: {
          name: "Mini Project 3: Responsive Portfolio Page",
          description:
            "Create a responsive portfolio page using Flexbox and Grid with multiple breakpoints.",
        },
        deliverables: [
          "Responsive layout using Flexbox and Grid",
          "Multiple breakpoints for different devices",
          "Mobile-first approach implementation",
          "Gallery or project showcase section",
        ],
        resources: [
          {
            name: "CSS-Tricks Flexbox Guide",
            url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
          },
          {
            name: "CSS-Tricks Grid Guide",
            url: "https://css-tricks.com/snippets/css/complete-guide-grid/",
          },
          {
            name: "MDN Responsive Design",
            url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design",
          },
        ],
        checklist: [
          "Flexbox layouts implemented correctly",
          "CSS Grid layouts working",
          "Mobile-first approach used",
          "At least 3 breakpoints configured",
          "Content adapts to different screen sizes",
        ],
      },
    ],
  },
  1: {
    name: "Month 2: JavaScript Mastery",
    description:
      "Weeks 4-6: Learn JavaScript fundamentals, DOM manipulation, and API integration",
    weeks: [
      {
        week: 4,
        title: "JavaScript Basics",
        objectives: [
          "Master JavaScript syntax, variables, and operators",
          "Learn data types, functions, conditionals, and loops",
          "Understand ES6 features like let, const, and arrow functions",
        ],
        dailyBreakdown: [
          {
            day: "Day 1-2",
            tasks: [
              "JS Introduction and Syntax",
              "Variables, Operators, and Data Types",
              "Functions and Conditionals",
            ],
          },
          {
            day: "Day 3-4",
            tasks: [
              "Arrays & Objects",
              "Functions & Scope",
              "String & Array Methods",
              "ES6 Features (let, const, arrow functions)",
            ],
          },
          {
            day: "Day 5",
            tasks: ["Debugging with Chrome DevTools", "Best Coding Practices"],
          },
        ],
        miniProject: {
          name: "Mini Project 4: Calculator App",
          description:
            "Build a fully functional calculator app with basic arithmetic operations.",
        },
        deliverables: [
          "JavaScript file with organized functions",
          "Calculator with basic operations (+, -, *, /)",
          "Error handling for invalid inputs",
          "Clean and readable code structure",
        ],
        resources: [
          {
            name: "W3Schools JavaScript Tutorial",
            url: "https://www.w3schools.com/js/js_intro.asp",
          },
          { name: "JavaScript.info", url: "https://javascript.info/" },
        ],
        checklist: [
          "Variables properly declared with let/const",
          "Functions for each operation",
          "Error handling for edge cases",
          "Clean and readable code",
          "Calculator functions as expected",
        ],
      },
      {
        week: 5,
        title: "DOM & Event Handling",
        objectives: [
          "Master DOM manipulation and event handling",
          "Learn form validation and local storage",
          "Understand event listeners and delegation",
        ],
        dailyBreakdown: [
          {
            day: "Days 1-5",
            tasks: [
              "DOM Manipulation and Selecting Elements",
              "Event Listeners and Event Object",
              "Form Validation",
              "Local Storage",
              "Event Delegation",
            ],
          },
        ],
        miniProject: {
          name: "Mini Project 5: To-Do App with Dark Mode",
          description:
            "Create a to-do application with add/delete tasks functionality and dark mode toggle.",
        },
        deliverables: [
          "To-do app with add/remove tasks",
          "Dark mode toggle feature",
          "Data persistence with localStorage",
          "Form validation for inputs",
        ],
        resources: [
          {
            name: "MDN DOM Manipulation",
            url: "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model",
          },
          {
            name: "JavaScript.info Events",
            url: "https://javascript.info/events",
          },
        ],
        checklist: [
          "DOM selection and manipulation working",
          "Event listeners properly attached",
          "Form validation implemented",
          "localStorage for data persistence",
          "Dark mode toggle functional",
        ],
      },
      {
        week: 6,
        title: "APIs & Advanced JavaScript",
        objectives: [
          "Learn Fetch API and JSON handling",
          "Master async/await and error handling",
          "Understand ES6 modules and API integration",
        ],
        dailyBreakdown: [
          {
            day: "Days 1-5",
            tasks: [
              "Fetch API & JSON",
              "Async/Await",
              "Error Handling",
              "ES6 Modules",
              "API Integration",
            ],
          },
        ],
        miniProject: {
          name: "Mini Project 6: Weather App & GitHub User Finder",
          description:
            "Build a weather app using OpenWeather API and a GitHub user finder using GitHub API.",
        },
        deliverables: [
          "Weather app with current conditions display",
          "GitHub user finder with profile information",
          "Loading states and error handling",
          "Async/await for API calls",
        ],
        resources: [
          {
            name: "MDN Fetch API",
            url: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",
          },
          {
            name: "JavaScript.info Async",
            url: "https://javascript.info/async",
          },
        ],
        checklist: [
          "API data fetching working",
          "Error handling for failed requests",
          "Loading states display correctly",
          "Async/await used appropriately",
          "Data displayed in user-friendly format",
        ],
      },
    ],
  },
  2: {
    name: "Month 3: React Development",
    description:
      "Weeks 7-12: Learn React fundamentals, hooks, routing, and build a capstone project",
    weeks: [
      {
        week: 7,
        title: "React Fundamentals",
        objectives: [
          "Learn React components and JSX syntax",
          "Master props and state management with useState",
          "Understand component composition",
        ],
        dailyBreakdown: [
          {
            day: "Days 1-5",
            tasks: [
              "React Intro and Components",
              "JSX Syntax",
              "Props and State (useState Hook)",
              "Component Composition",
            ],
          },
        ],
        miniProject: {
          name: "Mini Project 7: Counter App & Color Switcher",
          description:
            "Build a counter application and a color switcher component using React hooks.",
        },
        deliverables: [
          "Counter app with increment/decrement functionality",
          "Color switcher with multiple theme options",
          "Reusable React components",
          "State management with useState",
        ],
        resources: [
          { name: "React Docs", url: "https://react.dev/learn" },
          {
            name: "React Hooks",
            url: "https://react.dev/reference/react/hooks",
          },
        ],
        checklist: [
          "Components are functional and reusable",
          "Props passed correctly between components",
          "State managed with useState hook",
          "Components update correctly on state change",
          "Clean and organized code structure",
        ],
      },
      {
        week: 8,
        title: "React Hooks & Routing",
        objectives: [
          "Master useEffect and custom hooks",
          "Learn React Router for multi-page applications",
          "Understand useEffect dependencies and cleanup",
        ],
        dailyBreakdown: [
          {
            day: "Days 1-5",
            tasks: [
              "useEffect Hook and Side Effects",
              "Custom Hooks Creation",
              "React Router (v6+)",
              "useReducer and useContext",
            ],
          },
        ],
        miniProject: {
          name: "Mini Project 8: Movie Search App & Recipe Finder",
          description:
            "Create a movie search app using OMDb API and a recipe finder app with routing.",
        },
        deliverables: [
          "Movie search with API integration",
          "Recipe finder with multiple pages",
          "Routing between different views",
          "Custom hooks for data fetching",
        ],
        resources: [
          { name: "React Router", url: "https://reactrouter.com/" },
          {
            name: "React useEffect",
            url: "https://react.dev/reference/react/useEffect",
          },
        ],
        checklist: [
          "useEffect for managing side effects",
          "Custom hooks for reusable logic",
          "React Router for navigation",
          "Components properly mounted/unmounted",
          "API data displayed correctly",
        ],
      },
      {
        week: 9,
        title: "Forms, APIs & State Management",
        objectives: [
          "Learn controlled inputs and form validation",
          "Master Context API for state management",
          "Understand data fetching and custom hooks",
        ],
        dailyBreakdown: [
          {
            day: "Days 1-5",
            tasks: [
              "Controlled Inputs and Form Validation",
              "Context API",
              "Fetching APIs",
              "Custom Hooks",
              "State Management Patterns",
            ],
          },
        ],
        miniProject: {
          name: "Mini Project 9: User Registration & Expense Tracker",
          description:
            "Build a user registration form with validation and an expense tracker application.",
        },
        deliverables: [
          "Registration form with validation",
          "Expense tracker with add/remove functionality",
          "Context API for state management",
          "Form data handling and validation",
        ],
        resources: [
          {
            name: "React Forms",
            url: "https://react.dev/reference/react-dom/components/form",
          },
          {
            name: "React Context",
            url: "https://react.dev/learn/passing-data-deeply-with-context",
          },
        ],
        checklist: [
          "Controlled components for forms",
          "Validation for user inputs",
          "Context API for state sharing",
          "Custom hooks for data management",
          "Forms submit and display data correctly",
        ],
      },
      {
        week: 10,
        title: "Advanced React & UI Libraries",
        objectives: [
          "Learn UI libraries like Tailwind CSS",
          "Understand performance optimization techniques",
          "Master React.memo and lazy loading",
        ],
        dailyBreakdown: [
          {
            day: "Days 1-5",
            tasks: [
              "UI Libraries (Tailwind CSS)",
              "Performance Optimization (React.memo)",
              "Lazy Loading and Code Splitting",
              "Component Optimization Techniques",
            ],
          },
        ],
        miniProject: {
          name: "Mini Project 10: Dashboard UI",
          description:
            "Create a responsive dashboard UI with multiple components and optimized performance.",
        },
        deliverables: [
          "Dashboard with multiple UI components",
          "Performance optimized with React.memo",
          "Lazy loading for components",
          "Responsive design for all devices",
        ],
        resources: [
          { name: "Tailwind CSS", url: "https://tailwindcss.com/" },
          {
            name: "React Performance",
            url: "https://react.dev/reference/react/memo",
          },
        ],
        checklist: [
          "UI components properly styled",
          "React.memo used for optimization",
          "Lazy loading implemented",
          "Responsive across all breakpoints",
          "Performance metrics improved",
        ],
      },
      {
        week: 11,
        title: "Testing & Deployment",
        objectives: [
          "Learn testing with Jest and React Testing Library",
          "Understand deployment processes",
          "Master testing best practices",
        ],
        dailyBreakdown: [
          {
            day: "Days 1-5",
            tasks: [
              "Testing (Jest + React Testing Library)",
              "Unit Testing Components",
              "Integration Testing",
              "Deployment (Vercel/Netlify)",
              "CI/CD Basics",
            ],
          },
        ],
        miniProject: {
          name: "Mini Project 11: React Portfolio",
          description:
            "Build a personal portfolio with testing coverage and deploy to Vercel or Netlify.",
        },
        deliverables: [
          "Portfolio with multiple sections",
          "Unit tests with Jest",
          "Component tests with Testing Library",
          "Deployed application with URL",
        ],
        resources: [
          { name: "Jest Testing", url: "https://jestjs.io/" },
          {
            name: "React Testing Library",
            url: "https://testing-library.com/docs/react-testing-library/intro/",
          },
          { name: "Vercel Deployment", url: "https://vercel.com/" },
        ],
        checklist: [
          "Unit tests written and passing",
          "Component tests implemented",
          "Test coverage metrics met",
          "Application deployed successfully",
          "Deployment URL accessible",
        ],
      },
      {
        week: 12,
        title: "Capstone Project",
        objectives: [
          "Complete a full-featured capstone project",
          "Apply all learned concepts in a real-world application",
          "Prepare professional presentation",
        ],
        dailyBreakdown: [
          {
            day: "Days 1-5",
            tasks: [
              "Project Planning and Scope Definition",
              "Implementation of Core Features",
              "Testing and Refinement",
              "Deployment and Presentation Preparation",
              "Documentation and Demo",
            ],
          },
        ],
        miniProject: {
          name: "Capstone Project: E-commerce Website",
          description:
            "Build a full-featured e-commerce website with product listings, cart functionality, and checkout process.",
        },
        deliverables: [
          "Full-featured e-commerce application",
          "Responsive UI with modern design",
          "Product listing and cart functionality",
          "Checkout process with form validation",
          "Deployed application with presentation",
        ],
        resources: [
          {
            name: "Project Planning",
            url: "https://www.atlassian.com/team-playbook/planning",
          },
          { name: "Deployment Best Practices", url: "https://12factor.net/" },
        ],
        checklist: [
          "Project scope clearly defined",
          "All core features implemented",
          "Responsive design across devices",
          "Application deployed and accessible",
          "Presentation prepared and practiced",
        ],
      },
      {
        week: 13,
        title: "AI Tools for Developer Productivity",
        objectives: [
          "Learn to use AI coding assistants responsibly",
          "Understand how to improve productivity with AI tools",
          "Practice using AI for code generation and debugging",
          "Recognize the limitations and ethical considerations of AI",
        ],
        dailyBreakdown: [
          {
            day: "Day 1",
            tasks: [
              "Introduction to AI Coding Assistants",
              "Setting up Cursor/Claude/ChatGPT for development",
              "Understanding responsible AI usage",
              "Ethical considerations in AI-assisted development",
            ],
          },
          {
            day: "Day 2",
            tasks: [
              "Using AI for code explanation and documentation",
              "Generating boilerplate code with AI",
              "Code refactoring suggestions",
              "Best practices for prompting AI",
            ],
          },
          {
            day: "Day 3",
            tasks: [
              "AI-assisted debugging techniques",
              "Using AI for error analysis",
              "Performance optimization suggestions",
              "Security considerations with AI-generated code",
            ],
          },
          {
            day: "Day 4",
            tasks: [
              "AI for learning new technologies",
              "Researching solutions with AI",
              "Code review and improvement suggestions",
              "Balancing AI assistance with independent problem-solving",
            ],
          },
          {
            day: "Day 5",
            tasks: [
              "Final project: Enhancing your capstone with AI tools",
              "Creating a personal AI workflow",
              "Documenting your AI usage experience",
              "Preparing for AI-integrated development in industry",
            ],
          },
        ],
        miniProject: {
          name: "AI-Enhanced Developer Workflow",
          description:
            "Create a personal development workflow that incorporates AI tools for code generation, debugging, and learning while maintaining critical thinking and problem-solving skills.",
        },
        deliverables: [
          "Documented AI workflow for development tasks",
          "Comparison of different AI tools (Cursor, Claude, ChatGPT)",
          "Enhanced capstone project using AI responsibly",
          "Reflection on AI usage in development",
          "Best practices guide for responsible AI usage",
        ],
        resources: [
          { name: "Cursor Documentation", url: "https://cursor.sh/docs" },
          { name: "OpenAI API Guide", url: "https://platform.openai.com/docs" },
          {
            name: "Anthropic Claude Documentation",
            url: "https://docs.anthropic.com/",
          },
          {
            name: "Responsible AI in Software Development",
            url: "https://ai.google/responsibilities/",
          },
        ],
        checklist: [
          "Understands when and how to use AI responsibly",
          "Can explain limitations of AI-generated code",
          "Maintains critical thinking and problem-solving skills",
          "Documents AI usage appropriately",
          "Balances AI assistance with independent work",
        ],
      },
    ],
  },
};

export default async function PhasePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const phaseId = Number.parseInt(id);

  const phase = phaseData[phaseId];

  if (!phase) {
    return (
      <main className="min-h-screen bg-background">
        <DashboardHeader />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <p className="text-center text-muted-foreground">Phase not found</p>
        </div>
      </main>
    );
  }

  const phaseColors: Record<number, string> = {
    0: "from-blue-500 to-blue-600",
    1: "from-yellow-500 to-yellow-600",
    2: "from-green-500 to-green-600",
  };

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

        <div
          className={`bg-gradient-to-r ${phaseColors[phaseId]} rounded-lg p-8 text-white mb-12`}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-3">{phase.name}</h1>
          <p className="text-base md:text-lg opacity-90">{phase.description}</p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Weekly Breakdown
          </h2>
          {phase.weeks.map((week) => (
            <WeeklyPlan key={week.week} week={week} phaseId={phaseId} />
          ))}
        </div>

        <div className="mt-12 pt-8 border-t flex justify-between gap-4">
          {phaseId > 0 && (
            <Link href={`/phase/${phaseId - 1}`}>
              <Button variant="outline" className="gap-2 bg-transparent">
                <ChevronLeft className="w-4 h-4" /> Previous Phase
              </Button>
            </Link>
          )}
          {phaseId < 2 && (
            <Link
              href={`/phase/${phaseId + 1}`}
              className={phaseId === 0 ? "ml-auto" : ""}
            >
              <Button className="gap-2">
                Next Phase <ChevronRight className="w-4 h-4" />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </main>
  );
}
