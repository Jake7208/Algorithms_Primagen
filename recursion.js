// const dir = [
//     [-1, 0],
//     [1, 0],
//     [0, -1],
//     [0, 1],
// ];
// function walk(
//     maze: string[],
//     wall: string,
//     curr: Point,
//     end: Point,
//     seen: boolean[][],
//     path: Point[],
// ): boolean {
//     // base case
//     // off the map
//     if (
//         curr.x < 0 ||
//         curr.x >= maze[0].length ||
//         curr.y < 0 ||
//         curr.y >= maze.length
//     ) {
//         return false;
//     }

//     if (maze[curr.y][curr.x] === wall) {
//         return false;
//     }
//     if (curr.x === end.x && curr.y === end.y) {
//         path.push(end);
//         return true;
//     }
//     if (seen[curr.y][curr.x]) {
//         return false;
//     }

//     //3 recurse
//     // pre
//     seen[curr.y][curr.x] = true;
//     path.push(curr);
//     // recurse
//     for (let i = 0; i < dir.length; ++i) {
//         const [x, y] = dir[i];
//         if (
//             walk(
//                 maze,
//                 wall,
//                 {
//                     x: curr.x + x,
//                     y: curr.y + y,
//                 },
//                 end,
//                 seen,
//                 path,
//             )
//         ) {
//             return true;
//         }
//     }
//     // post
//     path.pop();

//     return false;
// }

// export default function solve(
//     maze: string[],
//     wall: string,
//     start: Point,
//     end: Point,
// ): Point[] {
//     const seen: boolean[][] = [];
//     const path: Point[] = [];

//     for (let i = 0; i < maze.length; ++i) {
//         seen.push(new Array(maze[0].length).fill(false));
//     }

//     walk(maze, wall, start, end, seen, path);

//     return path;
// }

// trees

//* in order search

// function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
//     if (!curr) {
//         return path;
//     }

//     // recurse
//     // pre
//     // recurse
//     walk(curr.left, path);
//     path.push(curr.value);
//     walk(curr.right, path);

//     // post
//     return path;
// }
// export default function in_order_search(head: BinaryNode<number>): number[] {
//     return walk(head, []);
// }

//* Pre order trees

// function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
//     if (!curr) {
//         return path;
//     }

//     // recurse
//     // pre
//     // recurse
//     path.push(curr.value);
//     walk(curr.left, path);
//     walk(curr.right, path);

//     // post
//     return path;
// }
// export default function pre_order_search(head: BinaryNode<number>): number[] {
//     return walk(head, []);
// }

// *post orders

// function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
//     if (!curr) {
//         return path;
//     }

//     // recurse
//     // pre
//     // recurse
//     walk(curr.left, path);
//     walk(curr.right, path);

//     // post
//     path.push(curr.value);
//     return path;
// }
// export default function post_order_search(head: BinaryNode<number>): number[] {
//     return walk(head, []);
// }
