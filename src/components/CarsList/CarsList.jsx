import React, { useState, useEffect } from "react";
import { fetchCars } from "../../services/api";
import Loader from "../Loader/Loader";
import { Button, List, Text } from "./CarsList.styled";
import CarItem from "../CarItem/CarItem";

const CarsList = () => {
  const [cars, setCars] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const loadCars = async () => {
      setLoading(true);
      try {
        const data = await fetchCars(page);

        if (data.length === 0) {
          setHasMore(false);
        } else {
          if (page === 1) {
            setCars(data);
          } else {
            setCars((prevCars) => [...prevCars, ...data]);
          }
        }
      } catch (error) {
        console.error("Error fetching cars:", error);
      } finally {
        setLoading(false);
      }
    };
    loadCars();
  }, [page]);

  const handleLoadMore = () => {
    if (hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <>
      <List>
        {cars.map((car, id) => (
          <CarItem key={id} car={car} />
        ))}
      </List>
      {loading && <Loader />}
      {!loading && hasMore && (
        <Button onClick={handleLoadMore}>Load more</Button>
      )}
      {!loading && !hasMore && <Text>No more cars to load.</Text>}
    </>
  );
};

export default CarsList;

