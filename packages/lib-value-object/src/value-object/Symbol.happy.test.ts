import { Symbol } from "./Symbol";

describe("[Happy] Symbol", () => {
	const fromData: { symbolValue: string }[] = [{ symbolValue: "USD" }, { symbolValue: "JPY" }, { symbolValue: "ETH" }];
	test.each(fromData)("[1A060B56] from $symbolValue", ({ symbolValue }) => {
		// ACT
		const symbol = Symbol.from(symbolValue);

		// ASSERT
		expect(symbol.value).toBe(symbolValue); // エラーが発生せず、元と同じ値が取得できることを確認
	});

	const equalsData: { symbol1: string; symbol2: string; expected: boolean }[] = [
		{ symbol1: "USD", symbol2: "USD", expected: true },
		{ symbol1: "USD", symbol2: "JPY", expected: false },
	];
	test.each(equalsData)(
		"[604B6F20] equals $symbol1, $symbol2 => $expected",
		({ symbol1: symbol1Value, symbol2: symbol2Value, expected }) => {
			// ARRANGE
			const symbol1 = Symbol.from(symbol1Value);
			const symbol2 = Symbol.from(symbol2Value);

			// ACT
			const result = symbol1.equals(symbol2);

			// ASSERT
			expect(result).toBe(expected);
		}
	);

	test("[CCFBC4D0] toString", () => {
		// ARRANGE
		const sut = Symbol.from("USD");

		// ACT
		const str1 = sut.toString();
		const str2 = `${sut}`;

		// ASSERT
		expect(str1).toBe("USD");
		expect(str2).toBe("USD");
	});
});
