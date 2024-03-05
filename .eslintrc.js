module.exports = {
  extends: ["next", "prettier", "next/core-web-vitals"],
  plugins: ["react", "react-hooks", "prettier"],
  rules: {
    "no-unused-vars": [
      "error",
      {
        args: "after-used",
        caughtErrors: "none",
        ignoreRestSiblings: true,
        vars: "all"
      }
    ],
    semi: 0,
    "prefer-const": "error",
    "react-hooks/exhaustive-deps": "error"
  }
}
