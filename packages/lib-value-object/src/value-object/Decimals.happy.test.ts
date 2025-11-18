import { Decimals } from "./Decimals";

describe("[Happy] Decimals", () => {
	const fromDataset: { decimalsValue: number }[] = [
		{ decimalsValue: 0 }, // 0 は許容
		{ decimalsValue: 1 },
		{ decimalsValue: 18 },
	];
	test.each(fromDataset)("[C2C46B02] from $decimalsValue", ({ decimalsValue }) => {
		// ACT
		const decimals = Decimals.from(decimalsValue);

		// ASSERT
		expect(decimals.value).toBe(decimalsValue);
	});

	test("[CC8999D3] toString", () => {
		// ARRANGE
		const sut = Decimals.from(42);

		// ACT
		const str = sut.toString();

		// ASSERT
		expect(str).toBe("42");
	});

	test("[7CE7E2AE] equals", () => {
		// ARRANGE
		const sut1 = Decimals.from(42);
		const sut2 = Decimals.from(42);
		const sut3 = Decimals.from(7);

		// ACT & ASSERT
		expect(sut1.equals(sut2)).toBe(true);
		expect(sut1.equals(sut3)).toBe(false);
	});
});
