module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "parser": "babel-eslint",
    "extends": [
        "plugin:react/recommended",
        "airbnb",
        "prettier",
        "prettier/react"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "prettier"
    ],
    "rules": {
        "prettier/prettier": "error",
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/state-in-constructor": "off",
        "no-unused-vars": "off",
        // 关闭react默认的props-type验证
        "react/prop-types": [0],
      //关闭使用解构赋值的检测
      "react/destructuring-assignment": [0, "always"],
      // 解决require报错问题
      "import/no-extraneous-dependencies": ["error", { "devDependencies": true }]
    }
}