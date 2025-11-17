import { TokenAmount } from "./TokenAmount";

describe("[Error] TokenAmount", () => {
	const data: { invalidTokenAmountValue: string }[] = [
		{ invalidTokenAmountValue: "" },
		{ invalidTokenAmountValue: "invalid" },
		{ invalidTokenAmountValue: "NaN" },
		{ invalidTokenAmountValue: "Infinity" },
		{ invalidTokenAmountValue: "-Infinity" },
		{ invalidTokenAmountValue: "00" }, // 先頭に0がある
		{ invalidTokenAmountValue: "01" }, // 先頭に0がある
		{ invalidTokenAmountValue: "-00" }, // 先頭に0がある
		{ invalidTokenAmountValue: "-01" }, // 先頭に0がある
		{ invalidTokenAmountValue: "0.1" }, // 小数点を含む
		{ invalidTokenAmountValue: "123.456" }, // 小数点を含む
		{ invalidTokenAmountValue: "-123.456" }, // 小数点を含む
		{ invalidTokenAmountValue: "123abc" }, // アルファベットを含む
		{ invalidTokenAmountValue: "abc123" }, // アルファベットを含む
		{ invalidTokenAmountValue: "--123" }, // マイナスが2つ
		{ invalidTokenAmountValue: "++123" }, // プラスを含む
		{ invalidTokenAmountValue: "+123" }, // プラスを含む
		{ invalidTokenAmountValue: "0x" }, // 16進数表記
		{ invalidTokenAmountValue: "0x01" }, // 16進数表記
		{ invalidTokenAmountValue: " 123" }, // 空白を含む
		{ invalidTokenAmountValue: "123 " }, // 空白を含む
		{ invalidTokenAmountValue: "12 3" }, // 空白を含む
	];

	test.each(data)("[C5F45A5A] from $invalidTokenAmountValue", ({ invalidTokenAmountValue }) => {
		// ACT & ASSERT
		expect(() => TokenAmount.from(invalidTokenAmountValue)).toThrow("[5D50E8D4]");
	});
});
