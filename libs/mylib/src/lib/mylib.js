import React from 'react';
import { v4 as uuidv4 } from 'uuid';

export const Mylib = (props) => {
  return (
    <div>
      {uuidv4()}
      <h1>Welcome to mylib!</h1>
    </div>
  );
};
export default Mylib;
