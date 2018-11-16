/**
 * Created by saikrishna on 16/11/18.
 */
module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ["plugin:vue/essential", "@vue/airbnb"],
    rules: {
        "no-param-reassign": 0,
        "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-underscore-dangle": 0
    },
    parserOptions: {
        parser: "babel-eslint"
    },
    settings: {
        "import/resolver": {
            "node": {
                "paths": ["src"],
                "extensions": ['.js','.vue']
            }
        }
    }
};
