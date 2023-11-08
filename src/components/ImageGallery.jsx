import React from "react";
import ImageCard from "./ImageCard";
import { Droppable } from "react-beautiful-dnd";

const ImageGallery = ({
  images,
  selectedImages,
  setFeaturedImage,
  deletedSelectedImages,
}) => {
  return (
    <Droppable droppableId="image-gallery">
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          style={{ backgroundColor: snapshot.isDraggingOver ? "blue" : "grey" }}
          {...provided.droppableProps}
          className="image-gallery"
        >
          {images.map((image, index) => (
            <ImageCard
              key={image.id}
              index={index}
              image={image}
              isSelected={selectedImages.includes(image.id)}
              selectedImages={selectedImages}
              setFeaturedImage={setFeaturedImage}
              deletedSelectedImages={deletedSelectedImages}
            />
          ))}

          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default ImageGallery;
