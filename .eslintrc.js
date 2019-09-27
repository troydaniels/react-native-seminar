module.exports = {
  parser: "babel-eslint",
  extends: ["airbnb", "standard", "prettier"],
  plugins: ["prettier", "standard"],
  globals: {
    fetch: false
  },
  rules: {
    semi: [2, "always"],
    "semi-spacing": ["error", { before: false, after: true }],
    "comma-dangle": [2, "always-multiline"],
    "space-before-function-paren": [
      "error",
      {
        anonymous: "always",
        named: "never",
        asyncArrow: "always"
      }
    ],
    "no-unused-vars": [2, { vars: "all", args: "none" }],
    "no-unreachable": 2,
    "no-trailing-spaces": 2,
    "react/jsx-closing-bracket-location": "off",
    "react/jsx-closing-tag-location": "off",
    "react/jsx-curly-spacing": "off",
    "react/jsx-equals-spacing": "off",
    "react/jsx-first-prop-new-line": "off",
    "no-mixed-operators": "off",
    "no-tabs": "off",
    "no-unexpected-multiline": "off",
    quotes: "off",
    "space-before-blocks": [
      "error",
      { functions: "always", keywords: "always", classes: "always" }
    ],
    "object-curly-spacing": ["error", "always"],
    indent: [
      "error",
      4,
      {
        SwitchCase: 1,
        VariableDeclarator: {
          var: 2,
          let: 2,
          const: 3
        },
        FunctionDeclaration: {
          body: 4,
          parameters: "first"
        },
        outerIIFEBody: 4,
        MemberExpression: 1,
        CallExpression: { arguments: "first" },
        ArrayExpression: "first",
        ObjectExpression: "first",
        ImportDeclaration: "first"
      }
    ],
    "react/jsx-indent": ["error", 4],
    "react/jsx-indent-props": ["error", 4],
    "react/jsx-max-props-per-line": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-props-no-multi-spaces": "off",
    "react/jsx-tag-spacing": "off",
    "react/jsx-wrap-multilines": "off",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
        trailingComma: "all",
        tabWidth: 4
      }
    ]
  },
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
        extensions: [".js", ".jsx", ".ts", ".tsx", ".native.js"]
      }
    }
  }
};
