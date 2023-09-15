import React, { useState, useEffect } from "react";
import { fetchAllCars } from "../../services/api";
import Loader from "../Loader/Loader";

const CarsList = () => {
  const [cars, setCars] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Функція для отримання списку автомобілів
    const loadCars = async () => {
      setLoading(true);
      try {
        const data = await fetchAllCars(page);
        setCars((prevCars) => [...prevCars, ...data]); // Додаємо нові автомобілі до існуючого списку
        setLoading(false);
      } catch (error) {
        console.error("Error fetching cars:", error);
        setLoading(false);
      }
    };

    loadCars(); // Викликаємо функцію отримання автомобілів
  }, [page]); // Викликаємо функцію при зміні сторінки

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <ul>
        {cars.map((car, id) => (
          <li key={id}>
            <img src={car.img} alt={car.make} />
            <p>{car.make}</p>
            <p>{car.model},</p>
            <p>{car.year}</p>
            <p>{car.rentalPrice}</p>
            <p>{car.address}</p>
            <p>{car.type}</p>
            <p>{car.description}</p>
            <p>{car.fuelConsumption}</p>
            <p>{car.engineSize}</p>
          </li>
        ))}
      </ul>

      {loading && <Loader />}

      <button onClick={handleLoadMore}>Load more</button>
    </>
  );
};

export default CarsList;
