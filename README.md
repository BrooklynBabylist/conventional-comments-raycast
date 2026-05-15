# Conventional Comments for Raycast

A [Raycast](https://raycast.com) extension that lets you quickly insert [Conventional Comments](https://conventionalcomments.org/) prefixes into any text field.

Pick a label, pick an optional decorator, and the formatted prefix gets pasted into the frontmost app. Output renders as inline [shields.io](https://shields.io) badges in any markdown surface that supports images (GitHub, GitLab, Graphite, etc.) or as plain text — your choice.

## Labels

praise, nitpick, suggestion, issue, todo, question, thought, chore, note, typo, polish

## Decorators

non-blocking, blocking, if-minor

## Output formats

**Badge** (default — renders inline in Graphite/GitHub/GitLab):

```markdown
![suggestion (non-blocking)](https://img.shields.io/badge/suggestion-non--blocking-9CA3AF?labelColor=3B82F6)
your comment here
```

**Plain text** (fallback for surfaces that don't render images):

```text
`suggestion (non-blocking):` your comment here
```

Set your default in Raycast preferences (`Default Format`). Override per-paste with `Cmd+B`.

## Install

Requires [Raycast](https://raycast.com) and Node.js.

```bash
git clone git@github.com:BrooklynBabylist/conventional-comments-raycast.git
cd conventional-comments-raycast
./setup.sh
```

Then open Raycast and search for **"Insert Conventional Comment"**.

## Usage

1. Trigger the command (assign a hotkey in Raycast preferences for fastest access)
2. Pick a label (e.g., suggestion, nitpick, praise)
3. Pick a decorator (non-blocking, blocking, if-minor, or none)
4. The formatted prefix is pasted into your active text field

**Shortcuts:**

- `Enter` on a label → pick a decorator
- `Cmd+Enter` on a label → paste immediately without a decorator (preferred format)
- `Cmd+B` → paste in the _other_ format (badge ↔ plain)
- `Cmd+Shift+C` → copy in preferred format instead of pasting
- `Cmd+Shift+B` → copy in the other format
- `Cmd+I` → toggle a preview panel showing the rendered badge and plain text side-by-side

## Updating

Pull the latest changes and re-run the setup script:

```bash
git pull && ./setup.sh
```
