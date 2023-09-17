import React, { useState } from "react";
import {
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

const CarItem = ({ car }) => {
  const [isShowModal, setIsShowModal] = useState(false);

  const toggleModal = () => {
    setIsShowModal(!isShowModal);
  };

  return (
    <Item>
      <Img width="274" src={car.img} alt={car.make} />

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
