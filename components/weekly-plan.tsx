"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

interface WeeklyPlanProps {
  week: {
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
  };
  phaseId: number;
}

export function WeeklyPlan({ week, phaseId }: WeeklyPlanProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [checklistItems, setChecklistItems] = useState<boolean[]>([]);

  // Initialize checklist items from localStorage or default to false
  useEffect(() => {
    const storedChecklist = localStorage.getItem(
      `checklist-${phaseId}-${week.week}`
    );
    if (storedChecklist) {
      setChecklistItems(JSON.parse(storedChecklist));
    } else {
      setChecklistItems(Array(week.checklist.length).fill(false));
    }
  }, [phaseId, week.week, week.checklist.length]);

  // Save checklist items to localStorage whenever they change
  useEffect(() => {
    if (checklistItems.length > 0) {
      localStorage.setItem(
        `checklist-${phaseId}-${week.week}`,
        JSON.stringify(checklistItems)
      );
    }
  }, [checklistItems, phaseId, week.week]);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const handleCheckboxChange = (index: number) => {
    const newChecklistItems = [...checklistItems];
    newChecklistItems[index] = !newChecklistItems[index];
    setChecklistItems(newChecklistItems);
  };

  return (
    <Card className="cursor-pointer hover:shadow-lg transition-shadow overflow-hidden">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <CardTitle className="text-lg md:text-xl">
              {week.week === 0 ? "Setup:" : `Week ${week.week}:`} {week.title}
            </CardTitle>
          </div>
          <ChevronRight className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-1" />
        </div>
      </CardHeader>
      <CardContent className="border-t space-y-6 pt-6">
        <div
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onClick={() => toggleSection("objectives")}
        >
          <h4 className="font-semibold text-foreground flex items-center gap-3 mb-2">
            <ChevronDown
              className={`w-4 h-4 transition-transform flex-shrink-0 ${
                expandedSection === "objectives" ? "rotate-180" : ""
              }`}
            />
            🎯 Learning Objectives
          </h4>
          {expandedSection === "objectives" && (
            <ul className="mt-3 space-y-2 ml-7">
              {week.objectives.map((obj) => (
                <li key={obj} className="text-sm text-muted-foreground">
                  • {obj}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onClick={() => toggleSection("daily")}
        >
          <h4 className="font-semibold text-foreground flex items-center gap-3 mb-2">
            <ChevronDown
              className={`w-4 h-4 transition-transform flex-shrink-0 ${
                expandedSection === "daily" ? "rotate-180" : ""
              }`}
            />
            📅 Daily Breakdown
          </h4>
          {expandedSection === "daily" && (
            <div className="mt-3 ml-7 space-y-3">
              {week.dailyBreakdown.map((day) => (
                <div key={day.day} className="text-sm">
                  <p className="font-medium text-foreground mb-2">{day.day}</p>
                  <ul className="ml-4 space-y-1 text-muted-foreground">
                    {day.tasks.map((task) => (
                      <li key={task}>• {task}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>

        <div
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onClick={() => toggleSection("project")}
        >
          <h4 className="font-semibold text-foreground flex items-center gap-3 mb-2">
            <ChevronDown
              className={`w-4 h-4 transition-transform flex-shrink-0 ${
                expandedSection === "project" ? "rotate-180" : ""
              }`}
            />
            🚀 Mini Project
          </h4>
          {expandedSection === "project" && (
            <div className="mt-3 ml-7 space-y-2">
              <p className="font-medium text-foreground">
                {week.miniProject.name}
              </p>
              <p className="text-sm text-muted-foreground">
                {week.miniProject.description}
              </p>
            </div>
          )}
        </div>

        <div
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onClick={() => toggleSection("deliverables")}
        >
          <h4 className="font-semibold text-foreground flex items-center gap-3 mb-2">
            <ChevronDown
              className={`w-4 h-4 transition-transform flex-shrink-0 ${
                expandedSection === "deliverables" ? "rotate-180" : ""
              }`}
            />
            📦 Deliverables
          </h4>
          {expandedSection === "deliverables" && (
            <ul className="mt-3 ml-7 space-y-2">
              {week.deliverables.map((item) => (
                <li key={item} className="text-sm text-muted-foreground">
                  ✓ {item}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onClick={() => toggleSection("resources")}
        >
          <h4 className="font-semibold text-foreground flex items-center gap-3 mb-2">
            <ChevronDown
              className={`w-4 h-4 transition-transform flex-shrink-0 ${
                expandedSection === "resources" ? "rotate-180" : ""
              }`}
            />
            📚 Resources
          </h4>
          {expandedSection === "resources" && (
            <div className="mt-3 ml-7 space-y-2">
              {week.resources.map((resource) => (
                <a
                  key={resource.name}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-primary hover:underline"
                >
                  🔗 {resource.name}
                </a>
              ))}
            </div>
          )}
        </div>

        <div
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onClick={(e) => {
            e.stopPropagation();
            toggleSection("checklist");
          }}
        >
          <h4 className="font-semibold text-foreground flex items-center gap-3 mb-2">
            <ChevronDown
              className={`w-4 h-4 transition-transform flex-shrink-0 ${
                expandedSection === "checklist" ? "rotate-180" : ""
              }`}
            />
            ✅ Completion Checklist
          </h4>
          {expandedSection === "checklist" && (
            <ul className="mt-3 ml-7 space-y-2">
              {week.checklist.map((item, index) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-muted-foreground"
                >
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-gray-300 cursor-pointer"
                    checked={checklistItems[index] || false}
                    onChange={() => handleCheckboxChange(index)}
                    onClick={(e) => e.stopPropagation()}
                  />
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
