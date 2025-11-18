import { TokenAmount } from "./TokenAmount";

describe("[Happy] TokenAmount", () => {
	const fromData: { tokenAmountValue: string }[] = [
		{ tokenAmountValue: "0" },
		{ tokenAmountValue: "1" },
		{ tokenAmountValue: "123" },
		{ tokenAmountValue: "1000000000000000000" }, // 1e18
		{ tokenAmountValue: "-1" },
		{ tokenAmountValue: "-123" },
		{ tokenAmountValue: "-1000000000000000000" },
	];
	test.each(fromData)("[03D2B80E] from $tokenAmountValue", ({ tokenAmountValue }) => {
		// ACT
		const tokenAmount = TokenAmount.from(tokenAmountValue);

		// ASSERT
		expect(tokenAmount.value).toBe(tokenAmountValue); // エラーが発生せず、元の値と同じ値が取得できることを確認
	});

	const equalsData: { val1: string; val2: string; expected: boolean }[] = [
		{ val1: "0", val2: "0", expected: true },
		{ val1: "123", val2: "123", expected: true },
		{ val1: "-123", val2: "-123", expected: true },
		{ val1: "1000000000000000000", val2: "1000000000000000000", expected: true },

		{ val1: "0", val2: "1", expected: false },
		{ val1: "123", val2: "124", expected: false },
		{ val1: "-123", val2: "123", expected: false },
		{ val1: "1000000000000000000", val2: "1000000000000000001", expected: false },
	];
	test.each(equalsData)("[B86CE58D] equals $val1 and $val2 => $expected", ({ val1, val2, expected }) => {
		// ARRANGE
		const tokenAmount1 = TokenAmount.from(val1);
		const tokenAmount2 = TokenAmount.from(val2);

		// ACT
		const result = tokenAmount1.equals(tokenAmount2);

		// ASSERT
		expect(result).toBe(expected);
	});

	test("[D5EE2FD4] toString", () => {
		// ARRANGE
		const sut = TokenAmount.from("1234567890");

		// ACT
		const result = sut.toString();

		// ASSERT
		expect(result).toBe("1234567890");
	});

	const isNegativeData: { tokenAmountValue: string; expected: boolean }[] = [
		{ tokenAmountValue: "0", expected: false },
		{ tokenAmountValue: "1", expected: false },
		{ tokenAmountValue: "123", expected: false },
		{ tokenAmountValue: "1000000000000000000", expected: false },
		{ tokenAmountValue: "-1", expected: true },
		{ tokenAmountValue: "-123", expected: true },
		{ tokenAmountValue: "-1000000000000000000", expected: true },
	];
	test.each(isNegativeData)("[41D1A359] isNegative $tokenAmountValue => $expected", ({ tokenAmountValue, expected }) => {
		// ARRANGE
		const sut = TokenAmount.from(tokenAmountValue);

		// ACT
		const result = sut.isNegative();

		// ASSERT
		expect(result).toBe(expected);
	});
});
