﻿module.exports = {
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint"],
  "parserOptions": {
    "project": "./tsconfig.json"
  },
  "extends": [
    "react-app",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking"
  ],
  "rules": {
    "@typescript-eslint/array-type": "error",
    "@typescript-eslint/explicit-function-return-type": "error",
    "@typescript-eslint/member-delimiter-style": "error",
    "@typescript-eslint/method-signature-style": "error",
    "@typescript-eslint/naming-convention": ["error",
        { selector: "default", format: ["strictCamelCase"] },
        { selector: "variable", types: ["function"], format: [ "strictCamelCase", "StrictPascalCase" ] },
        { selector: "function", format: [ "strictCamelCase", "StrictPascalCase"] },
        { selector: "typeLike", format: [ "StrictPascalCase"] },
    ],

  
  }
}