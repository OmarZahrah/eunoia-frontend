export const handleImages = (file) => {
  const selectedFiles = file;
  const imageFile = selectedFiles[0];
  const photo = URL.createObjectURL(...selectedFiles);
  return { imageFile, photo };
};

// export const handleAlbum = (files) => {
//   const selectedFiles = files;
//   const selectedFilesArray = Array.from(selectedFiles);
//   const imagesArray = selectedFilesArray.map((file) => {
//     return URL.createObjectURL(file);
//   });
//   setAlbumPhotosFile(images) => images.concat(...selectedFiles));
// };
