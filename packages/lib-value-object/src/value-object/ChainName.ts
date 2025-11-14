import { ValueObject } from "./base/ValueObject";

const brand: unique symbol = Symbol("ChainName");

/** チェーン名を表すvalue-object */
export class ChainName implements ValueObject<ChainName> {
	/** 型区別用のフィールド */
	private readonly [brand]!: void;

	public readonly value: string;

	private constructor(chainNameValue: string) {
		ChainName.checkChainName(chainNameValue);
		this.value = chainNameValue;
	}

	public static from(chainNameValue: string): ChainName {
		return new this(chainNameValue);
	}

	public equals(other: ChainName): boolean {
		return this.value === other.value;
	}

	public toString(): string {
		return this.value;
	}

	private static checkChainName(chainNameValue: string): void {
		if (!ChainName.isChainName(chainNameValue)) {
			throw new Error(`[CE59A6DE] Invalid chain name value: '${chainNameValue}'`);
		}
	}

	private static isChainName(chainNameValue: string): boolean {
		return chainNameValue.length > 0 && chainNameValue.trim() === chainNameValue;
	}
}
