import { HttpUrl } from "./HttpUrl";

const brand: unique symbol = Symbol("BlockExplorerUrl");

/** ブロックエクスプローラーのURLを表すvalue-object */
export class BlockExplorerUrl extends HttpUrl {
	/** 型区別用のフィールド */
	private readonly [brand]!: void;

	private constructor(urlValue: string) {
		super(urlValue);
	}

	public static from(urlValue: string): BlockExplorerUrl {
		return new this(urlValue);
	}

	public equals(other: BlockExplorerUrl): boolean {
		return this.value === other.value;
	}
}
