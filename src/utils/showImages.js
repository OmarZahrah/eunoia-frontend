export const showImages = (selectedFiles) => {
  const selectedFilesArray = Array.from(selectedFiles);
  const imagesArray = selectedFilesArray.map((file) => {
    return URL.createObjectURL(file);
  });

  return imagesArray;
};
