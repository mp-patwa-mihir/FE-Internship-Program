"use client";

import Link from "next/link";
import { Rocket } from "lucide-react";
import { useEffect, useState } from "react";

// Total checklist items across the entire 3-month program (13 weeks × 5 items each)
const totalChecklistItems = 65;

export default function DashboardHeader() {
  const [overallProgress, setOverallProgress] = useState(0);

  // Calculate overall progress from localStorage based on the full 3-month program
  useEffect(() => {
    const calculateProgress = () => {
      let totalChecked = 0;

      // Loop through all possible checklist items in localStorage
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith("checklist-")) {
          const checklist = JSON.parse(localStorage.getItem(key) || "[]");
          totalChecked += checklist.filter((item: boolean) => item).length;
        }
      }

      // Calculate progress as a percentage of total possible items
      const progress =
        totalChecklistItems > 0
          ? Math.round((totalChecked / totalChecklistItems) * 100)
          : 0;
      setOverallProgress(progress);
    };

    calculateProgress();

    // Listen for changes in localStorage
    const handleStorageChange = () => {
      calculateProgress();
    };

    window.addEventListener("storage", handleStorageChange);
    // Also check periodically in case of same-window changes
    const interval = setInterval(calculateProgress, 1000);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      clearInterval(interval);
    };
  }, []);

  return (
    <header className="bg-gradient-to-r from-primary to-secondary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-primary-foreground/20 rounded-lg">
            <Rocket className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold">Mihir's Internship Program</h1>
            <div className="mt-2">
              <div className="flex justify-between text-sm mb-1">
                <span>Program Progress</span>
                <span>{overallProgress}%</span>
              </div>
              <div className="w-full bg-primary-foreground/20 rounded-full h-2.5">
                <div
                  className="bg-primary-foreground h-2.5 rounded-full transition-all duration-300 ease-in-out"
                  style={{ width: `${overallProgress}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-primary-foreground/90 text-lg max-w-2xl mb-4">
          A comprehensive 3-month frontend development training program covering
          HTML, CSS, JavaScript, and React.js. Follow a structured learning path
          with hands-on projects and real-world applications.
        </p>
        <nav className="flex gap-4 flex-wrap">
          <Link
            href="/"
            className="px-4 py-2 bg-primary-foreground/20 rounded-lg hover:bg-primary-foreground/30 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/docs"
            className="px-4 py-2 bg-primary-foreground/20 rounded-lg hover:bg-primary-foreground/30 transition-colors"
          >
            Documentation
          </Link>
          <Link
            href="/resources"
            className="px-4 py-2 bg-primary-foreground/20 rounded-lg hover:bg-primary-foreground/30 transition-colors"
          >
            Resources
          </Link>
        </nav>
      </div>
    </header>
  );
}
