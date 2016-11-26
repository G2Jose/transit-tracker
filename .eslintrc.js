module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
        "arrow-body-style": [
            "off"
        ],
        "curly": [
            "error",
            "all"
        ],
        "indent": [
            "error",
            "tab",
            {
                "SwitchCase": 1
            }
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "max-len": [
            "off"
        ],
        "comma-dangle": [
	        "off"
        ],
        "react/jsx-uses-vars": 1,
        "react/jsx-indent": [
            "error",
            "tab"
        ],
        "react/jsx-indent-props": [
            "error",
            "tab"
        ],
        "react/jsx-filename-extension": 0,
        "require-jsdoc": 0,
        "indent": ["error", "tab"],
        "no-tabs": 0,
        "new-cap": [
            "error", {
                "capIsNewExceptions": [
                    "Immutable.Record",
                    "Immutable.List",
                    "Immutable.Stack",
                    "Immutable.Map",
                    "Immutable.OrderedMap",
                    "Immutable.Set",
                    "Immutable.OrderedSet",
                    "Router"
                ]
            }
        ]
    }
};