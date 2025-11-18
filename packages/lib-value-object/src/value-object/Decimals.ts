import { ValueObject } from "./base/ValueObject";

const brand: unique symbol = Symbol("Decimals");

/** 小数点以下の桁数を表すvalue-object */
export class Decimals implements ValueObject<Decimals> {
	/** 型区別用のフィールド */
	private readonly [brand]!: void;

	private constructor(private readonly decimalsValue: number) {
		if (decimalsValue < 0 || !Number.isInteger(decimalsValue)) {
			throw new Error(`[195A68AE] Decimals must be a non-negative integer: '${decimalsValue}'`);
		}
	}

	public static from(decimalsValue: number): Decimals {
		return new this(decimalsValue);
	}

	public get value(): number {
		return this.decimalsValue;
	}

	public equals(other: Decimals): boolean {
		return this.decimalsValue === other.decimalsValue;
	}

	public toString(): string {
		return this.decimalsValue.toString();
	}
}
