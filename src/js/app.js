export default function orderByProps(obj, [...property]) {
  const copyObj = { ...obj };
  const arrWithMatchs = [];
  const arrWithoutMatchs = [];
  property.forEach((prop) => {
    for (const key in copyObj) {
      if (key === prop) {
        arrWithMatchs.push({ key, value: copyObj[key] });
        Reflect.deleteProperty(copyObj, key);
      }
    }
  });
  for (const key in copyObj) {
    if (key) {
      arrWithoutMatchs.push({ key, value: copyObj[key] });
    }
  }
  arrWithoutMatchs.sort((a, b) => a.key.localeCompare(b.key));
  arrWithoutMatchs.forEach((elem) => arrWithMatchs.push(elem));
  return arrWithMatchs;
}
