/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Default Format - How comment prefixes are formatted. Override per-paste with Cmd+B. */
  "defaultFormat": "badge" | "plain"
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `insert-comment` command */
  export type InsertComment = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `insert-comment` command */
  export type InsertComment = {}
}

