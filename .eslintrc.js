module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "indent": [1,
            4, {
                "SwitchCase": 1
            }
        ],
        "no-console": 0,
        "quotes": [2, "single"],
        "semi": [2, "always"]
    }
};