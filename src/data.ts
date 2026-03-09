import { Color, Icon } from "@raycast/api";

export interface Label {
  name: string;
  description: string;
  icon: Icon;
  color: Color;
}

export interface Decorator {
  name: string;
  description: string;
}

export const LABELS: Label[] = [
  {
    name: "praise",
    description: "Highlights something positive. At least one per review.",
    icon: Icon.Star,
    color: Color.Green,
  },
  {
    name: "nitpick",
    description: "Trivial, preference-based requests. Non-blocking by default.",
    icon: Icon.Dot,
    color: Color.Yellow,
  },
  {
    name: "suggestion",
    description: "Proposes improvements to the current subject.",
    icon: Icon.LightBulb,
    color: Color.Blue,
  },
  {
    name: "issue",
    description: "Highlights a specific problem that needs to be addressed.",
    icon: Icon.ExclamationMark,
    color: Color.Red,
  },
  {
    name: "todo",
    description: "Small, necessary changes that must happen.",
    icon: Icon.Checkmark,
    color: Color.Orange,
  },
  {
    name: "question",
    description: "Potential concern phrased as a question.",
    icon: Icon.QuestionMark,
    color: Color.Purple,
  },
  {
    name: "thought",
    description:
      "Ideas sparked by the review. Non-blocking, good for mentoring.",
    icon: Icon.Bubble,
    color: Color.Magenta,
  },
  {
    name: "chore",
    description: "Simple tasks that must be done before acceptance.",
    icon: Icon.Hammer,
    color: Color.Orange,
  },
  {
    name: "note",
    description: "Non-blocking observations worth highlighting.",
    icon: Icon.Pencil,
    color: Color.SecondaryText,
  },
  {
    name: "typo",
    description: "A misspelling or grammatical error that should be fixed.",
    icon: Icon.Text,
    color: Color.Yellow,
  },
  {
    name: "polish",
    description: "Refinement to improve quality. Like a suggestion.",
    icon: Icon.Wand,
    color: Color.Blue,
  },
];

export const DECORATORS: Decorator[] = [
  {
    name: "none",
    description: "No decorator — just the label.",
  },
  {
    name: "non-blocking",
    description: "Should not prevent merge/acceptance.",
  },
  {
    name: "blocking",
    description: "Must be resolved before merge/acceptance.",
  },
  {
    name: "if-minor",
    description: "Resolve only if the fix is trivial.",
  },
];

export function formatComment(label: string, decorator: string): string {
  if (decorator === "none") {
    return `\`${label}:\` `;
  }
  return `\`${label} (${decorator}):\` `;
}
