/**
 * 移除对象中无效键值对
 * @param {Object} data
 */
export function removeInvalidValue(data) {
  const newData = {};
  Object.keys(data).forEach((key) => {
    if (!isEmpty(data[key])) {
      newData[key] = data[key];
    }
  });

  return newData;
}

/**
 * 判空
 */
export function isEmpty(value) {
  let flag = false;
  // '', undefined, null
  if (['', undefined, null].includes(value)) {
    flag = true;
  }
  // [], {}
  if (value instanceof Object && Object.keys(value).length === 0) {
    flag = true;
  }
  return flag;
}

export default {
  removeInvalidValue,
  isEmpty,
};
