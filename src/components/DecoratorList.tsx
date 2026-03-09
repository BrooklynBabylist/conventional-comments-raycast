import { Action, ActionPanel, Icon, List } from "@raycast/api";
import { DECORATORS, formatComment } from "../data";

export function DecoratorList({ label }: { label: string }) {
  return (
    <List searchBarPlaceholder="Pick a decorator...">
      {DECORATORS.map((dec) => (
        <List.Item
          key={dec.name}
          title={dec.name === "none" ? "No decorator" : dec.name}
          subtitle={dec.description}
          icon={dec.name === "none" ? Icon.Minus : Icon.Tag}
          accessories={[{ text: formatComment(label, dec.name) }]}
          actions={
            <ActionPanel>
              <Action.Paste
                title="Insert Comment Prefix"
                content={formatComment(label, dec.name)}
              />
              <Action.CopyToClipboard
                title="Copy Comment Prefix"
                content={formatComment(label, dec.name)}
                shortcut={{ modifiers: ["cmd", "shift"], key: "c" }}
              />
            </ActionPanel>
          }
        />
      ))}
    </List>
  );
}
