import { ValueObject } from "./base/ValueObject";

const brand: unique symbol = Symbol("ChainIdBrand");

export class ChainId extends ValueObject<ChainId> {
	/** 型区別用のフィールド */
	private [brand]!: void;

	private constructor(private readonly chainIdValue: number) {
		super();

		if (chainIdValue <= 0 || !Number.isInteger(chainIdValue)) {
			throw new Error(`[19364922] ChainId must be a non-negative integer. ${chainIdValue}`);
		}
	}

	public static from(chainIdValue: number): ChainId {
		return new ChainId(chainIdValue);
	}

	public get value(): number {
		return this.chainIdValue;
	}

	public equals(other: ChainId): boolean {
		return this.chainIdValue === other.chainIdValue;
	}

	public toString(): string {
		return this.chainIdValue.toString();
	}
}
