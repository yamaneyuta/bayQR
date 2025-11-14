const fs = require("fs");

const config = JSON.parse(fs.readFileSync(`${__dirname}/.swcrc`, "utf-8"));
module.exports = {
	transform: {
		"^.+\\.(t|j)sx?$": ["@swc/jest", { ...config }],
	},
	collectCoverageFrom: [
		"src/**/*.ts",
		"!src/**/*.test.ts", // テストファイルは除外
		"!src/**/index.ts", // index.ts も除外
	],
};
