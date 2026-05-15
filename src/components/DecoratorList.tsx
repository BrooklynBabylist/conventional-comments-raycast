import {
  Action,
  ActionPanel,
  Icon,
  List,
  getPreferenceValues,
} from "@raycast/api";
import { DECORATORS, formatComment, type Format } from "../data";

interface Preferences {
  defaultFormat: Format;
}

const OTHER: Record<Format, Format> = { badge: "plain", plain: "badge" };
const LABEL: Record<Format, string> = { badge: "Badge", plain: "Plain" };

export function DecoratorList({ label }: { label: string }) {
  const { defaultFormat } = getPreferenceValues<Preferences>();
  const other = OTHER[defaultFormat];

  return (
    <List searchBarPlaceholder="Pick a decorator...">
      {DECORATORS.map((dec) => (
        <List.Item
          key={dec.name}
          title={dec.name === "none" ? "No decorator" : dec.name}
          subtitle={dec.description}
          icon={dec.name === "none" ? Icon.Minus : Icon.Tag}
          accessories={[
            { text: formatComment(label, dec.name, defaultFormat) },
          ]}
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
            </ActionPanel>
          }
        />
      ))}
    </List>
  );
}
