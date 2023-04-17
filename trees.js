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
//  DFS On binary search tree
// function search(curr: BinaryNode<number> | null, needle: number): boolean {
//     if (!curr) {
//         return false;
//     }

//     if (curr.value === needle) {
//         return true;
//     }

//     if (curr.value < needle) {
//         return search(curr.right, needle);
//     }
//     return search(curr.left, needle);
// }
// export default function dfs(head: BinaryNode<number>, needle: number): boolean {
//     return search(head, needle);
// }

// * min heap

// export default class MinHeap {
//     public length: number;
//     private data: number[];

//     constructor() {
//         this.data = [];
//         this.length = 0;
//     }

//     insert(value: number): void {
//         this.data[this.length] = value;
//         this.heapifyUp(this.length);
//         this.length++;
//     }
//     delete(): number {
//         if (this.length === 0) {
//             return -1;
//         }

//         const out = this.data[0];
//         this.length--;
//         if (this.length === 0) {
//             this.data = [];
//             return out;
//         }

//         this.data[0] = this.data[this.length];
//         this.heapifyDown(0);
//         return out;
//     }

//     private heapifyDown(idx: number): void {
//         const lIdx = this.leftChild(idx);
//         const rIdx = this.rightChild(idx);

//         if (idx >= this.length || lIdx >= this.length) {
//             return;
//         }

//         const lV = this.data[lIdx];
//         const rV = this.data[rIdx];
//         const v = this.data[idx];

//         if (lV > rV && v > rV) {
//             this.data[idx] = rV;
//             this.data[rIdx] = v;
//             this.heapifyDown(rIdx);
//         } else if (rV > lV && v > lV) {
//             this.data[idx] = lV;
//             this.data[lIdx] = v;
//             this.heapifyDown(lIdx);
//         }
//     }
//     private heapifyUp(idx: number): void {
//         if (idx === 0) {
//             return;
//         }
//         const p = this.parent(idx);
//         const parentV = this.data[p];
//         const v = this.data[idx];

//         if (parentV > v) {
//             this.data[idx] = parentV;
//             this.data[p] = v;
//             this.heapifyUp(p);
//         }
//     }
//     private parent(idx: number): number {
//         return Math.floor((idx - 1) / 2);
//     }

//     private leftChild(idx: number): number {
//         return idx * 2 + 1;
//     }
//     private rightChild(idx: number): number {
//         return idx * 2 + 2;
//     }
// }
