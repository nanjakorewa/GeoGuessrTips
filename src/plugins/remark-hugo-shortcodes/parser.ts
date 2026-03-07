/**
 * Parser for Hugo shortcode syntax.
 *
 * Handles two forms:
 *   {{% shortcode "arg1" arg2 %}}       (percent, renders inner markdown)
 *   {{< shortcode "arg1" arg2 >}}       (angle, raw inner content)
 *
 * And both self-closing (inline) and paired (block) variants:
 *   Self-closing: {{% name args %}}
 *   Paired:       {{% name args %}}...inner...{{% /name %}}
 */

/** Parsed representation of a shortcode invocation */
export interface ShortcodeInvocation {
  name: string;
  args: string[];
  inner: string;
  raw: string; // the full matched text
  isBlock: boolean;
}

/**
 * Parse positional arguments from a shortcode argument string.
 * Handles both quoted ("arg with spaces") and unquoted (arg) values.
 */
export function parseArgs(argString: string): string[] {
  const args: string[] = [];
  const regex = /"([^"]*)"|'([^']*)'|(\S+)/g;
  let match;
  while ((match = regex.exec(argString.trim())) !== null) {
    args.push(match[1] ?? match[2] ?? match[3]);
  }
  return args;
}

/**
 * Build regex for a paired (block) shortcode: {{% name args %}}...{{% /name %}}
 * Handles both {% and <> delimiters.
 * Uses non-greedy matching for inner content.
 */
function buildBlockRegex(name: string): RegExp {
  // Match opening tag with any args, inner content, and closing tag
  return new RegExp(
    `\\{\\{[%<]\\s*${name}((?:\\s+"[^"]*"|\\s+'[^']*'|\\s+[^%>}\\s]+)*?)\\s*[%>]\\}\\}` +
      `([\\s\\S]*?)` +
      `\\{\\{[%<]\\s*/${name}\\s*[%>]\\}\\}`,
    "g"
  );
}

/**
 * Build regex for a self-closing (inline) shortcode: {{% name args %}}
 * Must NOT be followed by content and a closing tag (to avoid matching blocks).
 */
function buildInlineRegex(name: string): RegExp {
  return new RegExp(
    `\\{\\{[%<]\\s*${name}((?:\\s+"[^"]*"|\\s+'[^']*'|\\s+[^%>}\\s]+)*?)\\s*[%>]\\}\\}`,
    "g"
  );
}

/**
 * Process all occurrences of a paired (block) shortcode in text.
 * Returns the text with all matches replaced by the handler's output.
 */
export function processBlockShortcode(
  text: string,
  name: string,
  handler: (args: string[], inner: string) => string
): string {
  const regex = buildBlockRegex(name);
  return text.replace(regex, (_match, argStr, inner) => {
    const args = parseArgs(argStr || "");
    return handler(args, inner);
  });
}

/**
 * Process all occurrences of a self-closing (inline) shortcode in text.
 * Important: call this AFTER processBlockShortcode for the same name,
 * or else inline regex will match opening tags of block shortcodes.
 */
export function processInlineShortcode(
  text: string,
  name: string,
  handler: (args: string[]) => string
): string {
  const regex = buildInlineRegex(name);
  return text.replace(regex, (_match, argStr) => {
    const args = parseArgs(argStr || "");
    return handler(args);
  });
}
