import { Symbol } from "./Symbol";

describe("[Error] Symbol", () => {
	const data: { symbolValue: string }[] = [
		{ symbolValue: "" },
		{ symbolValue: " ETH" }, // 先頭に空白
		{ symbolValue: "ETH " }, // 末尾に空白
		{ symbolValue: " ETH " }, // 両端に空白
	];

	test.each(data)('[C8B0A93D] from "$symbolValue"', ({ symbolValue }) => {
		// ACT & ASSERT
		expect(() => Symbol.from(symbolValue)).toThrow("[68A91582]");
	});
});
