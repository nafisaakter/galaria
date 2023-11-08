import "./App.css";
import ImageGallery from "./components/ImageGallery";
import image1 from "../src/assets/images/image-1.webp";
import image2 from "../src/assets/images/image-2.webp";
import image3 from "../src/assets/images/image-3.webp";
import image4 from "../src/assets/images/image-4.webp";
import image5 from "../src/assets/images/image-5.webp";
import image6 from "../src/assets/images/image-6.webp";
import image7 from "../src/assets/images/image-7.webp";
import image8 from "../src/assets/images/image-8.webp";
import image9 from "../src/assets/images/image-9.webp";
import image10 from "../src/assets/images/image-10.jpeg";
import image11 from "../src/assets/images/image-11.jpeg";

import { DragDropContext } from "react-beautiful-dnd";
import { useState } from "react";

function App() {
  const [images, setImages] = useState([
    { id: 1, src: image1, isfeatured: true },
    { id: 2, src: image2, isfeatured: false },
    { id: 3, src: image3, isfeatured: false },
    { id: 4, src: image4, isfeatured: false },
    { id: 5, src: image5, isfeatured: false },
    { id: 6, src: image6, isfeatured: false },
    { id: 7, src: image7, isfeatured: false },
    { id: 8, src: image8, isfeatured: false },
    { id: 9, src: image9, isfeatured: false },
    { id: 10, src: image10, isfeatured: false },
    { id: 11, src: image11, isfeatured: false },
  ]);

  const [selectedImages, setSelectedImages] = useState([]);

  const setFeaturedImage = (imageId) => {
    const updatedImages = images.map((image) => {
      if (image.id === imageId) {
        return { ...image, isfeatured: true };
      } else {
        return { ...image, isfeatured: false };
      }
    });
    setImages(updatedImages);
  };

  const deletedSelectedImages = () => {
    const updatedImages = images.filter((image) => {
      return !selectedImages.includes(image.id);
    });
    setImages(updatedImages);
    setSelectedImages([]);
  };

  const toggleImageSelection = (imageId) => {
    if (selectedImages.includes(imageId)) {
      setSelectedImages(selectedImages.filter((id) => id !== imageId));
    } else {
      setSelectedImages([...selectedImages, imageId]);
    }
  };

  const onDragEnd = (result) => {
    console.log(result);
    if (!result.destination) {
      return;
    }

    const reorderedImages = Array.from(images);
    const [reorderedImage] = reorderedImages.splice(result.source.index, 1);
    reorderedImages.splice(result.destination.index, 0, reorderedImage);

    setImages(reorderedImages);
  };

  return (
    <>
      <div className="app">
        <DragDropContext onDragEnd={onDragEnd}>
          <ImageGallery
            images={images}
            selectedImages={selectedImages}
            setFeaturedImage={setFeaturedImage}
            deletedSelectedImages={deletedSelectedImages}
            toggleImageSelection={toggleImageSelection}
          />
        </DragDropContext>
      </div>
    </>
  );
}

export default App;
