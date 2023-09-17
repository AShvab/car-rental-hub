import {
  ButtonHeart,
  Element,
  Img,
  Item,
  LearnMoreBtn,
  List,
  Model,
  TitleText,
  WrapperMake,
} from "./CarItem.styled";
import Modal from "../Modal/Modal";
import Card from "../Card/Card";
import { getCityDetails, getCountryDetails } from "../../helpers/utils";
import sprite from "../../assets/sprite.svg";
import { useEffect, useState } from "react";

const CarItem = ({ car }) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const storedFavorite = localStorage.getItem(`favorite_${car.id}`);
    setIsFavorite(storedFavorite === "true");
  }, [car.id]);

  const handleButtonHeartClick = () => {
    const newFavorite = !isFavorite;
    setIsFavorite(newFavorite);
  
    
    localStorage.setItem(`favorite_${car.id}`, newFavorite.toString());
  
    
    if (newFavorite) {
      const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      favorites.push(car);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    } else {
      const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      const updatedFavorites = favorites.filter((favoriteCar) => favoriteCar.id !== car.id);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
  };

  const toggleModal = () => {
    setIsShowModal(!isShowModal);
  };

  return (
    <Item>
      <Img width="274" src={car.img} alt={car.make} />

      <ButtonHeart onClick={handleButtonHeartClick}>
        <use
          href={
            isFavorite
              ? sprite + "#icon-heart-active"
              : sprite + "#icon-heart-normal"
          }
        />
      </ButtonHeart>
      <TitleText>
        <WrapperMake>
          {car.make} <Model>{car.model}</Model>, {car.year}
        </WrapperMake>
        <p>{car.rentalPrice}</p>
      </TitleText>

      <List>
        <Element>{getCityDetails(car)}</Element>
        <Element>{getCountryDetails(car)}</Element>
        <Element>{car.rentalCompany}</Element>
        <Element>{car.type}</Element>
        <Element>{car.model}</Element>
        <Element>{car.id}</Element>
        <Element>{car.functionalities[0]}</Element>
      </List>

      <LearnMoreBtn onClick={toggleModal}>Learn more</LearnMoreBtn>
      {isShowModal && (
        <Modal onClose={toggleModal} car={car}>
          <Card car={car} />
        </Modal>
      )}
    </Item>
  );
};

export default CarItem;
