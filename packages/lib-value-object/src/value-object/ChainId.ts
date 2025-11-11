import { ValueObject } from "./base/ValueObject";

const brand: unique symbol = Symbol("ChainIdBrand");

export class ChainId extends ValueObject<ChainId> {
	/** 型区別用のフィールド */
	private [brand]!: void;

	public constructor(private readonly chainIdValue: number) {
		super();
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
