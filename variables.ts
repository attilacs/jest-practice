export interface objInterface {
  order: number;
  name: string;
}

export const objArray = [
  { order: 1, name: "a" },
  { order: 2, name: "b" },
  { order: 3, name: "c" },
  { order: 4, name: "d" },
  { order: 5, name: "e" }
];

export const unorderedObjArray = [
  { order: 5, name: "e" },
  { order: 3, name: "c" },
  { order: 1, name: "a" },
  { order: 2, name: "b" },
  { order: 4, name: "d" }
];

export const filteredArray = [
  { order: 1, name: "a" },
  { order: 3, name: "c" },
  { order: 4, name: "d" },
  { order: 5, name: "e" }
];

export const filteredArrayReordered = [
  { order: 1, name: "a" },
  { order: 2, name: "c" },
  { order: 3, name: "d" },
  { order: 4, name: "e" }
];

export const filteredArray2 = [
  { order: 3, name: "c" },
  { order: 4, name: "d" },
  { order: 5, name: "e" }
];

export const filteredArray2Reordered = [
  { order: 1, name: "c" },
  { order: 2, name: "d" },
  { order: 3, name: "e" }
];

export const insertedArray = [
  { order: 1, name: "a" },
  { order: 2, name: "b" },
  { order: 3, name: "three" },
  { order: 3, name: "c" },
  { order: 4, name: "d" },
  { order: 5, name: "e" }
];

export const insertedArray2 = [
  { order: 1, name: "a" },
  { order: 2, name: "b" },
  { order: 3, name: "c" },
  { order: 4, name: "d" },
  { order: 5, name: "e" },
  { order: 9, name: "nine" }
];

export const insertedArray3 = [
  { order: 1, name: "a" },
  { order: 2, name: "b" },
  { order: 3, name: "three" },
  { order: 3, name: "c" },
  { order: 4, name: "d" },
  { order: 5, name: "five" },
  { order: 5, name: "e" }
];

export const insertedArray2Reordered = [
  { order: 1, name: "a" },
  { order: 2, name: "b" },
  { order: 3, name: "c" },
  { order: 4, name: "d" },
  { order: 5, name: "e" },
  { order: 6, name: "nine" }
];

export const obj1 = { order: 1, name: "a" };
export const obj2 = { order: 2, name: "b" };
export const obj3 = { order: 3, name: "three" };
export const obj5 = { order: 5, name: "five" };
export const obj9 = { order: 9, name: "nine" };
