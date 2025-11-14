import { ValueObject } from "./base/ValueObject";

const brand: unique symbol = Symbol("HttpUrl");

/** HTTP/HTTPS URLを表すvalue-object */
export class HttpUrl implements ValueObject<HttpUrl> {
	/** 型区別用のフィールド */
	private readonly [brand]!: void;

	public readonly value: string;

	private constructor(urlValue: string) {
		HttpUrl.checkUrl(urlValue);
		this.value = urlValue;
	}

	public static from(urlValue: string): HttpUrl {
		return new this(urlValue);
	}

	public equals(other: HttpUrl): boolean {
		return this.value === other.value;
	}

	public toString(): string {
		return this.value;
	}

	private static checkUrl(urlValue: string): void {
		if (!HttpUrl.isHttpUrl(urlValue)) {
			throw new Error(`[E2CCE9CD] Invalid HTTP/HTTPS URL: '${urlValue}'`);
		}
	}

	private static isHttpUrl(urlValue: string): boolean {
		try {
			const url = new URL(urlValue);
			return /^https?:$/.test(url.protocol);
		} catch {
			return false;
		}
	}
}
