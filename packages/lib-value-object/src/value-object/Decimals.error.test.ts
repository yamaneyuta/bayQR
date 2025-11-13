import { Decimals } from "./Decimals";

describe("[Error] Decimals", () => {
	const dataset: { decimalsValue: number }[] = [
		{ decimalsValue: -1 },
		{ decimalsValue: 3.14 },
		{ decimalsValue: NaN },
		{ decimalsValue: Infinity },
		{ decimalsValue: -42 },
	];
	test.each(dataset)(`[05CDDFFF] from - $decimalsValue`, ({ decimalsValue }) => {
		// ACT & ASSERT
		expect(() => Decimals.from(decimalsValue)).toThrow(`[195A68AE]`);
	});
});
