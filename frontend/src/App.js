import React, { useState } from 'react';
import './global.css';

import Logon from './pages/Logon';

export default function App() {
  const [counter, setCounter] = useState(0);
  const [left_counter, setLeftCounter] = useState(10);

  const incCounter = () => setCounter(counter + 1);
  const decLeftCounter = () => setLeftCounter(left_counter - 1);

  return (
    <>
      <Logon />
    </>
  );
}
