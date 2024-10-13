import { useState } from "react";

const useImageUploader = (type = "image") => {
  const [previewImages, setPreviewImages] = useState([]);
  const [imageFiles, setImageFiles] = useState([]);

  const handleSelectFiles = (event) => {
    const selectedFiles = Array.from(event.target.files);

    // Create preview URLs for images
    const previewUrls = selectedFiles.map((file) => URL.createObjectURL(file));

    if (type === "image") {
      setPreviewImages(previewUrls);
      setImageFiles(selectedFiles[0]);
    } else if (type === "album") {
      setPreviewImages((prevImages) => [...prevImages, ...previewUrls]);
      setImageFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
    }
  };

  const handleDeleteImage = (index) => {
    setPreviewImages((prevImages) => prevImages.filter((_, i) => i !== index));
    setImageFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  return {
    previewImages,
    imageFiles,
    handleSelectFiles,
    handleDeleteImage,
  };
};

export default useImageUploader;
