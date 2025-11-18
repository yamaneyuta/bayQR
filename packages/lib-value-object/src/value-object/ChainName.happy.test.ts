import { ChainName } from "./ChainName";

describe("[Happy] ChainName", () => {
	const fromData: { chainNameValue: string }[] = [
		{ chainNameValue: "Ethereum" },
		{ chainNameValue: "Polygon" },
		{ chainNameValue: "Avalanche" },
	];
	test.each(fromData)("[28C02BEA] from $chainNameValue", ({ chainNameValue }) => {
		// ACT
		const chainName = ChainName.from(chainNameValue);

		// ASSERT
		expect(chainName.value).toBe(chainNameValue); // エラーが発生せず、元と同じ値が取得できることを確認
	});

	const equalsData: { chainName1: string; chainName2: string; expected: boolean }[] = [
		{ chainName1: "Ethereum", chainName2: "Ethereum", expected: true },
		{ chainName1: "Ethereum", chainName2: "Polygon", expected: false },
	];
	test.each(equalsData)(
		"[58C697F1] equals $chainName1, $chainName2 => $expected",
		({ chainName1: chainName1Value, chainName2: chainName2Value, expected }) => {
			// ARRANGE
			const chainName1 = ChainName.from(chainName1Value);
			const chainName2 = ChainName.from(chainName2Value);

			// ACT
			const result = chainName1.equals(chainName2);

			// ASSERT
			expect(result).toBe(expected);
		}
	);

	test("[8BAF19F1] toString", () => {
		// ARRANGE
		const sut = ChainName.from("Ethereum");

		// ACT
		const str1 = sut.toString();
		const str2 = `${sut}`;

		// ASSERT
		expect(str1).toBe("Ethereum");
		expect(str2).toBe("Ethereum");
	});
});
