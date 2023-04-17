// * breath first graph matrix
// export default function bfs(
//     graph: WeightedAdjacencyMatrix,
//     source: number,
//     needle: number,
// ): number[] | null {
//     const seen = new Array(graph.length).fill(false);
//     const prev = new Array(graph.length).fill(-1);

//     seen[source] = true;
//     const q: number[] = [source];

//     do {
//         const curr = q.shift() as number;
//         if (curr === needle) {
//             break;
//         }

//         const adjs = graph[curr];
//         for (let i = 0; i < adjs.length; ++i) {
//             if (adjs[i] === 0) {
//                 continue;
//             }
//             if (seen[i]) {
//                 continue;
//             }
//             seen[i] = true;
//             prev[i] = curr;
//             q.push(i);
//         }
//     } while (q.length);

//     if (prev[needle] === -1) {
//         return null;
//     }

//     // build it backward
//     //
//     let curr = needle;
//     const out: number[] = [];

//     while (prev[curr] !== -1) {
//         out.push(curr);
//         curr = prev[curr];
//     }

//     return [source].concat(out.reverse());
// }

// * Depth fist graph matrix

// function walk(
//     graph: WeightedAdjacencyList,
//     curr: number,
//     needle: number,
//     seen: boolean[],
//     path: number[],
// ): boolean {
//     if (seen[curr]) {
//         return false;
//     }

//     seen[curr] = true;

//     // recurse
//     // pre
//     path.push(curr);
//     if (curr === needle) {
//         return true;
//     }

//     // recurse
//     const list = graph[curr];
//     for (let i = 0; i < list.length; ++i) {
//         const edge = list[i];

//         if (walk(graph, edge.to, needle, seen, path)) {
//             return true;
//         }
//     }
//     // post
//     path.pop();

//     return false;
// }

// export default function dfs(
//     graph: WeightedAdjacencyList,
//     source: number,
//     needle: number,
// ): number[] | null {
//     const seen: boolean[] = new Array(graph.length).fill(false);
//     const path: number[] = [];

//     walk(graph, source, needle, seen, path);

//     if (path.length === 0) {
//         return null;
//     }

//     return path;
// }

// * dijkstra list Very annoyingly complex

// function hasUnvisisted(seen: boolean[], dists: number[]): boolean {
//     return seen.some((s, i) => !s && dists[i] < Infinity);
// }

// function getLowestUnvisited(seen: boolean[], dists: number[]): number {
//     let idx = -1;
//     let lowestDistance = Infinity;

//     for (let i = 0; i < seen.length; ++i) {
//         if (seen[i]) {
//             continue;
//         }
//         if (lowestDistance > dists[i]) {
//             lowestDistance = dists[i];
//             idx = i;
//         }
//     }
//     return idx;
// }

// export default function dijkstra_list(
//     source: number,
//     sink: number,
//     arr: WeightedAdjacencyList,
// ): number[] {
//     const seen = new Array(arr.length).fill(false);
//     const prev = new Array(arr.length).fill(-1);
//     const dists = new Array(arr.length).fill(Infinity);
//     dists[source] = 0;

//     while (hasUnvisisted(seen, dists)) {
//         const curr = getLowestUnvisited(seen, dists);

//         seen[curr] = true;

//         const adjs = arr[curr];
//         for (let i = 0; i < adjs.length; ++i) {
//             const edge = adjs[i];
//             if (seen[edge.to]) {
//                 continue;
//             }

//             const dist = dists[curr] + edge.weight;
//             if (dist < dists[edge.to]) {
//                 dists[edge.to] = dist;
//                 prev[edge.to] = curr;
//             }
//         }
//     }

//     const out: number[] = [];
//     let curr = sink;

//     while (prev[curr] !== -1) {
//         out.push(curr);
//         curr = prev[curr];
//     }
//     out.push(source);
//     return out.reverse();
// }

// * LRU super structure ultra god mode hard!

// type Node<T> = {
//     value: T;
//     next?: Node<T>;
//     prev?: Node<T>;
// };

// function createNode<V>(value: V): Node<V> {
//     return { value };
// }
// export default class LRU<K, V> {
//     private length: number;
//     private head?: Node<V>;
//     private tail?: Node<V>;

//     private lookup: Map<K, Node<V>>;
//     private reverseLookup: Map<Node<V>, K>;

//     constructor(private capacity: number = 10) {
//         this.length = 0;
//         this.head = this.tail = undefined;
//         this.lookup = new Map<K, Node<V>>();
//         this.reverseLookup = new Map<Node<V>, K>();
//     }

//     update(key: K, value: V): void {
//         // does it exist
//         let node = this.lookup.get(key);
//         if (!node) {
//             node = createNode(value);
//             this.length++;
//             this.prepend(node);
//             this.trimCache();

//             this.lookup.set(key, node);
//             this.reverseLookup.set(node, key);
//         } else {
//             this.detach(node);
//             this.prepend(node);
//             node.value = value;
//         }
//         // if it doesn't we need to insert
//         //         - check capacity and evict if over
//         // if it does, we need to update to the front of the list
//         // and update the value
//     }
//     get(key: K): V | undefined {
//         // check the cache for existence
//         const node = this.lookup.get(key);
//         if (!node) {
//             return undefined;
//         }
//         //update the value we found and move it to the front
//         this.detach(node);
//         this.prepend(node);
//         // return ou the value found or undefined if not exist
//         return node.value;
//     }

//     private detach(node: Node<V>) {
//         if (node.prev) {
//             node.prev.next = node.next;
//         }
//         if (node.next) {
//             node.next.prev = node.prev;
//         }

//         if (this.head === node) {
//             this.head = this.head.next;
//         }
//         if (this.tail === node) {
//             this.tail = this.tail.prev;
//         }

//         node.next = undefined;
//         node.prev = undefined;
//     }
//     private prepend(node: Node<V>) {
//         if (!this.head) {
//             this.head = this.tail = node;
//             return;
//         }

//         node.next = this.head;
//         this.head.prev = node;
//         this.head = node;
//     }
//     private trimCache(): void {
//         if (this.length <= this.capacity) {
//             return;
//         }
//         const tail = this.tail as Node<V>;
//         this.detach(this.tail as Node<V>);

//         const key = this.reverseLookup.get(tail) as K;
//         this.lookup.delete(key);
//         this.reverseLookup.delete(tail);
//         this.length--;
//     }
// }
