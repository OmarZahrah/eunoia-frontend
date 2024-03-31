export const filterData = (data) => {
  const filteredData = Object.fromEntries(
    Object.entries(data).filter(
      (el) => el[1] !== "" && el[1] !== null && el[1] !== undefined
    )
  );
  return filteredData;
};
