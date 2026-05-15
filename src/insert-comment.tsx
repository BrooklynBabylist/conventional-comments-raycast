import {
  Action,
  ActionPanel,
  Icon,
  List,
  getPreferenceValues,
} from "@raycast/api";
import { useState } from "react";
import {
  FORMAT_LABEL,
  LABELS,
  OTHER_FORMAT,
  formatBadge,
  formatComment,
  formatPlain,
  type Format,
} from "./data";
import { DecoratorList } from "./components/DecoratorList";

interface Preferences {
  defaultFormat: Format;
}

function previewMarkdown(label: string): string {
  return [
    "## Preview",
    "",
    formatBadge(label, "none").trim(),
    "",
    "## Plain text",
    "",
    "```",
    formatPlain(label, "none").trim(),
    "```",
  ].join("\n");
}

export default function InsertComment() {
  const { defaultFormat } = getPreferenceValues<Preferences>();
  const other = OTHER_FORMAT[defaultFormat];
  const [showDetail, setShowDetail] = useState(false);

  return (
    <List searchBarPlaceholder="Search labels..." isShowingDetail={showDetail}>
      {LABELS.map((label) => (
        <List.Item
          key={label.name}
          title={label.name}
          subtitle={showDetail ? undefined : label.description}
          icon={{ source: label.icon, tintColor: label.color }}
          detail={<List.Item.Detail markdown={previewMarkdown(label.name)} />}
          actions={
            <ActionPanel>
              <Action.Push
                title="Pick Decorator"
                icon={Icon.ArrowRight}
                target={<DecoratorList label={label.name} />}
              />
              <Action.Paste
                title={`Insert Without Decorator (${FORMAT_LABEL[defaultFormat]})`}
                content={formatComment(label.name, "none", defaultFormat)}
                shortcut={{ modifiers: ["cmd"], key: "return" }}
              />
              <Action.Paste
                title={`Insert Without Decorator (${FORMAT_LABEL[other]})`}
                content={formatComment(label.name, "none", other)}
                shortcut={{ modifiers: ["cmd"], key: "b" }}
              />
              <Action.CopyToClipboard
                title={`Copy Without Decorator (${FORMAT_LABEL[defaultFormat]})`}
                content={formatComment(label.name, "none", defaultFormat)}
                shortcut={{ modifiers: ["cmd", "shift"], key: "c" }}
              />
              <Action.CopyToClipboard
                title={`Copy Without Decorator (${FORMAT_LABEL[other]})`}
                content={formatComment(label.name, "none", other)}
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
