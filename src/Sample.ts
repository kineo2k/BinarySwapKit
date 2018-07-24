import { BinaryBlockSwap } from './impl/BinaryBlockSwap';

const swapOrder = [7, 3, 0, 4, 1, 2, 5, 6];
const input = new Buffer('0123456789abcdef');
let hrstart = process.hrtime();
const bbs   = new BinaryBlockSwap(swapOrder);
for (let i = 0; i < 10_000; i++) {
	bbs.reverse(bbs.swap(input));
}
console.log(bbs.reverse(bbs.swap(input)).toLocaleString());
let hrend = process.hrtime(hrstart);
console.log(`Execution time (hr): `, hrend[0], hrend[1] / 1_000_000);