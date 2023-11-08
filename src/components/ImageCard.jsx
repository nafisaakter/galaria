import React from "react";
import { Draggable } from "react-beautiful-dnd";

const ImageCard = ({
  image,
  index,
  isSelected,
  selectedImages,
  setFeaturedImage,
  deletedSelectedImages,
}) => {
  return (
    <Draggable draggableId={image.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`image-card ${
            image.isfeatured ? "featured" : "not-featured"
          }`}
        >
          <img src={image.src} alt={image.id} />
        </div>
      )}
    </Draggable>
  );
};

export default ImageCard;
