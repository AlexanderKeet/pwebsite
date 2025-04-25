import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Make all errors warnings
      "no-unused-vars": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
      // Add more rules here if you want to relax others
    },
  },
];

export default eslintConfig;
