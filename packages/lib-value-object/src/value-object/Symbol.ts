import { ValueObject } from "./base/ValueObject";

const brand: unique symbol = Symbol("Symbol");

/** 通貨記号を表すvalue-object */
class MySymbol implements ValueObject<MySymbol> {
	/** 型区別用のフィールド */
	private readonly [brand]!: void;

	public readonly value: string;

	private constructor(symbolValue: string) {
		MySymbol.checkSymbol(symbolValue);
		this.value = symbolValue;
	}

	public static from(symbolValue: string): MySymbol {
		return new this(symbolValue);
	}

	public equals(other: MySymbol): boolean {
		return this.value === other.value;
	}

	public toString(): string {
		return this.value;
	}

	private static checkSymbol(symbolValue: string): void {
		if (!MySymbol.isSymbol(symbolValue)) {
			throw new Error(`[68A91582] Invalid symbol value: '${symbolValue}'`);
		}
	}

	private static isSymbol(symbolValue: string): boolean {
		return symbolValue.length > 0 && symbolValue.trim() === symbolValue;
	}
}
export { MySymbol as Symbol };
