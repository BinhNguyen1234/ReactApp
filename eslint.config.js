export default [
    {
        languageOptions: {
            ecmaVersion: 2020
        },
        ignores: [
            "webpack.common.config.js",
            "webpack.production.config.js",
            "webpack.local.config.js", 
            "postcss.config.js",
            "/dist/*"
        ],
        extends: ["standard-with-typescript"],
        parserOptions: {
            "ecmaVersion": "latest",
            "sourceType": "module"
        },
        
        plugins: ["react"],
        rules: {
            "quotes": [2, "single"],
            "indent": [2, 4],
            "@typescript-eslint/indent": [2, 4],
            "@typescript-eslint/prefer-nullish-coalescing": "off",
            "@typescript-eslint/naming-convention": [
                2,
                {
                    "selector": "variable",
                    "format": ["camelCase", "PascalCase"],
                    "leadingUnderscore": "allow",
                    "trailingUnderscore": "allow"
                }
            ],
            "@typescript-eslint/consistent-type-assertions": [
                1,
                {
                    "assertionStyle": "as"
                }
            ],
            "@typescript-eslint/strict-boolean-expressions": [
                1,
                {
                    "allowString": true,
                    "allowNumber": true,
                    "allowNullableObject": true,
                    "allowNullableBoolean": false,
                    "allowNullableString": false,
                    "allowNullableNumber": false,
                    "allowNullableEnum": false,
                    "allowAny": false,
                    "allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing": true
                }
            ],
            "promise/param-names": "off"
        }
    }
]