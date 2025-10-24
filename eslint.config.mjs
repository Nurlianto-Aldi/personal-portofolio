import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals.js";
import nextTs from "eslint-config-next/typescript.js";
import tsPlugin from "@typescript-eslint/eslint-plugin";

const eslintConfig = defineConfig([
  nextVitals,
  { ...nextTs, plugins: { "@typescript-eslint": tsPlugin } },
  // Override default ignores of eslint-config-next.
  globalIgnores(
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts"
  ),
]);

export default eslintConfig;
