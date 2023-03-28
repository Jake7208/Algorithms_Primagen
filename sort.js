//* first sorting algorithm the Bubble sort

// * this runs through loop and sets the largest value as the end value
// * and then repeats the process.
// export default function bubble_sort(arr: number[]): void {
//     for (let i = 0; i < arr.length; ++i) {
//         for (let j = 0; j < arr.length - 1 - i; ++j) {
// * this swaps i j|
//   *              if (arr[j] > arr[j + 1]) {
//    *             const tmp = arr[j];
//   *              arr[j] = arr[j + 1];
//    *             arr[j + 1] = tmp;
//          *   }
//         }
//     }
// }

// * something went wrong in this problem
//?  Queue fixed no problems
// type Node<T> = {
//     value: T;
//     next?: Node<T>;
// };
// export default class Queue<T> {
//     public length: number;
//     private head?: Node<T>;
//     private tail?: Node<T>;

//     constructor() {
//         this.head = this.tail = undefined;
//         this.length = 0;
//     }

//     enqueue(item: T): void {
//         const node = { value: item } as Node<T>;
//         this.length++;
//         if (!this.tail) {
//             this.tail = this.head = node;
//             return;
//         }

//         this.tail.next = node;
//         this.tail = node;
//     }
//     deque(): T | undefined {
//         if (!this.head) {
//             return undefined;
//         }
//         this.length--;

//         const head = this.head;
//         this.head = this.head.next;

//         //free not needed but if you're not using js
//         // head.next = undefined;

//         if (this.length === 0) {
//             this.tail = undefined;
//         }

//         return head?.value;
//     }
//     peek(): T | undefined {
//         return this.head?.value; // if head is defined return it else undefined
//     }

//     getTail() {
//         return this.tail?.value;
//     }
// }

// ! END of queue

//  * Start of working stack
// type Node<T> = {
//     value: T;
//     prev?: Node<T>;
// };
// export default class Stack<T> {
//     public length: number;
//     private head?: Node<T>;

//     constructor() {
//         this.head = undefined;
//         this.length = 0;
//     }

//     push(item: T): void {
//         const node = { value: item } as Node<T>;
//         this.length++;
//         if (!this.head) {
//             this.head = node;
//             return;
//         }
//         node.prev = this.head;
//         this.head = node;
//     }
//     pop(): T | undefined {
//         this.length = Math.max(0, this.length - 1);
//         if (this.length === 0) {
//             const head = this.head;
//             this.head = undefined;
//             return head?.value;
//         }
//         const head = this.head as Node<T>;
//         this.head = this.head?.prev;
//         return head.value;
//     }
//     peek(): T | undefined {
//         return this.head?.value;
//     }
// }
