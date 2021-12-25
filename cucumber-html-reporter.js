const reporter = require("cucumber-html-reporter");

const options = {
  theme: "hierarchy",
  jsonDir: "cypress/cucumber-json", // 手順1で指定したcucumberJsonの出力先
  output: "reports/report.html", // 任意の出力先
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true,
  ignoreBadJsonFile: true,
};

reporter.generate(options);
