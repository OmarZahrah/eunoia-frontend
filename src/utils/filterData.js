export const filterData = (data, images = false) => {
  const filteredData = images
    ? Object.fromEntries(
        Object.entries(data).filter(
          (el) =>
            (el[1] !== "" &&
              el[1] !== null &&
              el[1] !== undefined &&
              el[0] !== "images") ||
            "packagePhoto"
        )
      )
    : Object.fromEntries(
        Object.entries(data).filter(
          (el) => el[1] !== "" && el[1] !== null && el[1] !== undefined
        )
      );

  return filteredData;
};
