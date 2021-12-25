# Cypress Practice

## 概要

テスト自動かの学習用の練習サイトで Cypress の挙動確認を行う。

https://hotel.testplanisphere.dev/ja/

使用する技術要素は以下になる。

- Cypress
- Testing Library
- Cucumber

## 環境準備

まずは必要なライブラリをインストールする。

```bash
npm install --save-dev cypress typescript @types/node @testing-library/cypress
```

次に設定ファイルを追加する。

```json
// cypress/tsconfig.json
{
  "compilerOptions": {
    "target": "ES5",
    "lib": ["ES5", "DOM"],
    "types": ["cypress", "@testing-library/cypress"]
  },
  "include": ["./integrations/**/*.ts"]
}
```

テストファイルは全て `cypress/integrations` フォルダ以下に配置する。

なお、`npx cypress open` を実行時に作成されるサンプルのテストファイルは、別のフォルダにうつしている。

次に BDD での開発を行うために Cucumber を導入する。

```bash
npm install --save-dev cypress-cucumber-preprocessor @types/cypress-cucumber-preprocessor tsify
```

```bash
npm install --save-dev cucumber-html-reporter
```

```bash
npm install eslint-plugin-cypress --save-dev
```
