import {
  Action,
  ActionPanel,
  Icon,
  List,
  getPreferenceValues,
} from "@raycast/api";
import { useState } from "react";
import {
  DECORATORS,
  formatBadge,
  formatComment,
  formatPlain,
  type Format,
} from "../data";

interface Preferences {
  defaultFormat: Format;
}

const OTHER: Record<Format, Format> = { badge: "plain", plain: "badge" };
const LABEL: Record<Format, string> = { badge: "Badge", plain: "Plain" };

function previewMarkdown(label: string, decorator: string): string {
  return [
    "## Preview",
    "",
    formatBadge(label, decorator).trim(),
    "",
    "## Plain text",
    "",
    "```",
    formatPlain(label, decorator).trim(),
    "```",
  ].join("\n");
}

export function DecoratorList({ label }: { label: string }) {
  const { defaultFormat } = getPreferenceValues<Preferences>();
  const other = OTHER[defaultFormat];
  const [showDetail, setShowDetail] = useState(false);

  return (
    <List
      searchBarPlaceholder="Pick a decorator..."
      isShowingDetail={showDetail}
    >
      {DECORATORS.map((dec) => (
        <List.Item
          key={dec.name}
          title={dec.name === "none" ? "No decorator" : dec.name}
          subtitle={showDetail ? undefined : dec.description}
          icon={dec.name === "none" ? Icon.Minus : Icon.Tag}
          accessories={
            showDetail
              ? undefined
              : [{ text: formatComment(label, dec.name, defaultFormat) }]
          }
          detail={
            <List.Item.Detail markdown={previewMarkdown(label, dec.name)} />
          }
          actions={
            <ActionPanel>
              <Action.Paste
                title={`Insert Comment Prefix (${LABEL[defaultFormat]})`}
                content={formatComment(label, dec.name, defaultFormat)}
              />
              <Action.Paste
                title={`Insert Comment Prefix (${LABEL[other]})`}
                content={formatComment(label, dec.name, other)}
                shortcut={{ modifiers: ["cmd"], key: "b" }}
              />
              <Action.CopyToClipboard
                title={`Copy Comment Prefix (${LABEL[defaultFormat]})`}
                content={formatComment(label, dec.name, defaultFormat)}
                shortcut={{ modifiers: ["cmd", "shift"], key: "c" }}
              />
              <Action.CopyToClipboard
                title={`Copy Comment Prefix (${LABEL[other]})`}
                content={formatComment(label, dec.name, other)}
                shortcut={{ modifiers: ["cmd", "shift"], key: "b" }}
              />
              <Action
                title={showDetail ? "Hide Preview" : "Show Preview"}
                icon={Icon.Eye}
                onAction={() => setShowDetail((d) => !d)}
                shortcut={{ modifiers: ["cmd"], key: "i" }}
              />
            </ActionPanel>
          }
        />
      ))}
    </List>
  );
}
