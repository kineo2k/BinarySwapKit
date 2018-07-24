class BinaryBlockSwap {
	private readonly _blockSize: number;
	private readonly _reverseSwapOrder: Array<number>;

	constructor(private _swapOrder: Array<number>) {
		this._blockSize = _swapOrder.length;
		this._reverseSwapOrder = this._createReverseSwapOrder();
	}

	swap(input: Buffer): Buffer {
		return this._swap(input);
	}

	reverse(input: Buffer): Buffer {
		return this._swap(input, true);
	}

	private _swap(input: Buffer, isReverse: Boolean = false): Buffer {
		const output = Buffer.allocUnsafe(input.length);
		const swapOrder = isReverse ? this._reverseSwapOrder : this._swapOrder;

		input.forEach((value, index) => {
			const loopCount = Math.floor(index / this._blockSize);

			if (output.length >= (loopCount + 1) * this._blockSize) {
				const loopIndex = index % this._blockSize;
				const outputIndex = loopCount * this._blockSize + swapOrder[loopIndex];

				output[outputIndex] = value;
			} else {
				output[index] = value;
			}
		});

		return output;
	}

	private _createReverseSwapOrder(): Array<number> {
		const reverseSwapOrder: Array<number> = [];

		this._swapOrder.forEach((order, index) => {
			reverseSwapOrder[order] = index;
		});

		return reverseSwapOrder;
	}
}

export {
	BinaryBlockSwap
};