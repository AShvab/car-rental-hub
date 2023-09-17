import React, { useEffect, useState } from "react";
import CarItem from "../../components/CarItem/CarItem";
import { List } from "./FavoritesPage.styled";

const FavoritesPage = () => {
  const [favoriteCars, setFavoriteCars] = useState([]);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavoriteCars(favorites);
  }, []);

  const handleRemoveFromFavorites = (carId) => {
    
    const updatedFavorites = favoriteCars.filter((car) => car.id !== carId);
    setFavoriteCars(updatedFavorites);


    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div>
      <List>
        {favoriteCars.map((car) => (
          <CarItem
            key={car.id}
            car={car}
            onRemoveFromFavorites={handleRemoveFromFavorites}
          />
        ))}
      </List>
    </div>
  );
};

export default FavoritesPage;
