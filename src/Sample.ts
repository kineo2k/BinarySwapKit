import { BinaryBlockSwap } from './impl/BinaryBlockSwap';

const swapOrder = [7, 3, 0, 4, 1, 2, 5, 6];
const binaryInput = new Buffer('0123456789abcdef');

const bbs = new BinaryBlockSwap(swapOrder);

const swapped = bbs.swap(binaryInput);
const reversed = bbs.reverse(swapped);

console.log(`swapped  => ${swapped}\nreversed => ${reversed}`);