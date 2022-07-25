import React from 'react';
import { FaStar } from 'react-icons/fa';

const Star = ({ selected = false, onSelect }) => {
  return (
    <FaStar color={selected ? 'gold' : 'gray'} onClick={onSelect} />)
};

export default Star;