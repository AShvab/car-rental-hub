import styled, { keyframes } from "styled-components";

const appearFromBottom = keyframes`
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  padding-left: 100px;
  padding-right: 100px;
  height: 93vh;
  /* background: #318139; */
  background: #d9e2ed;
`;

export const Wrap = styled.div`
display: flex;
flex-direction: column;
`;

export const Title = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 70px;
  text-align: center; 
  margin-top: 25vh;
  margin-bottom: 40px;
  padding:0;
  animation: ${appearFromBottom} 1s ease-out;
`;

export const Photo = styled.img`
  width: auto; 
  height: 90%; 
  display: block;
  animation: ${appearFromBottom} 1s ease-out;
`;

export const List = styled.ul`
font-size: 16px;
letter-spacing: 1px;
`;

export const ListItem = styled.li`
  margin-bottom: 28px; 
  animation: ${appearFromBottom} 1s ease-out;
`;