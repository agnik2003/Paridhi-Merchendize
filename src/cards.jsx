// cards.jsx
import React, { useState } from "react";
import {
  Background,
  CardContainer1,
  CardContainer2,
  CardWrapper,
  ImageContainer,
} from "./cards.styled";
import whiteFrontImage from "./merchendize-images/white-front.png"; // Importing the image
import whiteBackImage from "./merchendize-images/white-back.png"; // Importing the image
import blackFrontImage from "./merchendize-images/black-front.png"; // Importing the image
import blackBackImage from "./merchendize-images/black-back.png"; // Importing the image


const Card = ({ title, content }) => {
  const [selectedImageIndex1, setSelectedImageIndex1] = useState(0);
  const [selectedImageIndex2, setSelectedImageIndex2] = useState(0);

  const handleDotClick1 = (index) => {
    setSelectedImageIndex1(index);
  };

  const handleDotClick2 = (index) => {
    setSelectedImageIndex2(index);
  };

  return (
    <Background>
      <CardWrapper>
        <CardContainer1>
          <ImageContainer>
            <img
              src={whiteFrontImage}
              alt=""
              style={{ display: selectedImageIndex1 === 0 ? "block" : "none" }}
            />{" "}
            {/* Using the imported image */}
            <img
              src={whiteBackImage}
              alt=""
              style={{ display: selectedImageIndex1 === 1 ? "block" : "none" }}
            />{" "}
            {/* Using the imported image */}
          </ImageContainer>
          <div>
            <span
              onClick={() => handleDotClick1(0)}
              style={{
                cursor: "pointer",
                color: selectedImageIndex1 === 1 ? "grey" : "white",
                fontSize: "1.5rem",
              }}
            >
              ●
            </span>
            <span
              onClick={() => handleDotClick1(1)}
              style={{
                cursor: "pointer",
                marginLeft: "0.5rem",
                color: selectedImageIndex1 === 0 ? "grey" : "white",
                fontSize: "1.5rem",
              }}
            >
              ●
            </span>
          </div>
          <div>
            <p>
              Try this awesome White merchendize 
            </p>
            <div className="price">
              <del> Rs 300</del> Rs 200 
            </div>
            
            <button>Buy Now</button>

          </div>
        </CardContainer1>

        <CardContainer2>
          <ImageContainer>
            <img
              src={blackFrontImage}
              alt=""
              style={{ display: selectedImageIndex2 === 0 ? "block" : "none" }}
            />{" "}
            {/* Using the imported image */}
            <img
              src={blackBackImage}
              alt=""
              style={{ display: selectedImageIndex2 === 1 ? "block" : "none" }}
            />{" "}
            {/* Using the imported image */}
          </ImageContainer>
          <div>
            <span
              onClick={() => handleDotClick2(0)}
              style={{
                cursor: "pointer",
                color: selectedImageIndex2 === 1 ? "grey" : "white",
                fontSize: "1.5rem",
              }}
            >
              ●
            </span>
            <span
              onClick={() => handleDotClick2(1)}
              style={{
                cursor: "pointer",
                marginLeft: "0.5rem",
                color: selectedImageIndex2 === 0 ? "grey" : "white",
                fontSize: "1.5rem"
              }}
            >
              ●
            </span>
          </div>
          <div>
            <p>
            Try this awesome Black merchendize
            </p>
            <div className="price">
              <del>Rs 300</del> Rs 200
            </div>
            
            <button>Buy Now</button>

          </div>
        </CardContainer2>
      </CardWrapper>
    </Background>
  );
};

export default Card;
