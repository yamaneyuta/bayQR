import { Amount } from "./Amount";

describe("[Happy] Amount", () => {
	const fromData: { amountValue: string; expectedValue: string }[] = [
		{ amountValue: "0", expectedValue: "0" },
		{ amountValue: "0.0", expectedValue: "0" },

		{ amountValue: "100", expectedValue: "100" },
		{ amountValue: "0.1", expectedValue: "0.1" },
		{ amountValue: "100.00", expectedValue: "100" }, // 小数点以下の不要な0は削除される
		{ amountValue: "100.0010", expectedValue: "100.001" }, // 小数点以下の不要な0は削除される

		{ amountValue: "-100", expectedValue: "-100" },
		{ amountValue: "-0.1", expectedValue: "-0.1" },
		{ amountValue: "-100.00", expectedValue: "-100" }, // 小数点以下の不要な0は削除される
		{ amountValue: "-100.0010", expectedValue: "-100.001" }, // 小数点以下の不要な0は削除される
	];
	test.each(fromData)("[695F1223] from $amountValue => $expectedValue", ({ amountValue, expectedValue }) => {
		// ACT
		const amount = Amount.from(amountValue);

		// ASSERT
		expect(amount.value).toBe(expectedValue);
	});

	const equalsData: { val1: string; val2: string; expected: boolean }[] = [
		{ val1: "0", val2: "0.0", expected: true },
		{ val1: "100", val2: "100.00", expected: true },
		{ val1: "-100.1", val2: "-100.10", expected: true },
		{ val1: "123.45", val2: "123.450", expected: true },

		{ val1: "0", val2: "0.1", expected: false },
		{ val1: "100", val2: "100.01", expected: false },
		{ val1: "-100.1", val2: "-100.11", expected: false },
		{ val1: "123.45", val2: "123.46", expected: false },
	];
	test.each(equalsData)("[EC0C9FE5] equals $val1 and $val2 => $expected", ({ val1, val2, expected }) => {
		// ARRANGE
		const amount1 = Amount.from(val1);
		const amount2 = Amount.from(val2);

		// ACT
		const result = amount1.equals(amount2);

		// ASSERT
		expect(result).toBe(expected);
	});

	test("[04124243] toString", () => {
		// ARRANGE
		const sut = Amount.from("123.45");

		// ACT
		const str1 = sut.toString();
		const str2 = `${sut}`;

		// ASSERT
		expect(str1).toBe("123.45");
		expect(str2).toBe("123.45");
	});

	const isNegativeData: { amountValue: string; expected: boolean }[] = [
		// ゼロの場合
		{ amountValue: "0", expected: false },

		// 正の数の場合
		{ amountValue: "100", expected: false },
		{ amountValue: "0.1", expected: false },
		{ amountValue: "100.001", expected: false },

		// 負の数の場合
		{ amountValue: "-100", expected: true },
		{ amountValue: "-0.1", expected: true },
		{ amountValue: "-100.001", expected: true },
	];
	test.each(isNegativeData)("[E9098B50] isNegative $amountValue => $expected", ({ amountValue, expected }) => {
		// ARRANGE
		const sut = Amount.from(amountValue);

		// ACT
		const result = sut.isNegative();

		// ASSERT
		expect(result).toBe(expected);
	});
});
