import React from 'react';
import ColorProvider from '../hooks/color-hooks';
import AddColorForm from './AddColorForm'
import ColorList from './ColorList';
import { Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <ColorProvider >
      <AddColorForm />
      <Routes>
        <Route path="/" element={<ColorList />} />
      </Routes>

    </ColorProvider>
  );
};

export default App;