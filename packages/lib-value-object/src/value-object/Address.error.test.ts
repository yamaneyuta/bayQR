import { Address } from "./Address";

describe("[Error] Address", () => {
	const data: { invalidAddressValue: string }[] = [
		{ invalidAddressValue: "" },
		{ invalidAddressValue: "invalid" },
		{ invalidAddressValue: "0x" },
		{ invalidAddressValue: "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb9226" }, // 桁が足りない
		{ invalidAddressValue: "0x000000000000000000000000000000000000000" }, // 桁が足りない
	];

	test.each(data)("[FAC820ED] from $invalidAddressValue", ({ invalidAddressValue }) => {
		// ACT & ASSERT
		expect(() => Address.from(invalidAddressValue)).toThrow("[1A5D2BB5]");
	});
});
