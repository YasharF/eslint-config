// the rules that are commented out with "// prettier: ", are the ones that are handled by prettier
// which are noted to never be needed:
// see https://github.com/prettier/eslint-config-prettier/blob/0ea836f81ac14295fb6801c4aa74446e04dda8ad/index.js#L16-L87

// https://eslint.org/docs/rules/#possible-errors
const possibleErrors = {
    "for-direction": "error",
    "getter-return": ["error", { "allowImplicit": true }],
    "no-async-promise-executor": "off",
    "no-await-in-loop": "off",
    "no-compare-neg-zero": "error",
    "no-cond-assign": "error",
    "no-console": "error",
    "no-constant-condition": "error",
    "no-control-regex": "error",
    "no-debugger": "error",
    "no-dupe-args": "error",
    "no-dupe-else-if": "error",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-empty": "error",
    "no-empty-character-class": "error",
    "no-ex-assign": "error",
    "no-extra-boolean-cast": "error",
    // prettier: "no-extra-parens": ["error", "functions"],
    // prettier: "no-extra-semi": "error",
    "no-func-assign": "error",
    "no-import-assign": "error",
    "no-inner-declarations": ["error", "functions"],
    "no-invalid-regexp": "error",
    "no-irregular-whitespace": "error",
    "no-loss-of-precision": "error",
    "no-misleading-character-class": "error",
    "no-obj-calls": "error",
    "no-promise-executor-return": "error",
    // sinon has this solution: https://github.com/sinonjs/commons/tree/master/lib/prototypes
    "no-prototype-builtins": "off",
    "no-regex-spaces": "error",
    "no-setter-return": "error",
    "no-sparse-arrays": "error",
    "no-template-curly-in-string": "off",
    "no-unexpected-multiline": "error",
    "no-unreachable": "error",
    "no-unreachable-loop": "error",
    "no-unsafe-finally": "error",
    "no-unsafe-negation": "error",
    "no-unsafe-optional-chaining": "error",
    "no-useless-backreference": "error",
    "require-atomic-updates": "off",
    "use-isnan": "error",
    "valid-typeof": "error",
}

// https://eslint.org/docs/rules/#best-practices
const bestPractices = {
    "accessor-pairs": "error",
    "array-callback-return": "error",
    "block-scoped-var": "error",
    "class-methods-use-this": "off",
    "complexity": ["error", 18],
    "consistent-return": "error",
    "curly": ["error", "all"],
    "default-case": "error",
    "default-case-last": "error",
    "default-param-last": "error",
    // prettier: "dot-location": ["error", "property"],
    "dot-notation": ["error", { "allowKeywords": true }],
    "eqeqeq": ["error", "allow-null"],
    "grouped-accessor-pairs": ["error", "getBeforeSet"],
    "guard-for-in": "error",
    "max-classes-per-file": "off",
    "no-alert": "error",
    "no-caller": "error",
    "no-case-declarations": "error",
    "no-constructor-return": "error",
    "no-div-regex": "error",
    "no-else-return": "error",
    "no-empty-function": "error",
    "no-empty-pattern": "off",
    "no-eq-null": "error",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-label": "error",
    "no-fallthrough": "error",
    // prettier: "no-floating-decimal": "error",
    "no-global-assign": "error",
    "no-implicit-coercion": "error",
    "no-implicit-globals": "error",
    "no-implied-eval": "error",
    "no-invalid-this": "off",
    "no-iterator": "error",
    "no-labels": "error",
    "no-lone-blocks": "error",
    "no-loop-func": "error",
    "no-magic-numbers": "off",
    // prettier: "no-multi-spaces": "error",
    "no-multi-str": "error",
    "no-new": "error",
    "no-new-func": "error",
    "no-new-wrappers": "error",
    "no-nonoctal-decimal-escape": "error",
    "no-octal": "error",
    "no-octal-escape": "error",
    "no-param-reassign": "error",
    "no-proto": "error",
    "no-redeclare": "error",
    "no-restricted-properties": "error",
    "no-return-assign": "error",
    "no-return-await": "error",
    "no-script-url": "error",
    "no-self-assign": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-throw-literal": "error",
    "no-unmodified-loop-condition": "error",
    "no-unused-expressions": "error",
    "no-unused-labels": "error",
    "no-useless-call": "error",
    "no-useless-catch": "error",
    "no-useless-concat": "error",
    "no-useless-escape": "error",
    "no-useless-return": "off",
    "no-void": "error",
    "no-warning-comments": ["error", { "terms": ["todo", "fixme", "xxx"], "location": "start" }],
    "no-with": "error",
    "prefer-named-capture-group": "off",
    "prefer-promise-reject-errors": "error",
    "prefer-regex-literals": "off",
    "radix": "off",
    "require-await": "error",
    "require-unicode-regexp": "off",
    "vars-on-top": "off",
    // prettier: "wrap-iife": "error",
    "yoda": ["error", "never"]
}

// https://eslint.org/docs/rules/#strict-mode
const strictMode = {
    "strict": ["error", "global"]
}

// https://eslint.org/docs/rules/#variables
const variables = {
    "init-declarations": "off",
    "no-delete-var": "error",
    "no-label-var": "error",
    "no-restricted-globals": "off",
    "no-shadow": "error",
    "no-shadow-restricted-names": "error",
    "no-undef": "error",
    "no-undef-init": "error",
    "no-undefined": "off",
    "no-unused-vars": ["error", {"vars": "all", "args": "after-used"}],
    "no-use-before-define": ["error", {"functions": false}]
}

// https://eslint.org/docs/rules/#stylistic-issues
const stylisticIssues = {
    // prettier: "array-bracket-newline": "off",
    // prettier: "array-bracket-spacing": ["error", "never"],
    // prettier: "array-element-newline": "off",
    // prettier: "block-spacing": "off",
    // prettier: "brace-style": ["off", "1tbs"],
    "camelcase": "error",
    "capitalized-comments": "off",
    // prettier: "comma-dangle": ["error", "never"],
    // prettier: "comma-spacing": "error",
    // prettier: "comma-style": "error",
    // prettier: "computed-property-spacing": ["off", "never"],
    "consistent-this": ["off", "that"],
    // prettier: "eol-last": "error",
    // prettier: "func-call-spacing": "error",
    "func-name-matching": "off",
    "func-names": "off",
    "func-style": ["off", "declaration"],
    // prettier: "function-paren-newline": "off",
    "id-denylist": "off",
    "id-length": "off",
    "id-match": "off",
    // prettier: "implicit-arrow-linebreak": "off",
    // prettier: "indent": ["error", 4, {"SwitchCase": 1}],
    // prettier: "jsx-quotes": "off",
    // prettier: "key-spacing": ["error", { "beforeColon": false, "afterColon": true }],
    // prettier: "keyword-spacing": ["error", { "after": true }],
    "line-comment-position": "off",
    "linebreak-style": ["off", "unix"],
    "lines-around-comment": "off",
    "lines-between-class-members": "off",
    "max-depth": ["off", 4],
    // prettier: "max-len": ["error", 120, 4],
    "max-lines": "off",
    "max-lines-per-function": "off",
    "max-nested-callbacks": ["warn", 2],
    "max-params": ["off", 3],
    "max-statements": ["off", 10],
    "max-statements-per-line": "off",
    "multiline-comment-style": "off",
    // prettier: "multiline-ternary": "off",
    "new-cap": "error",
    // prettier: "new-parens": "error",
    // prettier: "newline-per-chained-call": "off",
    "no-array-constructor": "error",
    "no-bitwise": "error",
    "no-continue": "error",
    "no-inline-comments": "off",
    "no-lonely-if": "off",
    "no-mixed-operators": "off",
    // prettier: "no-mixed-spaces-and-tabs": ["error", false],
    "no-multi-assign": "off",
    // prettier: "no-multiple-empty-lines": ["error", {"max": 2}],
    "no-negated-condition": "off",
    "no-nested-ternary": "error",
    "no-new-object": "error",
    "no-plusplus": "off",
    "no-restricted-syntax": "off",
    "no-tabs": "off",
    "no-ternary": "off",
    // prettier: "no-trailing-spaces": "error",
    "no-underscore-dangle": "error",
    "no-unneeded-ternary": "off",
    // prettier: "no-whitespace-before-property": "off",
    // prettier: "nonblock-statement-body-position": "off",
    // prettier: "object-curly-newline": "off",
    // prettier: "object-curly-spacing": ["off", "never"],
    // prettier: "object-property-newline": "off",
    // prettier: "one-var": "off",
    "one-var-declaration-per-line": "off",
    "operator-assignment": ["off", "always"],
    // prettier: "operator-linebreak": "off",
    // prettier: "padded-blocks": "off",
    "padding-line-between-statements": "off",
    "prefer-object-spread": "off",
    // prettier: "quote-props": "off",
    // prettier: "quotes": ["error", "double"],
    // prettier: "semi": "error",
    // prettier: "semi-spacing": ["error", {"before": false, "after": true}],
    // prettier: "semi-style": "off",
    "sort-keys": "off",
    "sort-vars": "off",
    // prettier: "space-before-blocks": ["error", "always"],
    // prettier: "space-before-function-paren": ["error", {"anonymous": "always", "named": "never"}],
    // prettier: "space-in-parens": ["off", "never"],
    // prettier: "space-infix-ops": "error",
    // prettier: "space-unary-ops": ["error", { "words": true, "nonwords": false }],
    "spaced-comment": "off",
    // prettier: "switch-colon-spacing": "off",
    // prettier: "template-tag-spacing": "off",
    // prettier: "unicode-bom": "off",
    // prettier: "wrap-regex": "off"
}

// https://eslint.org/docs/rules/#ecmascript-6
const ecmaScript6 = {
    "arrow-body-style": ["error", "as-needed"],
    "arrow-parens": ["error", "as-needed"],
    // prettier: "arrow-spacing": "off",
    "constructor-super": "error",
    // prettier: "generator-star-spacing": "off",
    "no-class-assign": "error",
    "no-confusing-arrow": "error",
    "no-const-assign": "error",
    "no-dupe-class-members": "error",
    "no-duplicate-imports": "error",
    "no-new-symbol": "error",
    "no-restricted-exports": "off",
    "no-restricted-imports": "off",
    "no-this-before-super": "off",
    "no-useless-computed-key": "off",
    "no-useless-constructor": "off",
    "no-useless-rename": "off",
    "no-var": 0,
    "object-shorthand": 0,
    "prefer-arrow-callback": "off",
    "prefer-const": "error",
    "prefer-destructuring": "off",
    "prefer-numeric-literals": "off",
    "prefer-rest-params": "off",
    "prefer-spread": "off",
    "prefer-template": "off",
    "require-yield": 0,
    // prettier: "rest-spread-spacing": "off",
    "sort-imports": "off",
    "symbol-description": "off",
    // prettier: "template-curly-spacing": "off",
    // prettier: "yield-star-spacing": "off"
}

const prettier = {
    "prettier/prettier": "error"
};

const jsDoc = {
    "jsdoc/require-param-description": "off",
    "jsdoc/require-returns-description": "off"
}

module.exports = {
    "extends": [
        "plugin:jsdoc/recommended",
        "plugin:prettier/recommended"
    ],
    "env": {
        "browser": true,
        "node": true,
        "amd": true,
        "es6": false
    },
    "parserOptions": {
        "ecmaVersion": 5,
        "ecmaFeatures": {},
    },
    "plugins": [
        "jsdoc",
        "prettier"
    ],
    "rules": Object.assign(
        {},
        possibleErrors,
        bestPractices,
        strictMode,
        variables,
        stylisticIssues,
        ecmaScript6,
        prettier,
        jsDoc
    ),
    "settings": {
        "jsdoc": {
            "ignorePrivate": true
        }
    },

    overrides: [
        {
          files: ["*.test.*"],
          rules: {
            "jsdoc/require-jsdoc": "off"
          }
        }
    ]
}
