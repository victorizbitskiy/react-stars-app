import React from 'react';
import ColorProvider from '../hooks/color-hooks';
import AddColorForm from './AddColorForm'
import ColorList from './ColorList';

const App = () => {
  return (
    <ColorProvider >
      <AddColorForm />
      <ColorList />
    </ColorProvider>
  );
};

export default App;