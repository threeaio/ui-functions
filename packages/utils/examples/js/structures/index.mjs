// src/structures/array.ts
var createArrayFromLength = (length) => {
  if (length < 0) throw new Error("Length cannot be negative");
  return Array.from({ length }, (_, i) => i);
};
var insertInArray = (array, newEl, insertAtIndex) => {
  if (!array) throw new Error("Array cannot be null or undefined");
  if (insertAtIndex < 0 || insertAtIndex > array.length) {
    throw new Error("Insert index out of bounds");
  }
  return [
    ...array.slice(0, insertAtIndex),
    newEl,
    ...array.slice(insertAtIndex)
  ];
};
var moveInArray = (array, from, to) => {
  if (!array) throw new Error("Array cannot be null or undefined");
  if (from < 0 || from >= array.length || to < 0 || to >= array.length) {
    throw new Error("Index out of bounds");
  }
  const elm = array[from];
  const withoutElArray = [...array.slice(0, from), ...array.slice(from + 1)];
  return insertInArray(withoutElArray, elm, to);
};

// src/structures/object.ts
var getObjectKeys = (obj) => {
  if (!obj) throw new Error("Object cannot be null or undefined");
  return Object.keys(obj);
};

export { createArrayFromLength, getObjectKeys, insertInArray, moveInArray };
