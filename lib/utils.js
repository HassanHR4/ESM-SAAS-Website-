// esm/lib/utils.js

/**
 * Combine class names conditionally.
 * Example:
 *   cn("btn", isActive && "btn-active")
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

/**
 * Format numbers with commas.
 * Example:
 *   formatNumber(20000) -> "20,000"
 */
export function formatNumber(num) {
  if (num === null || num === undefined) return "";
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/**
 * Capitalize the first letter of a string.
 * Example:
 *   capitalize("hello") -> "Hello"
 */
export function capitalize(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Generate a random ID string.
 * Example:
 *   randomId() -> "id-xy12k9"
 */
export function randomId(prefix = "id") {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
}
