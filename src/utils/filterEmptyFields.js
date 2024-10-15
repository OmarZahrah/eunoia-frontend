const filterEmptyFields = (data) => {
  return Object.fromEntries(
    Object.entries(data).filter(([_, value]) => {
      if (value === "" || value === null) return false; // Remove empty strings or null values
      if (Array.isArray(value) && value.length === 0) return false; // Remove empty arrays
      if (value instanceof FileList && value.length === 0) return false; // Remove empty FileLists
      return true; // Keep everything else
    })
  );
};
export default filterEmptyFields;
