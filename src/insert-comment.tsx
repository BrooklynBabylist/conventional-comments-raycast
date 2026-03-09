import { Action, ActionPanel, Icon, List } from "@raycast/api";
import { LABELS, DECORATORS, formatComment } from "./data";
import { DecoratorList } from "./components/DecoratorList";

export default function InsertComment() {
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
                title="Insert Without Decorator"
                content={formatComment(label.name, "none")}
                shortcut={{ modifiers: ["cmd"], key: "return" }}
              />
              <Action.CopyToClipboard
                title="Copy Without Decorator"
                content={formatComment(label.name, "none")}
                shortcut={{ modifiers: ["cmd", "shift"], key: "c" }}
              />
            </ActionPanel>
          }
        />
      ))}
    </List>
  );
}
