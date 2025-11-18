import { HttpUrl } from "./HttpUrl";

describe("[Happy] HttpUrl", () => {
	const fromData: { urlValue: string }[] = [
		{ urlValue: "http://example.com" },
		{ urlValue: "https://example.com" },
		{ urlValue: "https://example.com/path" },
		{ urlValue: "https://example.com/path?query=value" },
		{ urlValue: "https://example.com:8080/path" },
		{ urlValue: "http://localhost:3000" },
	];
	test.each(fromData)("[FFBB2C6A] from $urlValue", ({ urlValue }) => {
		// ACT
		const httpUrl = HttpUrl.from(urlValue);

		// ASSERT
		expect(httpUrl.value).toBe(urlValue); // エラーが発生せず、元のURLと同じ値が取得できることを確認
	});

	const equalsData: { url1: string; url2: string; expected: boolean }[] = [
		{
			url1: "https://example.com",
			url2: "https://example.com",
			expected: true,
		},
		{
			url1: "http://example.com",
			url2: "http://example.com",
			expected: true,
		},
		{
			url1: "http://example.com",
			url2: "https://example.com",
			expected: false,
		},
		{
			url1: "https://example.com/path1",
			url2: "https://example.com/path2",
			expected: false,
		},
	];
	test.each(equalsData)("[26C19C79] equals $url1, $url2 => $expected", ({ url1: url1Value, url2: url2Value, expected }) => {
		// ARRANGE
		const url1 = HttpUrl.from(url1Value);
		const url2 = HttpUrl.from(url2Value);

		// ACT
		const result = url1.equals(url2);

		// ASSERT
		expect(result).toBe(expected);
	});

	test("[2C140D57] toString", () => {
		// ARRANGE
		const sut = HttpUrl.from("https://example.com");

		// ACT
		const str1 = sut.toString();
		const str2 = `${sut}`;

		// ASSERT
		expect(str1).toBe("https://example.com");
		expect(str2).toBe("https://example.com");
	});
});
