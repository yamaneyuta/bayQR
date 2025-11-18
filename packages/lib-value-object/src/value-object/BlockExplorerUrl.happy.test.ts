import { BlockExplorerUrl } from "./BlockExplorerUrl";

describe("[Happy] BlockExplorerUrl", () => {
	const fromData: { urlValue: string }[] = [
		{ urlValue: "http://example.com" },
		{ urlValue: "https://example.com" },
		{ urlValue: "https://etherscan.io" },
		{ urlValue: "https://etherscan.io/address/0x1234" },
		{ urlValue: "https://polygonscan.com/tx/0xabcd" },
		{ urlValue: "https://bscscan.com/token/0x5678" },
		{ urlValue: "https://explorer.example.com:8080/path" },
		{ urlValue: "http://localhost:3000" },
	];
	test.each(fromData)("[E9006BB1] from $urlValue", ({ urlValue }) => {
		// ACT
		const blockExplorerUrl = BlockExplorerUrl.from(urlValue);

		// ASSERT
		expect(blockExplorerUrl.value).toBe(urlValue); // エラーが発生せず、元のURLと同じ値が取得できることを確認
	});

	const equalsData: { url1: string; url2: string; expected: boolean }[] = [
		{
			url1: "https://etherscan.io",
			url2: "https://etherscan.io",
			expected: true,
		},
		{
			url1: "http://etherscan.io",
			url2: "http://etherscan.io",
			expected: true,
		},
		{
			url1: "http://etherscan.io",
			url2: "https://etherscan.io",
			expected: false,
		},
		{
			url1: "https://etherscan.io/address/0x1234",
			url2: "https://etherscan.io/address/0x5678",
			expected: false,
		},
		{
			url1: "https://etherscan.io",
			url2: "https://polygonscan.com",
			expected: false,
		},
	];
	test.each(equalsData)("[EEE2F3A4] equals $url1, $url2 => $expected", ({ url1: url1Value, url2: url2Value, expected }) => {
		// ARRANGE
		const url1 = BlockExplorerUrl.from(url1Value);
		const url2 = BlockExplorerUrl.from(url2Value);

		// ACT
		const result = url1.equals(url2);

		// ASSERT
		expect(result).toBe(expected);
	});

	test("[CC66C846] toString", () => {
		// ARRANGE
		const urlValue = "https://etherscan.io";
		const blockExplorerUrl = BlockExplorerUrl.from(urlValue);

		// ACT
		const result = blockExplorerUrl.toString();

		// ASSERT
		expect(result).toBe(urlValue);
	});
});
