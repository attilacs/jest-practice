import { obj, objArray } from "./variables";

export const filterObjArr = (objArray: obj[], obj: obj): obj[] => {
  return objArray.filter((item) => item.name !== obj.name);
};

export const filterObjArr2 = (objArray: obj[], obj1: obj, obj2: obj): obj[] => {
  return objArray.filter(
    (item) => item.name !== obj1.name && item.name !== obj2.name
  );
};

export const insertObj = (objArray: obj[], obj: obj): obj[] => {
  if (obj.order >= objArray.length) {
    return [...objArray, obj];
  }
  const indexToInsert = obj.order - 1;
  return [
    ...objArray.slice(0, indexToInsert),
    obj,
    ...objArray.slice(indexToInsert)
  ];
};

export const insertObj2 = (objArray: obj[], obj1: obj, obj2: obj): obj[] => {
  let firstObj: obj;
  let secondObj: obj;
  if (obj1.order < obj2.order) {
    firstObj = obj1;
    secondObj = obj2;
  } else {
    firstObj = obj2;
    secondObj = obj1;
  }
  if (firstObj.order >= objArray.length) {
    return [...objArray, firstObj, secondObj];
  } else {
    const firstIndexToInsert = firstObj.order - 1;
    const secondIndexToInsert = secondObj.order - 1;
    const array1 = [
      ...objArray.slice(0, firstIndexToInsert),
      firstObj,
      ...objArray.slice(firstIndexToInsert)
    ];
    return [
      ...array1.slice(0, secondIndexToInsert),
      secondObj,
      ...array1.slice(secondIndexToInsert)
    ];
  }
};

export const sortObjArr = (objArray: obj[]): obj[] => {
  return objArray.sort((a, b) => a.order - b.order);
};

export const reorderArray = (array: obj[]): obj[] => {
  let order = 1;
  for (let i = 0; i < array.length; i++) {
    if (array[i]["order"] !== order) {
      array[i]["order"] = order;
    }
    order++;
  }
  return array;
};
