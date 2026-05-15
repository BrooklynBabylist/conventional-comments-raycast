import {
  Action,
  ActionPanel,
  Icon,
  List,
  getPreferenceValues,
} from "@raycast/api";
import { LABELS, formatComment, type Format } from "./data";
import { DecoratorList } from "./components/DecoratorList";

interface Preferences {
  defaultFormat: Format;
}

const OTHER: Record<Format, Format> = { badge: "plain", plain: "badge" };
const LABEL: Record<Format, string> = { badge: "Badge", plain: "Plain" };

export default function InsertComment() {
  const { defaultFormat } = getPreferenceValues<Preferences>();
  const other = OTHER[defaultFormat];

  return (
    <List searchBarPlaceholder="Search labels...">
      {LABELS.map((label) => (
        <List.Item
          key={label.name}
          title={label.name}
          subtitle={label.description}
          icon={{ source: label.icon, tintColor: label.color }}
          actions={
            <ActionPanel>
              <Action.Push
                title="Pick Decorator"
                icon={Icon.ArrowRight}
                target={<DecoratorList label={label.name} />}
              />
              <Action.Paste
                title={`Insert Without Decorator (${LABEL[defaultFormat]})`}
                content={formatComment(label.name, "none", defaultFormat)}
                shortcut={{ modifiers: ["cmd"], key: "return" }}
              />
              <Action.Paste
                title={`Insert Without Decorator (${LABEL[other]})`}
                content={formatComment(label.name, "none", other)}
                shortcut={{ modifiers: ["cmd"], key: "b" }}
              />
              <Action.CopyToClipboard
                title={`Copy Without Decorator (${LABEL[defaultFormat]})`}
                content={formatComment(label.name, "none", defaultFormat)}
                shortcut={{ modifiers: ["cmd", "shift"], key: "c" }}
              />
              <Action.CopyToClipboard
                title={`Copy Without Decorator (${LABEL[other]})`}
                content={formatComment(label.name, "none", other)}
                shortcut={{ modifiers: ["cmd", "shift"], key: "b" }}
              />
            </ActionPanel>
          }
        />
      ))}
    </List>
  );
}
