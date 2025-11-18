import { ValueObject } from "./base/ValueObject";

const brand: unique symbol = Symbol("TokenAmount");

/** トークン(ETH,USDC等)の数量を表すvalue-object */
export class TokenAmount implements ValueObject<TokenAmount> {
	/** 型区別用のフィールド */
	private readonly [brand]!: void;

	public readonly value: string;

	private constructor(value: string) {
		TokenAmount.checkTokenAmountValue(value);
		this.value = value;
	}

	public static from(tokenAmountValue: string): TokenAmount {
		return new this(tokenAmountValue);
	}

	public equals(other: TokenAmount): boolean {
		return this.value === other.value;
	}

	public toString(): string {
		return this.value;
	}

	public isNegative(): boolean {
		return this.value.startsWith("-");
	}

	private static checkTokenAmountValue(tokenAmountValue: string): void {
		// 整数の文字列であるかどうかをチェック
		// 例: "123", "-123"
		if (!/^-?(?:0|[1-9]\d*)$/.test(tokenAmountValue)) {
			throw new Error(`[5D50E8D4] Invalid tokenAmount value: '${tokenAmountValue}'`);
		}
	}
}
