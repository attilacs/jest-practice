import {
  filterObjArr,
  filterObjArr2,
  insertObj,
  insertObj2,
  reorderArray,
  sortObjArr
} from ".";
import {
  objArray,
  unorderedObjArray,
  filteredArray,
  filteredArrayReordered,
  filteredArray2,
  filteredArray2Reordered,
  insertedArray,
  insertedArray2,
  insertedArray2Reordered,
  obj1,
  obj2,
  obj3,
  obj9,
  insertedArray3,
  obj5,
  obj12,
  insertedArray4,
  insertedArray5,
  objTwo,
  objArray3,
  insertedArray6,
} from "./variables";

test("returns the filtered array", () => {
  expect(filterObjArr(objArray, obj2)).toStrictEqual(filteredArray);
});

test("returns the filtered array", () => {
  expect(filterObjArr2(objArray, obj1, obj2)).toStrictEqual(filteredArray2);
});

test("returns the object array with the object inserted into it", () => {
  expect(insertObj(objArray, obj3)).toStrictEqual(insertedArray);
});

test("returns the object array with the object inserted into it2", () => {
  expect(insertObj(objArray3, objTwo)).toStrictEqual(insertedArray5);
});

test("returns the object array with the object before the last element", () => {
  expect(insertObj(objArray3, objTwo)).toStrictEqual(insertedArray5);
});

test("returns the object array with the object pushed into it", () => {
  expect(insertObj(objArray3, obj3)).toStrictEqual(insertedArray6);
});

test("returns the sorted array", () => {
  expect(sortObjArr(unorderedObjArray)).toStrictEqual(objArray);
});

test("reorders the array", () => {
  expect(reorderArray(filteredArray2)).toStrictEqual(filteredArray2Reordered);
});

test("reorders the array2", () => {
  expect(reorderArray(filteredArray)).toStrictEqual(filteredArrayReordered);
});

test("reorders the array3", () => {
  expect(reorderArray(insertedArray2)).toStrictEqual(insertedArray2Reordered);
});

test("returns the array with two objects inserted into it", () => {
  expect(insertObj2(objArray, obj3, obj5)).toStrictEqual(insertedArray3);
});

test("returns the array with two objects inserted into it in reversed order", () => {
  expect(insertObj2(objArray, obj5, obj3)).toStrictEqual(insertedArray3);
});

test("returns the array with two objects pushed at the end of it", () => {
  expect(insertObj2(objArray, obj12, obj9)).toStrictEqual(insertedArray4);
});
