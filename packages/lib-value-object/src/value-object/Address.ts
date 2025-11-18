import { ValueObject } from "./base/ValueObject";

const brand: unique symbol = Symbol("Address");

/** アドレスを表すvalue-object */
export class Address implements ValueObject<Address> {
	/** 型区別用のフィールド */
	private readonly [brand]!: void;

	/**
	 * ネイティブトークンを表すアドレスの特別な値
	 *
	 * @see https://github.com/ethereum/ercs/blob/master/ERCS/erc-7528.md
	 */
	private static readonly NATIVE_TOKEN_ADDRESS = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE";

	private static readonly ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";

	public readonly value: `0x${string}`;

	private constructor(addressValue: string) {
		Address.checkAddress(addressValue); // アドレスのフォーマットチェック
		this.value = addressValue;
	}

	public static from(addressValue: string): Address {
		return new this(addressValue);
	}

	public toString(): string {
		return this.value;
	}

	public equals(other: Address): boolean {
		return this.value.toLowerCase() === other.value.toLowerCase();
	}

	public static get zero(): Address {
		return Address.from(Address.ZERO_ADDRESS);
	}

	/** ネイティブトークンを表すアドレスを取得します */
	public static get nativeToken(): Address {
		return Address.from(Address.NATIVE_TOKEN_ADDRESS);
	}

	private static isAddress(addressValue: string): addressValue is `0x${string}` {
		// 簡易チェック。Ethereumのアドレスは40文字の16進数で、0xで始まる。
		// チェックサムの検証は行っていない。
		return /^0x[a-fA-F0-9]{40}$/.test(addressValue);
	}

	private static checkAddress(addressValue: string): asserts addressValue is `0x${string}` {
		if (!Address.isAddress(addressValue)) {
			throw new Error(`[1A5D2BB5] Invalid address: '${addressValue}'`);
		}
	}
}
