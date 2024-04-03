// cards.styled.js
import styled from "styled-components";

export const Background = styled.div`
  background: url("https://images.unsplash.com/photo-1603366615917-1fa6dad5c4fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  height: 100%; /* Adjust the value based on your scrollbar width */
  width: 100%;
  // overflow: hidden;
  @media (min-width: 1000px) {
    position: fixed;
  }
  top: 0;
  left: 0;
  z-index: -1; /* Send the background to the back */
`;
export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start; /* Adjusted alignment */
  flex-wrap: wrap; /* Allow items to wrap to the next line */
  @media (max-width: 1000px) {
    margin-top: 0;
  }
  margin-top: 8rem;
`;

export const CardContainer1 = styled.div`
  font-family: "Jost", sans-serif;

  background-color: rgb(111, 111, 111, 0.36);
  // border: 1px solid #ccc;
  border-radius: 5px;
  padding: 1.5em 0 1.5em 0;
  margin: 1rem; /* Reduced margin for mobile */
  // margin-top: 4rem; /* Adjusted margin-top */
  box-sizing: border-box;
  // width: calc(50% - 2rem); /* Adjusted width for better layout */
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex; /* Added */
  flex-direction: column; /* Added */
  max-width: 30rem; /* Added max-width */
  // margin-top: 10rem; /* Removed top margin */
  color: white;

  //  glassmorphism code
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18)
  
  @media (max-width: 1400px) {
    margin: 1rem; /* Reduced margin for smaller screens */

    width: calc(50% - 2rem); /* Adjusted width for smaller screens */
  }
  @media (max-width: 768px) {
    width: calc(100% - 2rem); /* Adjusted width for mobile */
  }

  p {
    font-size: 1.2rem;
  }
  .price {
    font-size: 1.5rem;
  }

  button {
    font-size: 1.1rem;
    color: white;
    height: 3rem;
    width: 60%;
    background: rgb(255, 101, 96);
    border: 2px solid white;
    border-radius: 5px;
    transition: 0.15s;
    margin: 1rem;
  }
  button:hover {
    background: transparent;
  }
`;

export const CardContainer2 = styled(CardContainer1)``;

export const ImageContainer = styled.div`
  // background-color: rgb(86, 86, 86, 0.1);
  display: flex;
  // border: 2px solid red;
  width: 60%; /* Changed width */
  justify-content: center; /* Added */
  align-items: center; /* Added */
  padding: 1rem; /* Added for spacing */
  object-fit: contain;

  img {
    max-width: 80%; /* Adjusted width of images */
    margin: 0.5rem; /* Added margin for spacing between images */
  }
  
`;
