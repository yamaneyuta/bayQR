import { ChainId } from "./ChainId";

describe("[Error] ChainId", () => {
	const dataset: { chainIdValue: number }[] = [
		{ chainIdValue: 0 },
		{ chainIdValue: 3.14 },
		{ chainIdValue: NaN },
		{ chainIdValue: Infinity },
		{ chainIdValue: -42 },
	];
	test.each(dataset)(`[DDCB159F] from - $chainIdValue`, ({ chainIdValue }) => {
		// ACT & ASSERT
		expect(() => ChainId.from(chainIdValue)).toThrow(`[19364922]`);
	});
});
