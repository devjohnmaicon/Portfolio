import React, { useState } from "react";
import { GalleryComponent, ImageContainer, ImageWrapper } from "./styleGallery";
import { MdArrowBackIosNew, MdArrowForwardIos, MdClose } from "react-icons/md";

export const Gallery = ({ setShowGallery, imagesSlide }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const quantityImages = imagesSlide.length;

  const nextImage = () => {
    currentImage < quantityImages - 1
      ? setCurrentImage(currentImage + 1)
      : setCurrentImage(0);
  };

  const backImage = () => {
    currentImage > 0
      ? setCurrentImage(currentImage - 1)
      : setCurrentImage(quantityImages - 1);
  };

  return (
    <GalleryComponent>
      <ImageWrapper className="animate__animated animate__slideInRight">
        {quantityImages > 1 && (
          <button className="arrow-left" onClick={() => backImage()}>
            <MdArrowBackIosNew className="btn" size="3rem" />
          </button>
        )}

        <ImageContainer >
          <img
            src={require(`../../../assets/images/${imagesSlide[currentImage]}`)}
            alt=""
          />
        </ImageContainer>

        {quantityImages > 1 && (
          <button className="arrow-right" onClick={() => nextImage()}>
            <MdArrowForwardIos className="btn" size="3rem" />
          </button>
        )}

        <div className="close">
          <button onClick={() => setShowGallery(false)}>
            <MdClose size={"2rem"} style={{ color: "#000" }} />
          </button>
        </div>
      </ImageWrapper>
    </GalleryComponent>
  );
};
