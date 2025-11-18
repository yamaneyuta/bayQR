import { Amount } from "./Amount";

describe("[Error] Amount", () => {
	const data: { amountValue: string }[] = [
		{ amountValue: "" },
		{ amountValue: "invalid" },
		{ amountValue: "NaN" },
		{ amountValue: "Infinity" },
		{ amountValue: "-Infinity" },
		{ amountValue: "-0" },
		{ amountValue: "00" },
		{ amountValue: "01" },
		{ amountValue: "00.1" },
		{ amountValue: "00.10" },
		{ amountValue: "123abc" },
		{ amountValue: "abc123" },
		{ amountValue: "12.34.56" },
		{ amountValue: "--123" },
		{ amountValue: "++123" },
		{ amountValue: "0x" },
		{ amountValue: "0x01" },
	];

	test.each(data)("[2E61B8F1] from $amountValue", ({ amountValue: invalidAmountValue }) => {
		// ACT & ASSERT
		expect(() => Amount.from(invalidAmountValue)).toThrow("[53E242CB]");
	});
});
