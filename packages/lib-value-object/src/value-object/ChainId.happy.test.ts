import { ChainId } from "./ChainId";

describe("[Happy] ChainId", () => {
	test("[DDCB159F] from", () => {
		// ACT
		const chainId = ChainId.from(42);

		// ASSERT
		expect(chainId.value).toBe(42);
	});

	test("[B216D2B7] toString", () => {
		// ARRANGE
		const sut = ChainId.from(42);

		// ACT
		const str = sut.toString();

		// ASSERT
		expect(str).toBe("42");
	});

	test("[384DA641] equals", () => {
		// ARRANGE
		const sut1 = ChainId.from(42);
		const sut2 = ChainId.from(42);
		const sut3 = ChainId.from(7);

		// ACT & ASSERT
		expect(sut1.equals(sut2)).toBe(true);
		expect(sut1.equals(sut3)).toBe(false);
	});
});
