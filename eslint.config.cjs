const {
    defineConfig,
    globalIgnores,
} = require("eslint/config");

const globals = require("globals");

const {
    fixupConfigRules,
} = require("@eslint/compat");

const reactRefreshModule = require("eslint-plugin-react-refresh");
const reactRefresh = reactRefreshModule.default || reactRefreshModule;
const reactRefreshPlugin = reactRefresh.rules ? { rules: reactRefresh.rules } : reactRefresh;
const js = require("@eslint/js");

const {
    FlatCompat,
} = require("@eslint/eslintrc");

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

module.exports = defineConfig([globalIgnores(["**/dist", "**/.eslintrc.cjs", "**/eslint.config.cjs"]), {
    files: ["**/*.js", "**/*.jsx"],
    languageOptions: {
        globals: {
            ...globals.browser,
        },

        ecmaVersion: "latest",
        sourceType: "module",
        parserOptions: {},
    },

    extends: fixupConfigRules(compat.extends(
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended",
    )),

    settings: {
        react: {
            version: "18.2",
        },
    },

    plugins: {
        "react-refresh": reactRefreshPlugin,
    },

    rules: {
        "react-refresh/only-export-components": ["warn", {
            allowConstantExport: true,
        }],

        "react/prop-types": "off",
    },
}]);
