import React, { useEffect, useState } from "react";
import CarItem from "../../components/CarItem/CarItem";
import { List } from "./FavoritesPage.styled";


const FavoritesPage = () => {
  const [favoriteCars, setFavoriteCars] = useState([]);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavoriteCars(favorites);
  }, []);

  return (
    <div>
      <List>
        {favoriteCars.map((car) => (
          <CarItem key={car.id} car={car} />
        ))}
      </List>
    </div>
  );
};

export default FavoritesPage;
