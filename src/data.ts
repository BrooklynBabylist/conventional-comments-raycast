import { Color, Icon } from "@raycast/api";

export type Format = "badge" | "plain";

export const OTHER_FORMAT: Record<Format, Format> = {
  badge: "plain",
  plain: "badge",
};

export const FORMAT_LABEL: Record<Format, string> = {
  badge: "Badge",
  plain: "Plain",
};

export interface Label {
  name: string;
  description: string;
  icon: Icon;
  color: Color;
  hex: string;
}

export interface Decorator {
  name: string;
  description: string;
  hex: string;
}

export const LABELS: Label[] = [
  {
    name: "praise",
    description: "Highlights something positive. At least one per review.",
    icon: Icon.Star,
    color: Color.Green,
    hex: "28A745", // green (matches pullpo)
  },
  {
    name: "nitpick",
    description: "Trivial, preference-based requests. Non-blocking by default.",
    icon: Icon.Dot,
    color: Color.Yellow,
    hex: "F59E0B", // amber-500
  },
  {
    name: "suggestion",
    description: "Proposes improvements to the current subject.",
    icon: Icon.LightBulb,
    color: Color.Blue,
    hex: "3B82F6", // blue-500
  },
  {
    name: "issue",
    description: "Highlights a specific problem that needs to be addressed.",
    icon: Icon.ExclamationMark,
    color: Color.Red,
    hex: "EF4444", // red-500
  },
  {
    name: "todo",
    description: "Small, necessary changes that must happen.",
    icon: Icon.Checkmark,
    color: Color.Magenta,
    hex: "E879F9", // fuchsia-400
  },
  {
    name: "question",
    description: "Potential concern phrased as a question.",
    icon: Icon.QuestionMark,
    color: Color.Purple,
    hex: "8B5CF6", // violet-500
  },
  {
    name: "thought",
    description:
      "Ideas sparked by the review. Non-blocking, good for mentoring.",
    icon: Icon.Bubble,
    color: Color.SecondaryText,
    hex: "6B7280", // gray-500
  },
  {
    name: "chore",
    description: "Simple tasks that must be done before acceptance.",
    icon: Icon.Hammer,
    color: Color.Orange,
    hex: "F97316", // orange-500
  },
  {
    name: "note",
    description: "Non-blocking observations worth highlighting.",
    icon: Icon.Pencil,
    color: Color.SecondaryText,
    hex: "78716C", // stone-500
  },
  {
    name: "typo",
    description: "A misspelling or grammatical error that should be fixed.",
    icon: Icon.Text,
    color: Color.Yellow,
    hex: "84CC16", // lime-500
  },
  {
    name: "polish",
    description: "Refinement to improve quality. Like a suggestion.",
    icon: Icon.Wand,
    color: Color.Magenta,
    hex: "EC4899", // pink-500
  },
];

export const DECORATORS: Decorator[] = [
  {
    name: "none",
    description: "No decorator — just the label.",
    hex: "",
  },
  {
    name: "non-blocking",
    description: "Should not prevent merge/acceptance.",
    hex: "9CA3AF", // gray-400
  },
  {
    name: "blocking",
    description: "Must be resolved before merge/acceptance.",
    hex: "374151", // gray-700
  },
  {
    name: "if-minor",
    description: "Resolve only if the fix is trivial.",
    hex: "14B8A6", // teal-500
  },
];

// shields.io requires `-` → `--` and `_` → `__` before URL encoding so dashes
// in values like `non-blocking` survive the parser.
function encodeBadgeSegment(value: string): string {
  return encodeURIComponent(value.replace(/-/g, "--").replace(/_/g, "__"));
}

function findLabel(name: string): Label | undefined {
  return LABELS.find((l) => l.name === name);
}

function findDecorator(name: string): Decorator | undefined {
  return DECORATORS.find((d) => d.name === name);
}

export function formatPlain(label: string, decorator: string): string {
  if (decorator === "none") {
    return `\`${label}:\` `;
  }
  return `\`${label} (${decorator}):\` `;
}

export function formatBadge(label: string, decorator: string): string {
  const labelHex = findLabel(label)?.hex ?? "6B7280";
  const encodedLabel = encodeBadgeSegment(label);

  if (decorator === "none") {
    const url = `https://img.shields.io/badge/${encodedLabel}-${labelHex}`;
    return `![${label}](${url})\n`;
  }

  const decoratorHex = findDecorator(decorator)?.hex || "9CA3AF";
  const encodedDecorator = encodeBadgeSegment(decorator);
  const url = `https://img.shields.io/badge/${encodedLabel}-${encodedDecorator}-${decoratorHex}?labelColor=${labelHex}`;
  return `![${label} (${decorator})](${url})\n`;
}

export function formatComment(
  label: string,
  decorator: string,
  format: Format,
): string {
  return format === "badge"
    ? formatBadge(label, decorator)
    : formatPlain(label, decorator);
}
