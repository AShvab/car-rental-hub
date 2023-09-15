import React from "react";
import { Container, List, ListItem, Photo, Title, Wrap} from "./HomePage.styled";
import carImage from "../../assets/car-2209439_1280-min.png";
// background: #c2c8cf;

const HomePage = () => {
  return (
    <Container> 
      <Wrap>
      <Title>Car Rental Hub</Title>
      <List>
        <ListItem>На нашому сайті ви знайдете великий вибір різних марок та моделей автомобілів для оренди</ListItem>
        <ListItem>Зручний пошук автомобілів за різними критеріями</ListItem>
        <ListItem>Конкурентоспроможні та доступні ціни</ListItem>
        <ListItem>Ви можете легко та швидко забронювати автомобіль без додаткових витрат часу</ListItem>
        <ListItem>Гнучкі умови оренди, включаючи термін та місце повернення автомобіля.</ListItem>
      </List>
      </Wrap>   
     
      <Photo src={carImage} alt="super-car" />      
    </Container>
  );
};

export default HomePage;
