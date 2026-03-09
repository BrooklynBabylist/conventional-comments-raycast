# Conventional Comments for Raycast

A [Raycast](https://raycast.com) extension that lets you quickly insert [Conventional Comments](https://conventionalcomments.org/) prefixes into any text field.

Pick a label, pick an optional decorator, and the formatted prefix gets pasted into the frontmost app.

## Labels

praise, nitpick, suggestion, issue, todo, question, thought, chore, note, typo, polish

## Decorators

non-blocking, blocking, if-minor

## Output format

```
`suggestion (non-blocking):` your comment here
```

## Install

Requires [Raycast](https://raycast.com) and Node.js.

```bash
git clone git@github.com:brooklynblackshear/conventional-comments-raycast.git
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
- `Cmd+Enter` on a label → paste immediately without a decorator
- `Cmd+Shift+C` → copy to clipboard instead of pasting

## Updating

Pull the latest changes and re-run the setup script:

```bash
git pull && ./setup.sh
```
