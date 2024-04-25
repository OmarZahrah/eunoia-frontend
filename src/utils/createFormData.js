export const createFormData = (data) => {
  let finalData = new FormData();
  Object.keys(data).forEach((key) => finalData.append(key, data[key]));
  return finalData;
};
