import { Image, Model, WrapperMake } from "./Card.styled";

const Card = ({car}) => {
    console.log(car)
return (
    <>
    <Image
        src={car.img}
        alt={`${car.make} ${car.model}`}
      />
      <WrapperMake>
          {car.make} <Model>{car.model}</Model>, {car.year}
        </WrapperMake>
    </>
)
}

export default Card;