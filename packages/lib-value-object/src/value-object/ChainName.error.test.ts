import { ChainName } from "./ChainName";

describe("[Error] ChainName", () => {
	const data: { chainNameValue: string }[] = [
		{ chainNameValue: "" },
		{ chainNameValue: " Ethereum" }, // 先頭に空白
		{ chainNameValue: "Ethereum " }, // 末尾に空白
		{ chainNameValue: " Ethereum " }, // 両端に空白
	];

	test.each(data)('[FEA6E18A] from "$chainNameValue"', ({ chainNameValue }) => {
		// ACT & ASSERT
		expect(() => ChainName.from(chainNameValue)).toThrow("[CE59A6DE]");
	});
});
