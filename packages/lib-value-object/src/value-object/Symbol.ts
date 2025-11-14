import { SymbolBrand as brand } from "./SymbolBrand";
import { ValueObject } from "./base/ValueObject";

/** 通貨記号を表すvalue-object */
export class Symbol implements ValueObject<Symbol> {
	/** 型区別用のフィールド */
	private readonly [brand]!: void;

	public readonly value: string;

	private constructor(symbolValue: string) {
		Symbol.checkSymbol(symbolValue);
		this.value = symbolValue;
	}

	public static from(symbolValue: string): Symbol {
		return new this(symbolValue);
	}

	public equals(other: Symbol): boolean {
		return this.value === other.value;
	}

	public toString(): string {
		return this.value;
	}

	private static checkSymbol(symbolValue: string): void {
		if (!Symbol.isSymbol(symbolValue)) {
			throw new Error(`[68A91582] Invalid symbol value: '${symbolValue}'`);
		}
	}

	private static isSymbol(symbolValue: string): boolean {
		return symbolValue.length > 0 && symbolValue.trim() === symbolValue;
	}
}
