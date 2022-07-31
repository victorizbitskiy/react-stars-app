import React, { useState } from 'react';
import colorData from '../data/color-data.json'
import AddColorForm from './AddColorForm';
import ColorList from './ColorList';

const App = () => {
  const [colors, setColors] = useState(colorData)
  return (
    <>
      <AddColorForm
        onNewColor={(title, color) => {

        }}
      />
      <ColorList
        colors={colors}
        onRateColor={(id, rating) => {
          const newColors = colors.map(color =>
            color.id === id ? { ...color, rating } : color
          );
          setColors(newColors);
        }}
        onRemoveColor={id => {
          const newColors = colors.filter(color => color.id !== id);
          setColors(newColors)
        }}
      />
    </>
  );
};

export default App;