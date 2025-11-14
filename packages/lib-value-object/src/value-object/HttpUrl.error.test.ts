import { HttpUrl } from "./HttpUrl";

describe("[Error] HttpUrl", () => {
	const data: { invalidUrlValue: string }[] = [
		{ invalidUrlValue: "" },
		{ invalidUrlValue: "invalid" },
		{ invalidUrlValue: "ftp://example.com" }, // FTPは非対応
		{ invalidUrlValue: "ws://example.com" }, // WebSocketは非対応
		{ invalidUrlValue: "example.com" }, // プロトコルなし
		{ invalidUrlValue: "//example.com" }, // プロトコルなし
		{ invalidUrlValue: "http://" }, // ホストなし
		{ invalidUrlValue: "https://" }, // ホストなし
		{ invalidUrlValue: "htp://example.com" }, // 誤ったプロトコル
	];

	test.each(data)("[50F096E6] from '$invalidUrlValue'", ({ invalidUrlValue }) => {
		// ACT & ASSERT
		expect(() => HttpUrl.from(invalidUrlValue)).toThrow("[E2CCE9CD]");
	});
});
