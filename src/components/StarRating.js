import React from "react";
import Star from "./Star";

const createArray = (lenght) => [...Array(lenght)];

const StarRating = ({ tatalStars = 5 }) => {
  return createArray(tatalStars).map((n, i) => (
    <Star selected={true} key={i} />
  ));
};

export default StarRating;
