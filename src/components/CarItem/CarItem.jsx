import React from "react";
import { Img, Item, LearnMoreBtn } from "./CarItem.styled";

const CarItem = ({ car }) => {
  // const [isShowModal, setIsShowModal] = useState(false);

  // const toggleModal = () => {
  //   setIsShowModal(!isShowModal);
  

  return (

    <Item>
      <Img width="274" src={car.img} alt={car.make} />
      <p>{car.make}</p>
      <p>{car.model},</p>
      <p>{car.year}</p>
      <p>{car.rentalPrice}</p>
      <p>{car.address}</p>
      <p>{car.type}</p>
      <p>{car.description}</p>
      <p>{car.fuelConsumption}</p>
      <p>{car.engineSize}</p>
      <LearnMoreBtn type="button">Learn more</LearnMoreBtn>
    </Item>
  );
};

export default CarItem;
