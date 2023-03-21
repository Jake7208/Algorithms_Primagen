// ?Linear Search List algorithm

// * searches array until finds value
//* search(arr, v)
// export default function linear_search(
//     haystack: number[],
//     needle: number,
// ): boolean {
//     for (let i = 0; i < haystack.length; ++i) {
//         if (haystack[i] === needle) {
//             return true;
//         }
//     }
//     return false;
// }

// ?Binary Search List algorithm

// export default function bs_list(haystack: number[], needle: number): boolean {
//     let lo = 0;
//     let hi = haystack.length;

// * continuously halves until finds needle
//     do {
//         const m = Math.floor(lo + (hi - lo) / 2);
//         const v = haystack[m];
//         if (v === needle) {
//             return true;
//         } else if (v > needle) {
//             hi = m;
//         } else {
//             lo = m + 1;
// * important to make sure to add 1 or else if when you have it will get wrong result
//         }
//     } while (lo < hi);

//     return false;
// }

// ?Crystal ball algorithm

// export default function two_crystal_balls(breaks: boolean[]): number {
//     const jumpAmount = Math.floor(Math.sqrt(breaks.length));

//     let i = jumpAmount; // intial point to sqrt N
//     for (; i < breaks.length; i += jumpAmount) {
//         if (breaks[i]) {
//             break;
//         }
//     }
//* // check for break then jump  for to the sqrt n

//     i -= jumpAmount;
//*     // jump back the sqrt of n

//*     // moves forward at most sqrt of n---↓
//     for (let j = 0; j <= jumpAmount && i < breaks.length; ++j, ++i) {
//         if (breaks[i]) {
//             return i;
//         } // then return [i] or return -1 same thing
//     }
//     return -1;
// }
