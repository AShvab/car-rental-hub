export const getCityDetails = (car) => {
    return car.address.split(",")[2];
  }

  export const getCountryDetails = (car) => {
    return car.address.split(",")[1];
  };