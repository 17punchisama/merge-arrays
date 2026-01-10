module.exports = {
  transform: { "^.+\\.(ts|tsx)$": "ts-jest" },
  testEnvironment: "node",
  testMatch: ["**/test/**/*.test.ts"],
  moduleFileExtensions: ["ts", "tsx", "js", "json"],
  reporters: [
    "default",
    [
      "jest-html-reporter",
      {
        pageTitle: "Merge Test Report",
        outputPath: "report.html",
        includeFailureMsg: true,
        includeConsoleLog: true
      }
    ]
  ]
};
