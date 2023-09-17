import { getCityDetails, getCountryDetails } from "../../helpers/utils";
import { Button, Description, Element, Image, List, Model, Text, WrapperMake } from "./Card.styled";

const Card = ({car}) => {

return (
    <>
    <Image
        src={car.img}
        alt={`${car.make} ${car.model}`}
      />
      <WrapperMake>
          {car.make} <Model>{car.model}</Model>, {car.year}
        </WrapperMake>
        <List>
          <Element>{getCityDetails(car)}</Element>
          <Element>{getCountryDetails(car)}</Element>
          <Element>Id: {car.id}</Element>
          <Element>Year: {car.year}</Element>
          <Element>Type: {car.type}</Element>
        </List>
        <List>
          <Element>Fuel Consumption: {car.fuelConsumption}</Element>
          <Element>Engine Size: {car.engineSize}</Element>
        </List>
        <Description>{car.description}</Description>
        <Text>Accessories and functionalities:</Text>
        <Button href="tel:+380730000000">Rental car</Button>
    </>
)
}

export default Card;