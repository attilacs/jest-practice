import { objInterface } from "./variables";

export const filterObjArr = (
  objArray: objInterface[],
  obj: objInterface
): objInterface[] => {
  return objArray.filter((item) => item.name !== obj.name);
};

export const filterObjArr2 = (
  objArray: objInterface[],
  obj1: objInterface,
  obj2: objInterface
): objInterface[] => {
  return objArray.filter(
    (item) => item.name !== obj1.name && item.name !== obj2.name
  );
};

export const insertObj = (
  objArray: objInterface[],
  obj: objInterface
): objInterface[] => {
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

export const insertObj2 = (
  objArray: objInterface[],
  obj1: objInterface,
  obj2: objInterface
): objInterface[] => {
  let firstObj: objInterface;
  let secondObj: objInterface;
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

export const sortObjArr = (objArray: objInterface[]): objInterface[] => {
  return objArray.sort((a, b) => a.order - b.order);
};

export const reorderArray = (array: objInterface[]): objInterface[] => {
  let order = 1;
  for (let i = 0; i < array.length; i++) {
    if (array[i]["order"] !== order) {
      array[i]["order"] = order;
    }
    order++;
  }
  return array;
};
