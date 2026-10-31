// Compiles only if the shared tsconfig resolves `${configDir}` and ships the
// ES2024 + Set-method libs (TypeScript >= 5.9).
export const union = new Set([1]).union(new Set([2]));
