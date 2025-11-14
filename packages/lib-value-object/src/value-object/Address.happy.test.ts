import { Address } from "./Address";

describe("[Happy] Address", () => {
	const fromData: { addressValue: string }[] = [
		{ addressValue: "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266" },
		{ addressValue: "0x0000000000000000000000000000000000000000" },
	];
	test.each(fromData)("[9CC95801] from $addressValue", ({ addressValue }) => {
		// ACT
		const address = Address.from(addressValue);

		// ASSERT
		expect(address.value).toBe(addressValue); // エラーが発生せず、元のアドレスと同じ値が取得できることを確認
	});

	const equalsData: { addr1: string; addr2: string; expected: boolean }[] = [
		{
			addr1: "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
			addr2: "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
			expected: true,
		},
		{
			addr1: "0x0000000000000000000000000000000000000000",
			addr2: "0x0000000000000000000000000000000000000000",
			expected: true,
		},
		{
			addr1: "0x0000000000000000000000000000000000000000",
			addr2: "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
			expected: false,
		},
	];
	test.each(equalsData)(
		"[3701AF1C] equals $addr1, $addr2 => $expected",
		({ addr1: addr1Value, addr2: addr2Value, expected }) => {
			// ARRANGE
			const addr1 = Address.from(addr1Value);
			const addr2 = Address.from(addr2Value);

			// ACT
			const result = addr1.equals(addr2);

			// ASSERT
			expect(result).toBe(expected);
		}
	);

	test("[8D0CC53B] toString", () => {
		// ARRANGE
		const sut = Address.from("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266");

		// ACT
		const str1 = sut.toString();
		const str2 = `${sut}`;

		// ASSERT
		expect(str1).toBe("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266");
		expect(str2).toBe("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266");
	});

	test("[0F34F7D5] zero address", () => {
		// ACT
		const zeroAddress = Address.zero;

		// ASSERT
		expect(zeroAddress.value).toBe("0x0000000000000000000000000000000000000000");
	});

	test("[C0BF97ED] native token address", () => {
		// ACT
		const nativeTokenAddress = Address.nativeToken;

		// ASSERT
		expect(nativeTokenAddress.value).toBe("0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE");
	});
});
