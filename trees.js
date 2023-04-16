// * trees Breath first tree

// export default function bfs(head: BinaryNode<number>, needle: number): boolean {

//     const q: (BinaryNode<number> | null)[] = [head];

//     while (q.length) {
//         const curr = q.shift() as BinaryNode<number> | undefined | null;
//         if (!curr) {
//             continue;
//         }

//         // search
//         if (curr?.value === needle) {
//             return true;
//         }

//         q.push(curr.left);
//         q.push(curr.right);
//     }

//     return false;
// }

//  * compare binary tree
// export default function compare(
//     a: BinaryNode<number> | null,
//     b: BinaryNode<number> | null,
// ): boolean {
//     if (a === null && b === null) {
//         return true;
//     }

//     if (a === null || b === null) {
//         return false;
//     }

//     if (a.value !== b.value) {
//         return false;
//     }

//     return compare(a.left, b.left) && compare(a.right, b.right);
// }
